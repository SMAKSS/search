# Search

![npm](https://img.shields.io/npm/v/@smakss/search) ![NPM](https://img.shields.io/npm/l/@smakss/search) ![npm](https://img.shields.io/npm/dt/@smakss/search) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@smakss/search)

Searching through arrays, nested arrays, or objects for specific keywords can often be cumbersome, especially when dealing with deeply nested structures. This package simplifies that process by offering a lightweight, flexible search utility that delves into every key of an object or array elements to find matches. It utilizes ES6+ syntax, so if your codebase uses older standards, a transpiler might be required.

## Demo

Explore the live demonstration available on CodeSandbox:

[![View @smakss/search](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/smakss-search-zlqtu3?fontsize=14&hidenavigation=1&theme=dark)

## How it works?

To install the package:

```bash
npm i @smakss/search
# or
yarn add @smakss/search
```

For CommonJS modules:

```js
const Search = require('@smakss/search');
```

For ECMAScript modules:

```js
import Search from '@smakss/search';
```

Then, to utilize the search function within your application:

The `Search` function accepts an options object with the following properties:

- `searchText` (`String`): The string to search for.
- `searchItems` (`Array|Object`): The items or structure to search within.
- `keys` (`Array`): An array of keys to include or exclude from the search.
- `include` (`Boolean`): Determines whether to include (`true`) or exclude (`false`) the keys specified. Defaults to `true`.
- `exact` (`Boolean`): Determines whether to perform an exact match search. Defaults to `false`.

The search function can take a generic type to specify the type of the search items.

## Examples of Usage

Lets suppose we have the following type:

```ts
type Person = { name: string; lastName: string };
```

### Searching Within an Object

When the match is found in an object, the entire object is returned:

```ts
const obj: Person = { name: 'John', lastName: 'Doe' };

const results = Search<Person>({ searchText: 'john', searchItems: [obj] });
// Results: [{ name: 'John', lastName: 'Doe' }]
```

### Searching Within an Array

```ts
const arr: Person[] = [
  { name: 'John', lastName: 'Doe' },
  { name: 'Joe', lastName: 'Doe' }
];

const results = Search<Person>({ searchText: 'john', searchItems: arr });
// Results: [{ name: 'John', lastName: 'Doe' }]
```

### Searching Within a Nested Array

```ts
const nestedArr: (Person | Person[])[] = [
  { name: 'John', lastName: 'Doe' },
  { name: 'Joe', lastName: 'Doe' },
  [{ name: 'Jane', lastName: 'Doe' }]
];

const results = Search<Person | Person[]>({
  searchText: 'jane',
  searchItems: nestedArr
});
// Results: [{ name: 'Jane', lastName: 'Doe' }]
```

### Including Specific Keys

```ts
const results = Search<Person>({
  searchText: 'jane',
  searchItems: nestedArr,
  keys: ['name']
});
// Results: [{ name: 'Jane', lastName: 'Doe' }]
```

### Excluding Specific Keys

```ts
const results = Search<Person>({
  searchText: 'jane',
  searchItems: nestedArr,
  keys: ['lastName'],
  include: false
});
// Results: []
```

_Note: The result is an empty array because 'lastName' is excluded from the search._

### Performing an Exact Match Search

```ts
const results = Search<Person>({
  searchText: 'jane',
  searchItems: nestedArr,
  exact: true
});
// Results: [{ name: 'Jane', lastName: 'Doe' }]
```

_Note: Only the exact term 'Jane' is matched, not 'Janet' or other partial matches._

## Contributing

Interested in contributing to this project? Please refer to [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## Code of Conduct

Our community prioritizes the well-being and inclusivity of all contributors and users. Please review our [Code of Conduct](./CODE_OF_CONDUCT.md) to help maintain a supportive environment for everyone.
