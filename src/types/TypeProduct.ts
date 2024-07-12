import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeRequirementsSkeleton } from "./TypeRequirements";

export interface TypeProductFields {
  name: EntryFieldTypes.Symbol;
  productName: EntryFieldTypes.Symbol;
  priceId?: EntryFieldTypes.Symbol;
  vat: EntryFieldTypes.Integer<0 | 23 | 5 | 8>;
  image: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.RichText;
  slug: EntryFieldTypes.Symbol;
  bottomDescription?: EntryFieldTypes.RichText;
  requirements?: EntryFieldTypes.EntryLink<TypeRequirementsSkeleton>;
  seo?: EntryFieldTypes.Symbol;
}

export type TypeProductSkeleton = EntrySkeletonType<
  TypeProductFields,
  "product"
>;
export type TypeProduct<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductSkeleton, Modifiers, Locales>;
