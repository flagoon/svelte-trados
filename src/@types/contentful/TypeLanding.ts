import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLandingFields {
    name: EntryFieldTypes.Symbol;
    headline: EntryFieldTypes.Symbol;
    hero?: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.RichText;
    items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    slug: EntryFieldTypes.Symbol;
    seo?: EntryFieldTypes.Symbol;
}

export type TypeLandingSkeleton = EntrySkeletonType<TypeLandingFields, "landing">;
export type TypeLanding<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLandingSkeleton, Modifiers, Locales>;

export function isTypeLanding<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLanding<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'landing'
}
