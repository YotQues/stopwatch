interface StyleObject {
  [key: string]: string;
}

export const toClassString = (styles: StyleObject) => {
  let array: string[] = [];
  for (let key in styles) {
    array.push(styles[key]);
  }
  return array.join(' ');
};
