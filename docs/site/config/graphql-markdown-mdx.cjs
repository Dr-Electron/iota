// Custom GraphQL-Markdown formatter: makes generated sidebar categories collapsible and collapsed by default.

const DocusaurusMDX = require("@graphql-markdown/docusaurus/mdx");

const beforeGenerateIndexMetafileHook = async (event) => {
  event.data.options = {
    ...event.data.options,
    collapsible: true,
    collapsed: true,
  };
  return DocusaurusMDX.beforeGenerateIndexMetafileHook(event);
};

module.exports = {
  ...DocusaurusMDX,
  beforeGenerateIndexMetafileHook,
};
