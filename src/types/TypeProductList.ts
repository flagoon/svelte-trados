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
  products: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeProductSkeleton>
  >;
  description: EntryFieldTypes.RichText;
  thumbnail?: EntryFieldTypes.AssetLink;
  slug: EntryFieldTypes.Symbol<
    | "business-manager"
    | "groupshare"
    | "language-cloud"
    | "studio"
    | "studio-freelance"
    | "studio-professional"
    | "szkolenia"
    | "team"
    | "uczelnie-i-studenci"
  >;
  bottomDescription?: EntryFieldTypes.RichText;
  seo?: EntryFieldTypes.Text;
}

export type TypeProductListSkeleton = EntrySkeletonType<
  TypeProductListFields,
  "productList"
>;
export type TypeProductList<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductListSkeleton, Modifiers, Locales>;
