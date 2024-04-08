import { SearchItem } from './types';
import { isKeyIncluded, addUniqueMatch } from './utils';

describe('isKeyIncluded', () => {
  const keys = ['name', 'age'];

  it('should return true when key is in the list and include is true', () => {
    expect(isKeyIncluded('name', keys, true)).toBeTruthy();
  });

  it('should return false when key is not in the list and include is true', () => {
    expect(isKeyIncluded('address', keys, true)).toBeFalsy();
  });

  it('should return true when key is not in the list and include is false', () => {
    expect(isKeyIncluded('address', keys, false)).toBeTruthy();
  });

  it('should return false when key is in the list and include is false', () => {
    expect(isKeyIncluded('name', keys, false)).toBeFalsy();
  });
});

describe('addUniqueMatch', () => {
  it('should add item to results if not already included', () => {
    const results: SearchItem[] = [];
    const item = { name: 'John', age: 30 };
    addUniqueMatch(results, item);
    expect(results).toContain(item);
  });

  it('should not add item to results if already included', () => {
    const item = { name: 'Jane', age: 25 };
    const results = [item];
    addUniqueMatch(results, item);
    expect(results).toEqual([item]);
  });
});
