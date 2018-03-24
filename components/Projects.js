import Card from './Card'
import Section from './Section'
import styled from 'styled-components'

const projects = [
  {
    name: 'Customisation Editor',
    url: 'https://www.unmade.com/how-it-works/customization-editor/',
    company: 'Unmade',
    year: 2017,
    description: `
      Part of the D&AD Yellow Pencil winning project, an ecommerce showcase offering interactive and
      customisable products, powered by highly configurable JavaScript modules (React, Redux,
      Canvas, WebGL, SVG, CSS Modules).`
  },
  {
    name: 'Global Happy Party',
    url: 'https://www.globalhappyparty.com/',
    company: 'Google/The Rumpus Room',
    year: 2015,
    description: `
      As featured on the Google homepage, a responsive infinite-scroll animated gallery displaying
      user generated content, submitted via a JavaScript webcam photobooth tool (Canvas,
      MediaStream, Stylus).`
  },
  {
    name: 'Denim Studio',
    url: 'https://vimeo.com/71008158',
    company: 'Selfridges/The Rumpus Room',
    year: 2013,
    description: `
      A suite of scripts that dynamically created and powered a navigable mosaic website, with the
      ability to control/moderate/tweak the composition at each stage (Node.js, Photoshop JSX, SVG,
      Canvas, Sass).`
  },
  {
    name: 'For Everyone',
    url: 'https://vimeo.com/54869645',
    company: 'Google/The Rumpus Room',
    year: 2012,
    description: `
      FWA of the Day award winning site for the Chromebook launch, visitors could explore, create
      and share their own ‘For Everyone’ memes via the web, mobile and Times Square (Canvas,
      MediaStream, FileReader).`
  }
]

export default function Projects() {
  return (
    <Section title="Projects">
      {projects.map(({ company, date, description, name, url, year }) => (
        <Card company={company} date={year} key={name} title={name} titleHref={url}>
          {description}
        </Card>
      ))}
    </Section>
  )
}
