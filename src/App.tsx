import { useState } from "react";
import getRandomNumberInRange from "./helpers/getRandomNumberInRange";
import { generate, relativeFinish, wayToRelative } from "./constants/texts";
import { ELang } from "./models/lang.enum";
import "./App.css";

const langs: ELang[] = [ELang.en, ELang.ru, ELang.am];

function App() {
  const [relative, setRelative] = useState("");
  const [lang, setLang] = useState<ELang>(ELang.en);

  const generateRelative = () => {
    setRelative("");

    const wayCount = getRandomNumberInRange(3, 8);
    let closeRelative = "";
    let prevRelativeWayIdx = -1;

    for (let i = 0; i < wayCount; i++) {
      const relativeWayIdx = getRandomNumberInRange(
        0,
        wayToRelative[lang].length
      );

      if (relativeWayIdx === prevRelativeWayIdx) {
        i--;
        continue;
      }

      prevRelativeWayIdx = relativeWayIdx;
      const relativeWay = wayToRelative[lang][relativeWayIdx];
      closeRelative += `${relativeWay} `;
    }

    const relativeIdx = getRandomNumberInRange(0, relativeFinish[lang].length);
    closeRelative += relativeFinish[lang][relativeIdx];

    setRelative(closeRelative);
  };

  return (
    <div className="container">
      <div className="relative">
        <div className="language-switcher">
          {langs.map((l) => (
            <button
              key={l}
              className={`lang-btn ${lang === l ? "active" : ""}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button className="button" onClick={generateRelative}>
          {generate[lang]}
        </button>

        <div className="result">
          <p>{relative}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
