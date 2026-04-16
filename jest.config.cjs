module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/fileMock.js", // redirige les imports CSS vers un fichier mock
  },
};