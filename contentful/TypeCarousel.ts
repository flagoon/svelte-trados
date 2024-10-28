import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeCarouselItemSkeleton } from "./TypeCarouselItem";

export interface TypeCarouselFields {
  name: EntryFieldTypes.Symbol;
  items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCarouselItemSkeleton>>;
}

export type TypeCarouselSkeleton = EntrySkeletonType<TypeCarouselFields, "carousel">;
export type TypeCarousel<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCarouselSkeleton, Modifiers, Locales>;
