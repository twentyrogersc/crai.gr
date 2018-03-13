import Link from './Link'
import Section from './Section'
import Subtitle from './Subtitle'
import styled from 'styled-components'

const Job = styled.div`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Role = Subtitle.extend`
  padding: 0;
`

const Description = styled.p`
  margin: 10px 0 0;
`

const experience = [
  {
    company: 'Tourwriter',
    url: 'https://tourwriter.com/',
    date: 'Oct 2017 - Present',
    role: 'Lead Developer'
  },
  {
    company: 'Unmade',
    url: 'https://unmade.com',
    date: 'May 2015 - Aug 2017',
    role: 'Lead Front-end Developer',
    description: `
      Oversaw all front-end work within the company, with a strong focus on building a scalable and
      flexible product. Introduced build tools, style guides, testing and continuous deployment into
      the stack. Projects mainly surrounded the core Unmade products, consisting of data-driven
      graphical programming (Canvas) and interface implementation (React, Redux, APIs, etc).`
  },
  {
    company: 'The Rumpus Room',
    url: 'https://vimeo.com/therumpusroom',
    date: 'Sep 2010 – Apr 2015',
    role: 'Front-end Developer',
    description: `
      Lead front-end development within the studio, involving feasibility analysis, prototyping,
      development and testing. Projects were mainly large JavaScript web builds centred around the
      latest HTML5 technologies (Video, Canvas, MediaStream, etc), great user experiences and
      responsive design implementation. Clients included Google, Selfridges, Eurovision, Tate, P&G
      and the International Olympic Committee.`
  }
]

export default function Experience() {
  return (
    <Section title="Experience">
      {experience.map(({ company, date, description, role, url }, index) => (
        <Job key={index}>
          <Role>{role}</Role>
          <Link href={url}>{company}</Link> {date}
          {description && <Description>{description}</Description>}
        </Job>
      ))}
    </Section>
  )
}
