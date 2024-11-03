import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeProductSkeleton } from "./TypeProduct";

export interface TypeProductListFields {
  name: EntryFieldTypes.Symbol;
  products: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProductSkeleton>>;
  description: EntryFieldTypes.RichText;
  thumbnail?: EntryFieldTypes.AssetLink;
  slug: EntryFieldTypes.Symbol;
  bottomDescription?: EntryFieldTypes.RichText;
  seo?: EntryFieldTypes.Text;
}

export type TypeProductListSkeleton = EntrySkeletonType<TypeProductListFields, "productList">;
export type TypeProductList<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductListSkeleton, Modifiers, Locales>;

export function isTypeProductList<Modifiers extends ChainModifiers, Locales extends LocaleCode>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeProductList<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "productList";
}
