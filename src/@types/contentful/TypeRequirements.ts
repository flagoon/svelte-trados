import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRequirementsFields {
    name: EntryFieldTypes.Symbol;
    requirements: EntryFieldTypes.Object;
}

export type TypeRequirementsSkeleton = EntrySkeletonType<TypeRequirementsFields, "requirements">;
export type TypeRequirements<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRequirementsSkeleton, Modifiers, Locales>;

export function isTypeRequirements<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeRequirements<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'requirements'
}
