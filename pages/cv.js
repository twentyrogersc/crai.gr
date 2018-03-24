import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styled from 'styled-components'

export default () => (
  <main>
    <Intro expand />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
  </main>
)
