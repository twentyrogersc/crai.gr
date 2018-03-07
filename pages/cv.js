import Intro from '../components/Intro'

import Card from '../components/Card'
import Link from '../components/Link'
import Subtitle from '../components/Subtitle'
import styled from 'styled-components'

const Root = styled.main``

const Skills = styled.ul`
  list-style-type: none;
  margin: 1em 0 2em;
  padding-left: 0;
`

const SkillsTitle = styled.strong`
  display: block;
  margin-top: 0.5em;

  @media (min-width: 500px) {
    display: inline;
  }
`

const Links = styled.section`
  margin-top: 6em;
`

export default function Cv() {
  return (
    <Root>
      <Intro expand />

      <Subtitle>Skills</Subtitle>
      <Skills>
        <li>
          <SkillsTitle>JavaScript</SkillsTitle> ES6, React, Redux, Backbone, Canvas, Webpack, Gulp,
          Browserify
        </li>
        <li>
          <SkillsTitle>HTML5</SkillsTitle> Templating (Django, Mustache, etc), Jade
        </li>
        <li>
          <SkillsTitle>CSS3</SkillsTitle> Modules, PostCSS, BEM, Sass, Stylus
        </li>
        <li>
          <SkillsTitle>Testing/Deployment</SkillsTitle> Jest, Mocha, ESLint, NPM, CircleCI, Node.js,
          TDD
        </li>
        <li>
          <SkillsTitle>UI/UX</SkillsTitle> Wireframing, Sketch, Photoshop, Research
        </li>
      </Skills>

      <Subtitle>Experience</Subtitle>
      <Card
        company="Tourwriter"
        companyHref="https://tourwriter.com/"
        date="Oct 2017 - Present"
        title="Lead Developer"
      />
      <Card
        company="Unmade"
        companyHref="https://unmade.com"
        date="May 2015 - Aug 2017"
        title="Lead Front-end Developer"
      >
        Overseeing all front-end work within the company, with a strong focus on building a scalable
        and flexible product. Introduced build tools, styleguides (components), testing and
        continuous deployment into the stack. Projects mainly surround the core Unmade products,
        consisting of data-driven graphical programming (canvas) and interface implementation
        (react, redux, apis, etc).
      </Card>
      <Card
        company="The Rumpus Room"
        companyHref="https://vimeo.com/therumpusroom"
        date="Sep 2010 – Apr 2015"
        title="Front-end Developer"
      >
        Lead front-end development within the studio, involving feasibility analysis, prototyping,
        development and testing. Projects were mainly large JavaScript web builds centred around the
        latest HTML5 technologies (video, canvas, getUserMedia, etc), great user experiences and
        responsive design implementation. Clients included Google, Selfridges, Eurovision, Tate, P&G
        and the International Olympic Committee.
      </Card>
      <Card
        company="Four Communications"
        companyHref="http://www.fourcommunications.com"
        date="Sep 2009 – Aug 2010"
        title="Web developer"
      >
        Full-stack development, working on global websites with a focus on accessibility and
        multi-lingual functionality. Clients included Sony Computer Entertainment Europe, HSBC and
        the Office for National Statistics (Census 2011).
      </Card>

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

      <Links>
        <Link href="https://uk.linkedin.com/in/craigarogers">linkedin.com/in/craigarogers</Link>
        <br />
        <Link href="mailto:hello@crai.gr">hello@crai.gr</Link>
        <br />
        <Link href="/">crai.gr</Link>
      </Links>
    </Root>
  )
}
