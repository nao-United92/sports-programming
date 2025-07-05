function action(actionName, duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${actionName}`);
      resolve();
    }, duration);
  });
}

function makeAction() {
  action('散歩', 500)
    .then(() => action('朝食', 200))
    .then(() => Promise.all([action('昼食', 500), action('おしゃべり', 100)]))
    .then(() => action('夕食', 600))
    .then(() => action('趣味', 400));
}

makeAction();
