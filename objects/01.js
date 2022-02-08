let user = {};
user = {
  name: "John",
  surname: "Smith",
};
user["name"] = "Pete";
delete user["name"];
console.log(user.name);
console.log(typeof user);
