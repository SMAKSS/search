import { SearchItem } from './types';

/**
 * Determines whether a given key is included in the search based on the include parameter and the keys provided.
 *
 * @param {string} key - The key to check.
 * @param {string[]} keys - The list of keys to consider in the search.
 * @param {boolean} include - Flag determining if the keys should be included or excluded from the search.
 * @returns {boolean} - True if the key is included in the search, false otherwise.
 *
 * @example
 * // Check if 'name' is included in a search considering only 'name' and 'age':
 * console.log(isKeyIncluded('name', ['name', 'age'], true)); // Output: true
 * console.log(isKeyIncluded('address', ['name', 'age'], true)); // Output: false
 */
export function isKeyIncluded(
  key: string,
  keys: string[],
  include: boolean
): boolean {
  return include ? keys.includes(key) : !keys.includes(key);
}

/**
 * Adds a search item to the results if it's not already included.
 *
 * @param {SearchItem[]} results - The current list of search results.
 * @param {SearchItem} item - The item to potentially add to the results.
 *
 * @example
 * // Example usage of addUniqueMatch
 * const results: SearchItem[] = [];
 * const itemToAdd: SearchItem = { name: 'John', age: 30 };
 * addUniqueMatch(results, itemToAdd);
 * console.log(results); // Output: [{ name: 'John', age: 30 }]
 */
export function addUniqueMatch(results: SearchItem[], item: SearchItem): void {
  if (!results.includes(item)) {
    results.push(item);
  }
}
