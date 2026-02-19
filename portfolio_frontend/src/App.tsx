import { useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IntroductionSection } from './sections/introductionSection'
import { AboutSection } from './sections/aboutSection'
import { LanguageContext } from './contexts/languageContext'
import { EnglishText, JapaneseText} from './assets/text'
import { GameSection } from './sections/gameSection'

function App() {
  const [count, setCount] = useState(0)
  const [userLanguage, setUserLanguage] = useState<'en' | 'jp'>('en');
  const targetRef = useRef(null);

  return (
    <>
    <div className="app-layout">

    <LanguageContext.Provider value={{
      'en': EnglishText,
      'jp': JapaneseText,
      setLanguage: setUserLanguage,
      getLanguage: userLanguage,
    }}>

        <IntroductionSection targetRef={targetRef}/>
        <AboutSection targetRef={targetRef}/>
        <GameSection />
        {/* next section is current project, show wireframe and database schema from book app */}

    </LanguageContext.Provider>
      </div>

    </>
  )
}

export default App
