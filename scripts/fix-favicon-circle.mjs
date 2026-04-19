import Jimp from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function makeCircular(inputPath, outputPath, size) {
  const img = await Jimp.read(inputPath);
  img.resize(size, size);

  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2;

  img.scan(0, 0, size, size, function (x, y, idx) {
    const dx = x - cx;
    const dy = y - cy;
    if (dx * dx + dy * dy > r * r) {
      this.bitmap.data[idx + 3] = 0; // set alpha to 0 (transparent)
    }
  });

  await img.writeAsync(outputPath);
  console.log(`Written: ${outputPath}`);
}

await makeCircular(
  path.join(publicDir, 'favicon-192.png'),
  path.join(publicDir, 'favicon-192.png'),
  192
);

await makeCircular(
  path.join(publicDir, 'favicon-512.png'),
  path.join(publicDir, 'favicon-512.png'),
  512
);

console.log('Done!');
