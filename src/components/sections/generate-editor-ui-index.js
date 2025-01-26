// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const uiFolder = path.join(__dirname, '');
const indexFile = path.join(__dirname, 'index.ts');

// Read all files in the ui folder
fs.readdir(uiFolder, (err, files) => {
  if (err) {
    console.error('Error reading ui folder:', err);
    return;
  }

  // Filter out non-TypeScript files
  const tsFiles = files.filter(file => file.endsWith('.ts') || file.endsWith('.tsx'));

  // Generate export statements
  const exportStatements = tsFiles.map(file => {
    const fileNameWithoutExtension = path.basename(file, path.extname(file));
    return `export * from './ui/${fileNameWithoutExtension}';`;
  }).join('\n');

  // Write to index.ts
  fs.writeFile(indexFile, exportStatements, err => {
    if (err) {
      console.error('Error writing to index.ts:', err);
    } else {
      console.log('index.ts has been updated with export statements.');
    }
  });
});