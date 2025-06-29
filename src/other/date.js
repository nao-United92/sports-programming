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

let dateJst5 = new Date(2023, 9, 1, 0, 0, 0);
console.log(dateJst5);

let dateJst6 = new Date(2023, 9, 1, 0, 0);
console.log(dateJst6);

let dateProblem1 = new Date(2022, 5, 12 , 3, 12, 13, 333);
dateProblem1.setDate(15);
console.log(dateProblem1.getDay());
let convertMonth = getMonth(dateProblem1) + 3;

const days = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];

function printDayName(dayIndex) {
  if (dayIndex >= 0 && dayIndex <= 6) {
    console.log(days[dayIndex]);
  } else {
    console.log("不明な曜日");
  }
}

const dayIndex = getDay(convertDate);
printDayName(dayIndex);

const monthIndex = getDay(convertMonth);
printDayName(monthIndex);

const date3 = new Date();

const firstDay = new Date(date.getFullYear(), date.getMonth(),1);
console.log(firstDay.toDateString());

const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0);
console.log(lastDay.toDateString());
