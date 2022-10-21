// import { setAllSelectedColor } from "./utilities";
import globalStyle from "./globalStyles";
import { setValueOfSimilarElements } from "./utilities";

export const componentA = () => {
  // Get respective dom elements
  const selectedColor = document.querySelectorAll("#selected-color");
  const colorPickerA = document.getElementById("color-picker-a");
  const colorPickerB = document.getElementById("color-picker-b");
  console.log("Sdf");
  // Event handler whenever a change event occurs
  colorPickerA.onchange = (event) => {
    // set the color property of the global state with current color picker's value;
    globalStyle.setPropertyValue("color", event.target.value);
    const color = globalStyle.getPropertyByName("color");

    // A function thats sets the value of all the #selection-color dom elements;
    setValueOfSimilarElements(selectedColor, color);

    // make sure to set the component B's color picker value is set to color picker A;
    // this is done to make sure that both of the color picker have same value on change;
    colorPickerB.value = color;
  };
};
