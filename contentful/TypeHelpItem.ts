import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHelpItemFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    heroImage: EntryFieldTypes.AssetLink;
    description?: EntryFieldTypes.RichText;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"RWS-AppStore" | "edytor" | "edytor-chmurowy" | "edytor-klasyczny" | "pamięci-tłumaczeń" | "pomoc-techniczna" | "samouczek" | "statystyki-i-raporty" | "szkolenie" | "sztuczna-inteligencja" | "terminologia" | "trados-accelerate" | "trados-bussines-manager" | "trados-enterprise" | "trados-groupshare" | "trados-language-cloud" | "trados-podstawy" | "trados-studio-freelance" | "trados-studio-professional" | "trados-team" | "tłumaczenie-maszynowe" | "zadania-seryjne">>;
    slug: EntryFieldTypes.Symbol;
    seo?: EntryFieldTypes.Text;
}

export type TypeHelpItemSkeleton = EntrySkeletonType<TypeHelpItemFields, "helpItem">;
export type TypeHelpItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHelpItemSkeleton, Modifiers, Locales>;
