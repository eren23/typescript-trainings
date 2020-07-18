import { User } from "./models/User";

const newuser = new User({ id: 10, name: "eren", age: 24 });

const on = newuser.on;

on("change", () => {
  console.log("deneme");
});

newuser.trigger("change");
