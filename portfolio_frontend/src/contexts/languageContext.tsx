import { createContext, type Dispatch, type SetStateAction} from "react";
import { EnglishText, JapaneseText } from "../assets/text";

interface LanguageContextType {
  'en': typeof EnglishText;
  'jp': typeof JapaneseText;
  setLanguage: Dispatch<SetStateAction<'en' | 'jp'>>;
  getLanguage: 'en' | 'jp';
}
const LanguageContext = createContext<LanguageContextType>({
  'en': EnglishText,
  'jp': JapaneseText,
  setLanguage: () => {},
  getLanguage: 'en',
});

export { LanguageContext };
