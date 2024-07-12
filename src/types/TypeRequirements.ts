import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeRequirementsFields {
  name: EntryFieldTypes.Symbol;
  requirements: EntryFieldTypes.Object;
}

export type TypeRequirementsSkeleton = EntrySkeletonType<
  TypeRequirementsFields,
  "requirements"
>;
export type TypeRequirements<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeRequirementsSkeleton, Modifiers, Locales>;
