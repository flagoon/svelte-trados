import { getEntriesByContentType } from "$lib/contentful";
import type { TypeProductListSkeleton } from "$types/contentful";

export async function load() {
  try {
    const response = await getEntriesByContentType<TypeProductListSkeleton>({
      contentType: "productList",
    });

    return {
      productList: response.items,
    };
  } catch (error) {
    console.error("Error fetching content from Contentful:", error);
    return {
      productList: [],
    };
  }
}
