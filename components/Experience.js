import Card from './Card'
import Section from './Section'
import styled from 'styled-components'

const experience = [
  {
    company: 'Tourwriter',
    url: 'https://tourwriter.com/',
    date: 'Oct 2017 - Present',
    role: 'Lead Developer',
    description: `
      Leading the development and architecting of a new internal project, involving the integration
      of real-time data (Websockets) and external api sources (Google Places). Supervised a small
      team across both the front-end (React, Redux, Material Design) and back-end (Node.js,
      PostgreSQL) stack, with an emphasis on scalability, code quality and team learning.`
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
      {experience.map(({ company, date, description, role, url }) => (
        <Card
          company={company}
          companyHref={url}
          date={date}
          key={`${company}/${role}`}
          title={role}
        >
          {description}
        </Card>
      ))}
    </Section>
  )
}
