import Card from './Card'
import Section from './Section'
import styled from 'styled-components'

const projects = [
  {
    name: 'Customisation Editor',
    url: 'https://www.unmade.com/how-it-works/customization-editor/',
    company: 'Unmade',
    year: '2017',
    description: `
      Part of the D&AD Yellow Pencil winning project, an ecommerce showcase offering interactive and
      customisable products, powered by highly configurable JavaScript modules (React, Redux,
      Canvas, WebGL, SVG, CSS Modules).`
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
