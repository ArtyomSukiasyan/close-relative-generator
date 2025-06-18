import { meta, title } from "../constants/config";
import type { ELang } from "../models/lang.enum";

export default function SiteHead({ lang }: { lang: ELang }) {
  return (
    <>
      <title>{title[lang]}</title>
      <meta name="description" content={meta[lang].description} />
      <meta name="keywords" content={meta[lang].keywords} />
      <meta name="author" content="Artyom Sukiasyan" />
    </>
  );
}
