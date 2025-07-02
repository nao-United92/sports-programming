const todos = [
  { title: '晩御飯', priority: 2, completed: false },
  { title: '食材のゴミ出し', priority: 1, completed: true },
  { title: '買い出し', priority: 3, completed: false },
  { title: '洗濯', priority: 2, completed: true },
  { title: '録画の視聴', priority: 1, completed: false },
];

// 2
const notCompleted = todos.filter(({ completed }) => !completed);

// 3
let onlyPriority = [];
function exportPriority(notCompleted) {
  notCompleted.foreach((values) => {
    onlyPriority.push(values.priority);
  });
}
function descending(a, b) {
  return a - b;
}
console.log(onlyPriority.sort(descending));

// 1・4
function printTodo({ title, completed }, notCompleted) {
  if (completed) {
    console.log(`${title}は完了！`);
  } else {
    console.log(`${title}をやらないと！`);
  }
}
printTodo(todos);
