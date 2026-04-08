import React, { useState, useRef} from 'react'

import './App.css'
import { IntroductionSection } from './sections/IntroductionSection'
import { AboutSection } from './sections/aboutSection'
import { LanguageContext } from './contexts/languageContext'
import { EnglishText, JapaneseText} from './assets/text'
import { GameSection } from './sections/gameSection'
import { CurrentProjectSection } from './sections/currentProjectSection'
import { ProjectsSection } from './sections/projectsSection'
import { SideNavBar } from './components/SideNAvBar'
import { useLinkRefs } from './sections/currentProjectSubSections/useLinkRefs'
import { SectionSelectDropdown } from './components/SectionSelectDropdown'



function App() {
  const [userLanguage, setUserLanguage] = useState<'en' | 'jp'>('en');
  const targetRef = useRef(null);
  const gameTargetRef = useRef(null);
  const currentProjectTargetRef = useRef(null);
  const projectsTargetRef = useRef(null);
  const currentProjectSubSectionRefs = useLinkRefs();
  const nonTopRef = useRef(null);
  const introductionRef = useRef(null);
  const dropDownLinkRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    'Introduction': introductionRef,
    'About': targetRef,
    'Game': gameTargetRef,
    'Current Project': currentProjectTargetRef,
    'Projects': projectsTargetRef,
  }

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
        <SectionSelectDropdown useLinkRefs={dropDownLinkRefs} nonTopRef={nonTopRef} ></SectionSelectDropdown>
        <IntroductionSection targetRef={targetRef} gameTargetRef={gameTargetRef} currentProjectTargetRef={currentProjectTargetRef} introductionRef={introductionRef}/>

        <div ref={nonTopRef}>

          <AboutSection targetRef={targetRef}/>
          <GameSection targetRef={gameTargetRef}/>
          <CurrentProjectSection targetRef={currentProjectTargetRef} subSectionRefs={currentProjectSubSectionRefs}/>
          <ProjectsSection targetRef={projectsTargetRef}/>
        </div>

    </LanguageContext.Provider>
      </div>

    </>
  )
}

export default App
