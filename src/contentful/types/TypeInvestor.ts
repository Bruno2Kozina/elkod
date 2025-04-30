import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeInvestorFields {
	name: EntryFieldTypes.Symbol
	img?: EntryFieldTypes.AssetLink
}

export type TypeInvestorSkeleton = EntrySkeletonType<TypeInvestorFields, 'investor'>
export type TypeInvestor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInvestorSkeleton, Modifiers, Locales>
