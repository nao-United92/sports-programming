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
notCompleted.sort((todoA, todoB) => {
  return todoB.priority - todoA.priority;
});

// 1・4
function printTodo(todos) {
  todos.foreach(({ title, completed }) => {
    if (completed) {
      console.log(`${title}は完了！`);
    } else {
      console.log(`${title}をやらないと！`);
    }
  });
}
printTodo(notCompleted);

// Set
let fruits = ['apple', 'orange', 'melon'];

const fruitsSet = new Set(fruits);
fruits = Array.from(fruitsSet);

console.log(fruits);
