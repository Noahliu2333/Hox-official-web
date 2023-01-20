import react from "react";
import { useEffect } from "react";
import useExternalScripts from "../utility/useExternalScripts";
const Welcome = () => {
  useExternalScripts(".././welcome.js");
  useExternalScripts(".././_welcomeExternal.js");
  return (
    <div>
      <input type="range" min="6" max="6" step="1" id="step" value="1" />
      <section>
        <p>Draw an image and divide it into a grid</p>
        <p>Get the brightness of every cell</p>
        <p>Draw particles moving from left to right</p>
        <p>
          Update each particle's speed based on the brightness of its position
        </p>
        <p>Fade each particle based on its speed</p>

        <div className="typing-slider">
          {" "}
          <p>
            {/* <a href="http://127.0.0.1:8080/pages/home.html">
              ETA OMEGA CHI USC
            </a> */}
          </p>
        </div>
      </section>

      {/* <script src="_welcome.js"></script>
      <script src="_welcomeExternal.js"></script> */}
    </div>
  );
};

export default Welcome;
