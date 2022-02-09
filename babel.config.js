const { NODE_ENV } = process.env;

/**
 * @fileoverview Using JS for the  Babel config so we can change up deps depending on env
 */

// ES6 because this is for Node (e.g. no tranpsiler)
module.exports = (api) => {
  // JS API boilerplate... If we omit this then we'll get a console error
  api.cache(true);

  const plugins = [
    "@babel/plugin-proposal-optional-chaining",
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ];

  /**
   * This transform is only needed for an obscure testing dependency
   * @see https://github.com/dallasnews/components/commit/78a230f60ae45d48b261f7e9d8bb6539726f76a7#r59393529
   */
  if (NODE_ENV === "test") {
    plugins.push(["@babel/plugin-transform-runtime"]);
  }

  return {
    presets: ["@babel/preset-env", "@babel/react"],
    plugins
  };
};
