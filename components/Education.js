import Card from './Card'
import Section from './Section'
import styled from 'styled-components'

const education = {
  qualification: 'BA (Hons) Computing & Interaction Design',
  school: 'Goldsmiths College, University of London',
  date: '2008 – 2011',
  result: 'First Class Honours',
  url: 'https://gold.ac.uk'
}

export default () => (
  <Section title="Education">
    <Card
      company={education.school}
      companyHref={education.url}
      date={education.date}
      title={`${education.result}, ${education.qualification}`}
    />
  </Section>
)
