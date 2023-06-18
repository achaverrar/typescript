namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}
  }

  const myUser = new User("Kevin");
  console.log(myUser);
}
const myUser2 = new DatabaseEntity.User("Peter");
console.log(myUser2.name);
