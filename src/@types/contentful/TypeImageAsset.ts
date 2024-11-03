import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageAssetFields {
    name: EntryFieldTypes.Symbol;
    imageDescription?: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
}

export type TypeImageAssetSkeleton = EntrySkeletonType<TypeImageAssetFields, "imageAsset">;
export type TypeImageAsset<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeImageAssetSkeleton, Modifiers, Locales>;

export function isTypeImageAsset<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeImageAsset<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'imageAsset'
}
