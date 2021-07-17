// https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line

// Test if "loading" state exectures correctly using the below code
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const searchTree = (tree, name, children) => {
  if (tree.name === name) {
    return tree;
  } else if (tree.children != null) {
    var i;
    var result = null;
    for (i = 0; result == null && i < tree.children.length; i++) {
      result = searchTree(tree.children[i], name);
    }
    return result;
  }
  return null;
};

export const replaceStrToJSX = (originalStr, replaceKeyword, replaceJSX) => {
  const splitArr = originalStr.split(replaceKeyword);
  splitArr.splice(1, 0, "space");
  const result = splitArr.map((item, index) => {
    if (index === 1) {
      return replaceJSX;
    } else {
      return item;
    }
  });
  return result;
};
