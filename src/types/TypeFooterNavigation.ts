import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode
} from 'contentful';
import type { TypeBlogPostSkeleton } from './TypeBlogPost';
import type { TypeLandingSkeleton } from './TypeLanding';
import type { TypePageSkeleton } from './TypePage';
import type { TypeProductSkeleton } from './TypeProduct';
import type { TypeStaticContentSkeleton } from './TypeStaticContent';

export interface TypeFooterNavigationFields {
	name: EntryFieldTypes.Symbol;
	navigationItems: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<
			| TypeBlogPostSkeleton
			| TypeLandingSkeleton
			| TypePageSkeleton
			| TypeProductSkeleton
			| TypeStaticContentSkeleton
		>
	>;
}

export type TypeFooterNavigationSkeleton = EntrySkeletonType<
	TypeFooterNavigationFields,
	'footerNavigation'
>;
export type TypeFooterNavigation<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode
> = Entry<TypeFooterNavigationSkeleton, Modifiers, Locales>;
