const targetString = '5341nb;g090-1234-5678f29q0g070-9876-5432nfw';
const mobileNumPattern = /(070|080|090)-\d{4}-\d{4}/g;
const mobileNum = targetString.matchAll(mobileNumPattern);

for (const mobileNum of mobileNums) {
  console.log(mobileNum[0]);
}
