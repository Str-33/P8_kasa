require("@testing-library/jest-dom");

// Fix pour react-router-dom v7 qui utilise TextEncoder
// jsdom ne l'inclut pas par défaut, on le récupère depuis Node.js
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;