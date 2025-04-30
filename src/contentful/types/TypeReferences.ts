import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeReferencesFields {
	id: EntryFieldTypes.Integer
	projectType: EntryFieldTypes.Symbol<'projektiranje' | 'strucni-nadzor'>
	images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
	projectName: EntryFieldTypes.Symbol
	projectLocation: EntryFieldTypes.Symbol
	projectLongName: EntryFieldTypes.Symbol
	projectStages: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
	partners?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
	leadEngineer: EntryFieldTypes.Symbol
	longDescription?: EntryFieldTypes.RichText
	investors?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>
	date?: EntryFieldTypes.Symbol
}

export type TypeReferencesSkeleton = EntrySkeletonType<TypeReferencesFields, 'references'>
export type TypeReferences<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
	TypeReferencesSkeleton,
	Modifiers,
	Locales
>
