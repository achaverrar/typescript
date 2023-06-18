namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}
  }

  export const myUser = new User("Kevin");
  console.log(myUser);
}

const myUser2 = new DatabaseEntity.User("Peter");
console.log(myUser2.name);
console.log(DatabaseEntity.myUser);
