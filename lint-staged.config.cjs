module.exports = {
  "*.+(js|ts)": ["yarn lint", () => "yarn typecheck"],
  "*.+(js|json|yml|yaml|ts|md)": ["yarn format"],
};
