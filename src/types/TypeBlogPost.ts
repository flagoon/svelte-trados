import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeCarouselSkeleton } from "./TypeCarousel";

export interface TypeBlogPostFields {
  name: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  carousel?: EntryFieldTypes.EntryLink<TypeCarouselSkeleton>;
  heroImage?: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.RichText;
  autor?: EntryFieldTypes.Symbol;
  tags?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | "RWS-AppStore"
      | "edytor"
      | "edytor-chmurowy"
      | "edytor-klasyczny"
      | "pamięci-tłumaczeń"
      | "pomoc-techniczna"
      | "samouczek"
      | "statystyki-i-raporty"
      | "szkolenie"
      | "sztuczna-inteligencja"
      | "terminologia"
      | "trados-accelerate"
      | "trados-bussines-manager"
      | "trados-enterprise"
      | "trados-groupshare"
      | "trados-language-cloud"
      | "trados-podstawy"
      | "trados-studio-freelance"
      | "trados-studio-professional"
      | "trados-team"
      | "tłumaczenie-maszynowe"
      | "zadania-seryjne"
    >
  >;
  slug: EntryFieldTypes.Symbol;
  seo?: EntryFieldTypes.Symbol;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
