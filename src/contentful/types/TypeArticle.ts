import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeArticleFields {
  tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  thumbnail: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  date: EntryFieldTypes.Date;
  slug: EntryFieldTypes.Symbol;
  headerContent: EntryFieldTypes.AssetLink;
  content: EntryFieldTypes.RichText;
}

export type TypeArticleSkeleton = EntrySkeletonType<
  TypeArticleFields,
  "article"
>;
export type TypeArticle<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeArticleSkeleton, Modifiers, Locales>;
