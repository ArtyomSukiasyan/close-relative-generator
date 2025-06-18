import { ELang } from "../models/lang.enum";

interface Props {
  langs: ELang[];
  selectedLang: ELang;
  onChangeLang: (lang: ELang) => void;
}

const LanguageSwitcher: React.FC<Props> = ({
  langs,
  selectedLang,
  onChangeLang,
}) => {
  return (
    <div className="language-switcher">
      {langs.map((lang) => (
        <button
          key={lang}
          className={`lang-btn ${selectedLang === lang ? "active" : ""}`}
          onClick={() => onChangeLang(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
