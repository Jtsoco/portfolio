import { useState, useRef} from 'react'

import './App.css'
import { IntroductionSection } from './sections/IntroductionSection'
import { AboutSection } from './sections/aboutSection'
import { LanguageContext } from './contexts/languageContext'
import { EnglishText, JapaneseText} from './assets/text'
import { GameSection } from './sections/gameSection'
import { CurrentProjectSection } from './sections/currentProjectSection'
import { SideNavBar } from './components/SideNAvBar'
import { useLinkRefs } from './sections/currentProjectSubSections/useLinkRefs'

function App() {
  const [userLanguage, setUserLanguage] = useState<'en' | 'jp'>('en');
  const targetRef = useRef(null);
  const gameTargetRef = useRef(null);
  const currentProjectTargetRef = useRef(null);
  const currentProjectSubSectionRefs = useLinkRefs();

  return (
    <>
    <div className="app-layout">

    <LanguageContext.Provider value={{
      'en': EnglishText,
      'jp': JapaneseText,
      setLanguage: setUserLanguage,
      getLanguage: userLanguage,
    }}>
        <SideNavBar useLinkRefs={currentProjectSubSectionRefs} sectionRef={currentProjectTargetRef}></SideNavBar>
        <IntroductionSection targetRef={targetRef} gameTargetRef={gameTargetRef} currentProjectTargetRef={currentProjectTargetRef}/>
        <AboutSection targetRef={targetRef}/>
        <GameSection targetRef={gameTargetRef}/>
        <CurrentProjectSection targetRef={currentProjectTargetRef} subSectionRefs={currentProjectSubSectionRefs}/>
        {/* next section is current project, show wireframe and database schema from book app */}

    </LanguageContext.Provider>
      </div>

    </>
  )
}

export default App
