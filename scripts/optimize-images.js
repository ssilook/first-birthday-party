import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../public/optimized-images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

const imageFiles = getAllFiles(assetsDir);

console.log(`Found ${imageFiles.length} images to optimize...\n`);

let processed = 0;
let completed = 0;

// Process each image
imageFiles.forEach(inputPath => {
  const relativePath = path.relative(assetsDir, inputPath);
  const baseName = path.parse(relativePath).name;
  const dir = path.dirname(relativePath);

  const webpDir = path.join(outputDir, dir);

  // Create subdirectories
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir, { recursive: true });
  }

  console.log(`Processing: ${relativePath}`);
  processed += 2;

  // Convert to WebP
  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(path.join(webpDir, `${baseName}.webp`))
    .then(info => {
      console.log(`✓ Created ${baseName}.webp (${(info.size / 1024).toFixed(2)} KB)`);
      completed++;
      if (completed === processed) console.log('\n✓ Image optimization complete!');
    })
    .catch(err => {
      console.error(`✗ Error processing ${relativePath}:`, err.message);
      completed++;
    });

  // Convert to AVIF
  sharp(inputPath)
    .avif({ quality: 70 })
    .toFile(path.join(webpDir, `${baseName}.avif`))
    .then(info => {
      console.log(`✓ Created ${baseName}.avif (${(info.size / 1024).toFixed(2)} KB)`);
      completed++;
      if (completed === processed) console.log('\n✓ Image optimization complete!');
    })
    .catch(err => {
      console.error(`✗ Error processing ${relativePath}:`, err.message);
      completed++;
    });
});

if (imageFiles.length === 0) {
  console.log('No images found to optimize.');
}
