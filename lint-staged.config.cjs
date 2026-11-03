module.exports = {
  '*.+(js|ts)': ['pnpm run lint', () => 'pnpm run typecheck'],
  '*.+(js|json|yml|yaml|ts|md)': ['pnpm run format']
};
