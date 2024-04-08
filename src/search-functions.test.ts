import { searchWithinObject, recursiveSearch } from './search-functions'; // Adjust import path

type Person = { name: string; lastName: string; };

describe('searchWithinObject', () => {
  it('should add object to results if a match is found', () => {
    const person: Person = { name: 'John', lastName: 'Doe' };
    const results: Person[] = [];
    searchWithinObject(person, ['name'], true, /John/i, results);
    expect(results).toContain(person);
  });

  it('should not add object to results if no match is found', () => {
    const person: Person = { name: 'John', lastName: 'Doe' };
    const results: Person[] = [];
    searchWithinObject(person, ['name'], true, /Jane/i, results);
    expect(results).toEqual([]);
  });
});

describe('recursiveSearch', () => {
  it('should add all matching items from an array', () => {
    const people: Person[] = [
      { name: 'John', lastName: 'Doe' },
      { name: 'Jane', lastName: 'Doe' }
    ];
    const results: Person[] = [];
    recursiveSearch(people, ['lastName'], true, /Doe/i, results);
    expect(results).toEqual(expect.arrayContaining(people));
  });

  it('should work recursively through nested arrays/objects', () => {
    const nestedPeople: (
      | Person
      | (Person & { contacts: Person[] })
    )[] = [
      {
        name: 'John',
        lastName: 'Doe',
        contacts: [{ name: 'Jake', lastName: 'Doe' }]
      },
      { name: 'Jane', lastName: 'Doe' }
    ];
    const results: Person[] = [];
    recursiveSearch(nestedPeople, ['lastName'], true, /Doe/i, results);
    expect(results.length).toBe(2);
  });
});
