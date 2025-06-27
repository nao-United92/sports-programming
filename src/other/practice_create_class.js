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
  constructor(user, gender) {
    super(user);
    this.gender = gender;
  }

  deleteUser(user) {
    if (!(user instanceof User)) {
      throw new Error('Userオブジェクトを引数にする必要があります。');
    }
    user.deleted = 1;
    console.log(`${user.username}, ${user.gender}は削除しました。`);
  }
}

const user = new User('naoya');
const adminUser = new AdminUser('admin', 'female');
adminUser.deleteUser(user);
user.login();
