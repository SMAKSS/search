import { KeyOf } from './types';
import { isKeyIncluded, addUniqueMatch } from './utils';

type Person = { name: string; age: number };

describe('isKeyIncluded', () => {
  const keys: KeyOf<Person>[] = ['name', 'age'];

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
    const results: Person[] = [];
    const item: Person = { name: 'John', age: 30 };
    addUniqueMatch(results, item);
    expect(results).toContain(item);
  });

  it('should not add item to results if already included', () => {
    const item: Person = { name: 'Jane', age: 25 };
    const results: Person[] = [item];
    addUniqueMatch(results, item);
    expect(results).toEqual([item]);
  });
});
