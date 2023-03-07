import { useState } from "react";
import getRandomNumberInRange from "./helpers/getRandomNumberInRange";
import { generate, relativeFinish, wayToRelative } from "./constants/texts";
import "./App.css";

function App() {
  const [relative, setRelative] = useState("");

  const generateRelative = () => {
    setRelative("");

    const wayCount = getRandomNumberInRange(3, 8);
    let closeRelative = "";

    for (let i = 0; i < wayCount; i++) {
      const relativeWayIdx = getRandomNumberInRange(0, wayToRelative.length);
      const relativeWay = wayToRelative[relativeWayIdx];

      closeRelative += `${relativeWay} `;
    }

    const relativeIdx = getRandomNumberInRange(0, relativeFinish.length);
    closeRelative += relativeFinish[relativeIdx];

    setRelative(closeRelative);
  };

  return (
    <div className="container">
      <div className="relative">
        <button className="button" onClick={generateRelative}>
          {generate}
        </button>
        <div>
          <p>{relative}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
