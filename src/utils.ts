import { SearchItem } from './types';

/**
 * Checks if a given value matches a regular expression.
 *
 * @param {unknown} value - The value to test against the regular expression.
 * @param {RegExp} regex - The regular expression to match.
 * @returns {boolean} True if the value is a string and matches the regex, false otherwise.
 *
 * @example
 * // returns true
 * matchesRegex('hello', /hello/);
 *
 * @example
 * // returns false
 * matchesRegex(123, /hello/);
 */
export function matchesRegex(value: unknown, regex: RegExp): boolean {
  return typeof value === 'string' && regex.test(value);
}

/**
 * Determines whether a key should be included in the search based on the include parameter.
 *
 * @param {string[]} keys - An array of keys to include or exclude.
 * @param {string} key - The current key to check.
 * @param {boolean} include - Whether to include or exclude the keys array.
 * @returns {boolean} True if the key should be included, false otherwise.
 *
 * @example
 * // returns true
 * shouldIncludeKey(['name', 'age'], 'name', true);
 *
 * @example
 * // returns false
 * shouldIncludeKey(['name', 'age'], 'location', true);
 */
export function shouldIncludeKey(
  key: string,
  keys: string[],
  include: boolean
): boolean {
  return include ? keys.includes(key) : !keys.includes(key);
}

/**
 * Adds an item to the filtered list if it is not already present.
 *
 * @param {SearchItem<T>[]} filtered - The array to which the item will be added if it is unique.
 * @param {SearchItem<T>} item - The item to add if it is not already present in the array.
 *
 * @example
 * // filtered contains [{name: 'John'}, {name: 'Jane'}]
 * const filtered = [{name: 'John'}];
 * addIfUnique(filtered, {name: 'Jane'});
 *
 * @example
 * // filtered remains unchanged [{name: 'John'}]
 * const filtered = [{name: 'John'}];
 * addIfUnique(filtered, {name: 'John'});
 */
export function addIfUnique(filtered: SearchItem[], item: SearchItem): void {
  if (!filtered.some((el) => Object.is(el, item))) {
    filtered.push(item);
  }
}
