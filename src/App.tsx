import { useState } from "react";
import SiteHead from "./components/SiteHead";
import LanguageSwitcher from "./components/LanguageSwitcher";
import GenerateButton from "./components/GenerateButton";
import RelativeResult from "./components/RelativeResult";
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
      const maxNum = wayToRelative[lang].length;
      const relativeWayIdx = getRandomNumberInRange(0, maxNum);

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
    <>
      <SiteHead lang={lang} />
      <div className="container">
        <div className="relative">
          <LanguageSwitcher
            langs={langs}
            selectedLang={lang}
            onChangeLang={setLang}
          />
          <GenerateButton onClick={generateRelative} label={generate[lang]} />
          <RelativeResult text={relative} />
        </div>
      </div>
    </>
  );
}

export default App;
