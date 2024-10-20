import { type Load } from "@sveltejs/kit";
import { getPageBySlug } from "$lib";

export const load: Load = async () => {
  const page = await getPageBySlug("/");

  return { page };
};
