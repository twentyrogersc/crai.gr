import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import styled from 'styled-components'

import Card from '../components/Card'
import Link from '../components/Link'
import Subtitle from '../components/Subtitle'

const Root = styled.main``

const Links = styled.section`
  margin-top: 6em;
`

export default function Cv() {
  return (
    <Root>
      <Intro expand />
      <Skills />
      <Experience />

      <Subtitle>Projects</Subtitle>
      <Card company="Unmade" date="2016" title="UMd" titleHref="https://umd.studio">
        Part of the D&AD Yellow Pencil winning project, an ecommerce showcase offering interactive
        and customisable products, powered by highly configurable JavaScript modules.
      </Card>
      <Card
        company="Google/The Rumpus Room"
        date="2015"
        title="Happy Party"
        titleHref="https://www.globalhappyparty.com"
      >
        As featured on the Google homepage, a responsive infinite-scroll animated gallery displaying
        user generated content, submitted via a JavaScript webcam photobooth tool.
      </Card>
      <Card
        company="Selfridges/The Rumpus Room"
        date="2013"
        title="Denim Studio"
        titleHref="https://vimeo.com/71008158"
      >
        A suite of scripts that dynamically created and powered a navigable mosaic website, with the
        ability to control/moderate/tweak the composition at each stage.
      </Card>

      <Subtitle>Education</Subtitle>
      <Card
        company="Goldsmiths College, University of London"
        companyHref="http://www.gold.ac.uk"
        date="2008 - 2011"
        title="Bachelor of Science (BSc), Computing &amp; Interaction Design"
      />

      <Contact />
    </Root>
  )
}
