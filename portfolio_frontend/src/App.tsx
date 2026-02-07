import { useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IntroductionSection } from './sections/introductionSection'
import { SectionPage } from './sections/sectionPage'
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

    </LanguageContext.Provider>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
