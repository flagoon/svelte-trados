import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogPostSkeleton } from "./TypeBlogPost";
import type { TypeLandingSkeleton } from "./TypeLanding";
import type { TypePageSkeleton } from "./TypePage";
import type { TypeProductSkeleton } from "./TypeProduct";

export interface TypeButtonFields {
    name: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    style: EntryFieldTypes.Symbol<"primary" | "secondary">;
    referenceTo?: EntryFieldTypes.EntryLink<TypeBlogPostSkeleton | TypeLandingSkeleton | TypePageSkeleton | TypeProductSkeleton>;
    url?: EntryFieldTypes.Symbol;
}

export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, "button">;
export type TypeButton<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeButtonSkeleton, Modifiers, Locales>;
