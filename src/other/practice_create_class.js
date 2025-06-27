class User {
  constructor(username) {
    this.username = username;
    this.deleted = 0;
  }

  login() {
    if (this.deleted === 0) {
      console.log(`${this.username}はログインに成功しました。`);
    } else {
      console.log(`${this.username}はログインに失敗しました。`);
    }
  }
}

class AdminUser extends User {
  constructor(user) {
    super(user);
  }

  deleteUser(username) {
    this.deleted = 1;
    console.log(`${this.username}は削除しました。`);
  }
}

const user = new User('naoya');
const adminUser = new AdminUser('admin', 0);
adminUser.deleteUser(user.username);
if (user.username in user) {
  throw new Error('Userオブジェクトを引数にする必要があります。');
}
