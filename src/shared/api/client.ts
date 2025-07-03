import { createInstance } from "../lib";

export const http = createInstance("https://dummyjson.com", {
  credentials: "same-origin"
});
