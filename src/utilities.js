export const setValueOfSimilarElements = (elemArr, value) => {
  elemArr.forEach((elem) => {
    elem.innerText = value;
  });
};
