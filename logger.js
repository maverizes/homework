import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);

const logPath = path.join(currentDir, 'logs.txt');

export function writeLog(text) {
  const time = new Date().toISOString();
  const line = `${time} - ${text}\n`;

  fs.appendFile(logPath, line, 'utf8', (error) => {
    if (error) {
      console.error('Log write failed:', error.message);
    }
  });
}

export function getAllLogs() {
  try {
    return fs.readFileSync(logPath, 'utf8');
  } catch (error) {
    console.error('Cannot read log file:', error.message);
    return '';
  }
}
