import { f as filteredPosts } from "../../../../chunks/index2.js";
async function load() {
  return {
    posts: filteredPosts
  };
}
export {
  load
};
