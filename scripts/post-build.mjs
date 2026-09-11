// 빌드 후처리. Pages는 SPA rewrite가 없어 404.html 을 index.html 사본으로 둔다.
// .nojekyll 은 Pages 가 _ 로 시작하는 경로를 무시하지 않게 하는 안전장치다.
import { copyFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '..', 'dist');

copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
writeFileSync(resolve(dist, '.nojekyll'), '');
console.log('post-build: wrote dist/404.html and dist/.nojekyll');
