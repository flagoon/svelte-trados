import { createClient, type EntrySkeletonType } from "contentful";
import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
} from "$env/static/private";
import type { TypeBlogPostSkeleton, TypePageSkeleton } from "$types/contentful";

export const client = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  environment: CONTENTFUL_ENVIRONMENT,
  space: CONTENTFUL_SPACE_ID,
});

type ContentfulConfig = {
  contentType: string;
};

export type EntriesWithSlug = TypePageSkeleton | TypeBlogPostSkeleton;

export const getEntryBySlug =
  <T extends EntriesWithSlug>(contentType: T["contentTypeId"]) =>
  async (slug: string) => {
    const entries = await client.getEntries<EntriesWithSlug>({
      content_type: contentType,
      "fields.slug": slug,
    });

    const entry = entries.items[0];
    return entry;
  };

export const getPageBySlug = getEntryBySlug<TypePageSkeleton>("page");
export const getBlogPostBySlyg = getEntryBySlug<TypeBlogPostSkeleton>("blogPost");

export const getEntriesByContentType = async <T extends EntrySkeletonType>(
  config: ContentfulConfig,
) => await client.getEntries<T>({ content_type: config.contentType });
