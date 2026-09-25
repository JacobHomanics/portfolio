const path = require("path");

const checkTypes = () => "pnpm --filter @se-2/expo check-types";

module.exports = {
  "packages/expo/**/*.{ts,tsx}": [checkTypes],
};
