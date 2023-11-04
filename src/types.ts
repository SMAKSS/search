/**
 * Represents a searchable item as a key-value record.
 * Any value type is allowed since the search functionality will cast to string for comparison.
 *
 * @example
 * // A sample SearchItem could look like this:
 * const item: SearchItem = { name: "John", age: 30, address: "123 Main St" };
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SearchItem = Record<string, any>;

/**
 * Describes the options for the search function including the text to search for, the items to search within,
 * the keys in the items to consider, whether to include or exclude the specified keys, and whether the search should match exactly.
 *
 * @example
 * // An example of SearchOptions usage:
 * const options: SearchOptions = {
 *   searchText: 'John',
 *   searchItems: [{ name: 'John Doe', age: 28 }, { name: 'Jane Doe', age: 32 }],
 *   keys: ['name'],
 *   include: true,
 *   exact: false
 * };
 */
export interface SearchOptions {
  searchText: string;
  searchItems: SearchItem | SearchItem[];
  keys: string[];
  include: boolean;
  exact: boolean;
}
