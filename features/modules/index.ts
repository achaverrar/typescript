import * as Utils from "./utils.module";
import { PI, generateId as getId } from "./utils.module";

const myNumber = 10 * PI;

const person: Utils.User = {
  id: getId(),
  name: "Sarah",
};
