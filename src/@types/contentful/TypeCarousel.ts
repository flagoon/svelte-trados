import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCarouselItemSkeleton } from "./TypeCarouselItem";

export interface TypeCarouselFields {
    name: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCarouselItemSkeleton>>;
}

export type TypeCarouselSkeleton = EntrySkeletonType<TypeCarouselFields, "carousel">;
export type TypeCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCarouselSkeleton, Modifiers, Locales>;

export function isTypeCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCarousel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'carousel'
}
