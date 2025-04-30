import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeAllProjectsFields {
	title?: EntryFieldTypes.Symbol
	glavniProjekti: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
	idejniProjekti: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
	nadzorniProjekti: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
}

export type TypeAllProjectsSkeleton = EntrySkeletonType<TypeAllProjectsFields, 'allProjects'>
export type TypeAllProjects<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
	TypeAllProjectsSkeleton,
	Modifiers,
	Locales
>
