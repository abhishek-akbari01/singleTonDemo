import { componentA } from "./componentA";
import { componentB } from "./componentB";
import logo from "./logo.svg";
import "./styles.css";

function App() {
  return (
    <>
      <div className="global-state">
        <h3>Global State</h3>
        <h4>Color</h4>
        <span id="selected-color" />
      </div>
      <div className="contents">
        <div className="component-a">
          <strong>Component A</strong>
          <div>Pick color</div>
          <span id="selected-color">black</span>
          <input
            type="color"
            id="color-picker-a"
            onChange={(e) => componentA(e)}
          />
        </div>
        <div className="component-b">
          <strong>Component B</strong>
          <div>Pick color</div>
          <span id="selected-color">black</span>
          <input
            type="color"
            id="color-picker-b"
            onChange={(e) => componentB(e)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
