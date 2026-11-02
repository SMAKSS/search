import search from '@smakss/search';
import './styles.css';

type Person = {
  [key: string]: string;
  name: string;
  role: string;
  team: string;
  city: string;
};

const people: Person[] = [
  {
    name: 'Ari Kim',
    role: 'Product designer',
    team: 'Platform',
    city: 'London'
  },
  {
    name: 'Jordan Lee',
    role: 'Frontend engineer',
    team: 'Commerce',
    city: 'Dublin'
  },
  { name: 'Sam Rivera', role: 'Researcher', team: 'Platform', city: 'Lisbon' },
  { name: 'Morgan Chen', role: 'Data analyst', team: 'Growth', city: 'London' },
  {
    name: 'Taylor Okafor',
    role: 'Engineering manager',
    team: 'Commerce',
    city: 'Berlin'
  },
  {
    name: 'Casey Singh',
    role: 'Content designer',
    team: 'Growth',
    city: 'Dublin'
  }
];

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) throw new Error('App root was not found.');

root.innerHTML = [
  '<div class="page">',
  '<header class="topbar"><span class="brand">@smakss/search</span><span class="tag">Local playground</span></header>',
  '<section class="intro"><p class="eyebrow">Search structured data</p><h1>Explore flexible search</h1><p class="subtitle">Search a sample directory by name, role, team, or city. Try punctuation such as (.*) to see that search text is treated literally.</p></section>',
  '<main class="panel"><div class="panel-heading"><div><h2>People directory</h2><p>Search text is matched case-insensitively by default.</p></div></div>',
  '<div class="inline-fields">',
  '<div class="field"><label for="query">Search text</label><input id="query" type="text" placeholder="Try design or (.*)"></div>',
  '<div class="field"><label for="field">Search in</label><select id="field"><option value="all">All fields</option><option value="name">Name</option><option value="role">Role</option><option value="team">Team</option><option value="city">City</option></select></div>',
  '</div><label class="check-row"><input id="exact" type="checkbox"> Exact match only</label>',
  '<p class="status" id="count" aria-live="polite"></p><div class="result-grid" id="results"></div>',
  '</main><footer>Sample records only; nothing is sent to a server.</footer></div>'
].join('');

const query = root.querySelector<HTMLInputElement>('#query')!;
const field = root.querySelector<HTMLSelectElement>('#field')!;
const exact = root.querySelector<HTMLInputElement>('#exact')!;
const count = root.querySelector<HTMLParagraphElement>('#count')!;
const results = root.querySelector<HTMLDivElement>('#results')!;

function render(): void {
  const searchField = field.value;
  const found = search<Person>({
    searchText: query.value,
    searchItems: people,
    keys: searchField === 'all' ? [] : [searchField],
    exact: exact.checked
  });

  count.textContent = found.length + ' of ' + people.length + ' people match';
  results.replaceChildren(
    ...found.map((person) => {
      const card = document.createElement('article');
      const name = document.createElement('strong');
      const detail = document.createElement('span');

      card.className = 'result-card';
      name.textContent = person.name;
      detail.textContent =
        person.role + ' · ' + person.team + ' · ' + person.city;
      card.append(name, detail);
      return card;
    })
  );
}

query.addEventListener('input', render);
field.addEventListener('change', render);
exact.addEventListener('change', render);
render();
