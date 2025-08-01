import { useState } from "react";
import SiteHead from "./components/SiteHead";
import LanguageSwitcher from "./components/LanguageSwitcher";
import GenerateButton from "./components/GenerateButton";
import RelativeResult from "./components/RelativeResult";
import getRandomNumberInRange from "./helpers/getRandomNumberInRange";
import { generate, relativeFinish, wayToRelative } from "./constants/texts";
import { ELang } from "./models/lang.enum";
import "./Home.css";

const langs: ELang[] = [ELang.en, ELang.ru, ELang.am];

function Home() {
  const [relative, setRelative] = useState("");
  const [lang, setLang] = useState<ELang>(ELang.en);

  const generateRelative = () => {
    setRelative("");

    const wayCount = getRandomNumberInRange(3, 8);
    const usedIndices = new Set<number>();
    const maxNum = wayToRelative[lang].length;

    const finalWayCount = Math.min(wayCount, maxNum);

    let closeRelative = "";

    while (usedIndices.size < finalWayCount) {
      const idx = getRandomNumberInRange(0, maxNum);
      if (usedIndices.has(idx)) {
        continue;
      }
      
      usedIndices.add(idx);
      closeRelative += `${wayToRelative[lang][idx]} `;
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
            onChangeLang={(newLang) => {
              setLang(newLang);
              setRelative("");
            }}
          />
          <GenerateButton onClick={generateRelative} label={generate[lang]} />
          <RelativeResult text={relative} />
        </div>
      </div>
    </>
  );
}

export default Home;
