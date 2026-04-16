module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/Tests/**/*.test.jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/fileMock.js",
    "^react$": "<rootDir>/front/node_modules/react",
    "^react-dom$": "<rootDir>/front/node_modules/react-dom",
    "^react-dom/client$": "<rootDir>/front/node_modules/react-dom/client",
    "^react-router-dom$": "<rootDir>/front/node_modules/react-router-dom/dist/index.js",
    "^react-router$": "<rootDir>/front/node_modules/react-router/dist/development/index.js",
  },
};