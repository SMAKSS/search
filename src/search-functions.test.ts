import { searchWithinObject, recursiveSearch } from './search-functions'; // Adjust import path
import { SearchItem } from './types';

describe('searchWithinObject', () => {
  it('should add object to results if a match is found', () => {
    const person: SearchItem = { name: 'John', lastName: 'Doe' };
    const results: SearchItem[] = [];
    searchWithinObject(person, ['name'], true, /John/i, results);
    expect(results).toContain(person);
  });

  it('should not add object to results if no match is found', () => {
    const person: SearchItem = { name: 'John', lastName: 'Doe' };
    const results: SearchItem[] = [];
    searchWithinObject(person, ['name'], true, /Jane/i, results);
    expect(results).toEqual([]);
  });
});

describe('recursiveSearch', () => {
  it('should add all matching items from an array', () => {
    const people: SearchItem[] = [
      { name: 'John', lastName: 'Doe' },
      { name: 'Jane', lastName: 'Doe' }
    ];
    const results: SearchItem[] = [];
    recursiveSearch(people, ['lastName'], true, /Doe/i, results);
    expect(results).toEqual(expect.arrayContaining(people));
  });

  it('should work recursively through nested arrays/objects', () => {
    const nestedPeople: (
      | SearchItem
      | (SearchItem & { contacts: SearchItem[] })
    )[] = [
      {
        name: 'John',
        lastName: 'Doe',
        contacts: [{ name: 'Jake', lastName: 'Doe' }]
      },
      { name: 'Jane', lastName: 'Doe' }
    ];
    const results: SearchItem[] = [];
    recursiveSearch(nestedPeople, ['lastName'], true, /Doe/i, results);
    expect(results.length).toBe(2);
  });
});
