import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";
import type { TypeCarouselSkeleton } from "./TypeCarousel";
import type { TypeHelpItemSkeleton } from "./TypeHelpItem";
import type { TypeProductListSkeleton } from "./TypeProductList";

export interface TypePageFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    heroImage?: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeButtonSkeleton | TypeCarouselSkeleton | TypeHelpItemSkeleton | TypeProductListSkeleton>>;
    slug: EntryFieldTypes.Symbol;
    seo?: EntryFieldTypes.Symbol;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}
