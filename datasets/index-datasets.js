// Automatically generate a list of datasets that you can load in the playground
const fs = require("fs");

const entries = fs.readdirSync("datasets", { withFileTypes: true });
const datasetNames = [];

for (const entry of entries) {
  if (!entry.isFile() || !entry.name.endsWith(".json")) {
    continue;
  }

  const name = entry.name.slice(0, -".json".length);

  // Start with a letter. Then use letters, digits, hyphens, or underscores.
  if (/^[a-z][a-z0-9_-]*$/i.test(name)) {
    datasetNames.push(name);
  }
}

datasetNames.sort();
fs.writeFileSync(
  "dist/dataset-index.json",
  JSON.stringify(datasetNames, null, 2) + "\n"
);