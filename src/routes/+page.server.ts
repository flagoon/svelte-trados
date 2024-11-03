import { error, isHttpError, type Load } from "@sveltejs/kit";
import { getPageBySlug } from "$lib/contentful";

export const load: Load = async () => {
  try {
    const page = await getPageBySlug("/");
    if (!page) {
      error(404, "Strona o podanym linku nie istnieje");
    }
    return { page };
  } catch (e) {
    if (isHttpError(e)) {
      console.log(e);
      error(e.status, { message: e.body.message });
    } else {
      console.log(e);
      error(400, { message: "Coś poszło nie tak" });
    }
  }
};
