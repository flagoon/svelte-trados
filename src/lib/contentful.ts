import { type EntrySkeletonType, createClient } from "contentful";
import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
} from "$env/static/private";
import { array, either, option, taskEither } from "fp-ts";
import { identity, pipe } from "fp-ts/lib/function";
import { error } from "@sveltejs/kit";
import type { TypeBlogPostSkeleton, TypePageSkeleton } from "../types";

export const client = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  space: CONTENTFUL_SPACE_ID,
});

type ContentfulConfig = {
  contentType: string;
};

export type EntriesWithSlug = TypePageSkeleton | TypeBlogPostSkeleton;

export const getEntryBySlug =
  <T extends EntriesWithSlug>(contentType: T["contentTypeId"]) =>
  async (slug: string) => {
    const data = await taskEither.tryCatch(
      () =>
        client.getEntries<EntriesWithSlug>({
          content_type: contentType,
          "fields.slug": slug,
        }),
      either.toError,
    )();

    return pipe(
      data,
      either.map((d) => array.head(d.items)),
      either.fold(() => {
        error(404, "Nie można znaleźć treści");
      }, option.toUndefined),
    );
  };

export const getPageBySlug = getEntryBySlug<TypePageSkeleton>("page");
export const getBlogPostBySlyg =
  getEntryBySlug<TypeBlogPostSkeleton>("blogPost");

export const getEntriesByContentType = async <T extends EntrySkeletonType>(
  config: ContentfulConfig,
) => {
  const data = await taskEither.tryCatch(
    () => client.getEntries<T>({ content_type: config.contentType }),
    either.toError,
  )();

  return pipe(
    data,
    either.fold(() => {
      error(404, "Nie można znaleźć treści");
    }, identity),
  );
};
