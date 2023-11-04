export type SearchItem<T> = T & {
  [key: string]: string | SearchItem<T> | Array<SearchItem<T>>;
};
