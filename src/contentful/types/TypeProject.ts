import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProjectFields {
  thumbnail: EntryFieldTypes.AssetLink;
  projectName: EntryFieldTypes.Symbol;
  projectDescription: EntryFieldTypes.Text;
  date: EntryFieldTypes.Date;
  techStack: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  techStackFull: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  slug: EntryFieldTypes.Symbol;
  headerContent: EntryFieldTypes.AssetLink;
  projectOverview: EntryFieldTypes.RichText;
  myTask: EntryFieldTypes.RichText;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers,Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
