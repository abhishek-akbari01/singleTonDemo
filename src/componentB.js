// import { setValueOfSimilarElements } from "./utilities";
import globalStyle from "./globalStyles";
import { setValueOfSimilarElements } from "./utilities";

/**
 * Event handler whenever a change event occurs
 */
export const componentB = () => {
  // Get respective dom elements
  const selectedColor = document.querySelectorAll("#selected-color");
  const colorPickerA = document.getElementById("color-picker-a");
  const colorPickerB = document.getElementById("color-picker-b");

  colorPickerB.onchange = (event) => {
    // set the color property of the global state with current color picker's value;
    globalStyle.setPropertyValue("color", event.target.value);

    const color = globalStyle.getPropertyByName("color");

    // A function thats sets the value of all the #selection-color dom elements
    setValueOfSimilarElements(selectedColor, color);

    // make sure to set the component A's color picker value is set to color picker B;
    // this is done to make sure that both of the color picker have same value on change;
    colorPickerA.value = color;
  };
};
