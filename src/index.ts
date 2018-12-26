import * as fs from 'fs';
import * as path from 'path';
import { isMainThread } from 'worker_threads';

const baseDir = path.dirname(__dirname);

const main: () => void = (): void => {
  const chapterName = process.argv[2] || '';
  if (chapterName === '') {
    throw { message: 'Usage: node ./dist/index.js chapterName' };
  }
  const filePath: string = path.resolve(baseDir, 'text', `${chapterName}.txt`);
  const outFilePath: string = path.resolve(
    baseDir,
    'out',
    `${chapterName}.tex`,
  );
  try {
    const file: string = fs.readFileSync(filePath).toString();
    const lines: string[] = file.split('\n');
    let out: string = `\\${chapterName}{\n　`;
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      if (line !== '') {
        out += line.replace('、', ',').replace('。', '.');
      } else {
        out += '\\\\\n';
        if (i !== lines.length - 1) {
          out += '　';
        }
      }
    }
    out += '}';
    fs.writeFileSync(outFilePath, out);
  } catch (err) {
    console.log(err);
  }
};

try {
  main();
} catch (err) {
  console.log(err.message);
}
