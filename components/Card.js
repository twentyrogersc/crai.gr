import Link from './Link'
import styled from 'styled-components'

const Section = styled.section`
  margin: 1em 0 2em;
`

const Title = styled.h1`
  font-size: 20px;
  line-height: 1em;
  margin: 0;
`

const Subtitle = styled.p`
  font-weight: 700;
  margin: 2px 0 0.4em;
`

const Description = styled.p`
  margin: 0;
`

export default ({ children, company, companyHref, date, title, titleHref }) => (
  <Section>
    <Title>{titleHref ? <Link href={titleHref}>{title}</Link> : title}</Title>
    <Subtitle>
      {companyHref ? <Link href={companyHref}>{company}</Link> : company}
      {date && `, ${date}`}
    </Subtitle>
    <Description>{children}</Description>
  </Section>
)
