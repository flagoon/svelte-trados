import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeButtonSkeleton } from "./TypeButton";

export interface TypeCarouselItemFields {
  name: EntryFieldTypes.Symbol;
  headline: EntryFieldTypes.Symbol;
  subheadline?: EntryFieldTypes.Symbol;
  buttons: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeButtonSkeleton>>;
  background: EntryFieldTypes.AssetLink;
}

export type TypeCarouselItemSkeleton = EntrySkeletonType<TypeCarouselItemFields, "carouselItem">;
export type TypeCarouselItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCarouselItemSkeleton, Modifiers, Locales>;
