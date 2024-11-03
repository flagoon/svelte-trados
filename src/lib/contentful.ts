import { createClient, type EntrySkeletonType } from "contentful";
import {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
} from "$env/static/private";

import { type TypePageSkeleton, type TypeBlogPostSkeleton } from "../../contentful";

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
    console.log("slug", slug);
    const entries = await client.getEntries<T>({
      content_type: contentType,
      // @ts-expect-error - slug is not a property of EntriesWithSlug
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
