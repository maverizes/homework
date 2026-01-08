import { writeLog, getAllLogs } from './logger.js';

writeLog('App started');

setTimeout(() => {
  writeLog('First timeout event');
}, 2000);

let tickCount = 0;

const timer = setInterval(() => {
  tickCount++;
  writeLog('Interval tick');

  if (tickCount >= 3) {
    clearInterval(timer);
  }
}, 1000);

setTimeout(() => {
  const allLogs = getAllLogs();

  if (allLogs) {
    console.log('\n--- Application Logs ---');
    console.log(allLogs.trim());
    console.log('------------------------');
  }
}, 6000);
