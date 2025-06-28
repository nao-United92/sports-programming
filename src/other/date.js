let date = new Date();
let dateMs = new Date(ミリ秒);
let dateYmd = new Date("YYYY[-MM-DDTHH:mm:ss.sssTZD]");
let dateJst = new Date(年, 月[,日, 時, 分, 秒, ミリ秒])
let now = new Date();
console.log(date);
console.log(dateMs);
console.log(dateYmd);
console.log(dateJst);
console.log(now);

let dateMs2 = new Date(24 * 60 * 60 * 1000);
console.log(dateMs2);

let dateYmd2 = new Date("2023-10-01T00:00:00.000+09:00");
console.log(dateYmd2);

let dateJst2 = new Date(2023, 9, 1, 0, 0, 0, 0);
console.log(dateJst2);

let dateJst3 = new Date(2023, 9, 1);
console.log(dateJst3);
