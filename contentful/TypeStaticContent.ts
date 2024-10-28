import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeStaticContentFields {
  name: EntryFieldTypes.Symbol;
  label: EntryFieldTypes.Symbol;
  textContent: EntryFieldTypes.RichText;
  slug: EntryFieldTypes.Symbol;
}

export type TypeStaticContentSkeleton = EntrySkeletonType<TypeStaticContentFields, "staticContent">;
export type TypeStaticContent<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeStaticContentSkeleton, Modifiers, Locales>;
