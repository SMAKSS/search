import { SearchOptions } from './types';
import search from './search';

type Person = { name: string; lastName: string; age: number };

describe('search', () => {
  const people: Person[] = [
    { name: 'John', lastName: 'Doe', age: 30 },
    { name: 'Jane', lastName: 'Smith', age: 25 },
    { name: 'Jake', lastName: 'Doe', age: 22 }
  ];

  it('should find items by lastName', () => {
    const options: Partial<SearchOptions<Person>> = {
      searchText: 'doe',
      searchItems: people,
      keys: ['lastName'],
      exact: false
    };
    const results: Person[] = search(options);
    expect(results.length).toBe(2);
    expect(results).toEqual(
      expect.arrayContaining([expect.objectContaining({ lastName: 'Doe' })])
    );
  });

  it('should handle exact matches', () => {
    const options: Partial<SearchOptions<Person>> = {
      searchText: 'Doe',
      searchItems: people,
      keys: ['lastName'],
      exact: true
    };
    const results: Person[] = search(options);
    expect(results.length).toBe(2);
    expect(results).toEqual(
      expect.arrayContaining([expect.objectContaining({ lastName: 'Doe' })])
    );
  });

  it('should be case insensitive', () => {
    const options: Partial<SearchOptions<Person>> = {
      searchText: 'smith',
      searchItems: people,
      keys: ['lastName'],
      exact: false
    };
    const results: Person[] = search(options);
    expect(results.length).toBe(1);
    expect(results[0].lastName).toBe('Smith');
  });

  it('should return an empty array when no matches are found', () => {
    const options: Partial<SearchOptions<Person>> = {
      searchText: 'nonexistent',
      searchItems: people,
      keys: ['lastName'],
      exact: false
    };
    const results: Person[] = search(options);
    expect(results.length).toBe(0);
  });

  it('should search all keys if none are specified', () => {
    const options = {
      searchText: '25',
      searchItems: people,
      exact: false
    };
    const results: Person[] = search(options);
    expect(results.length).toBe(1);
    expect(results[0].age).toBe(25);
  });

  it('should include keys in the results if include is true', () => {
    const options: Partial<SearchOptions<Person>> = {
      searchText: 'John',
      searchItems: people,
      keys: ['name'],
      include: true,
      exact: false
    };
    const results: Person[] = search(options);
    expect(results.length).toBe(1);
    expect(results[0]).toHaveProperty('name', 'John');
  });

  it('should not include keys in the results if include is false', () => {
    const options: Partial<SearchOptions<Person>> = {
      searchText: 'Jane',
      searchItems: people,
      keys: ['name'],
      include: false,
      exact: false
    };
    const results: Person[] = search(options);
    expect(results.length).toBe(0);
  });
});
