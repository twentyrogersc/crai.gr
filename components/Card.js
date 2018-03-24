import Link from './Link'
import Title from './Title'
import styled from 'styled-components'

const Subtitle = Title.withComponent('p')

const Description = styled.p`
  margin: 0.5em 0 0;
`

export default styled(({ children, className, company, companyHref, date, title, titleHref }) => (
  <section className={className}>
    <Title>{titleHref ? <Link href={titleHref}>{title}</Link> : title}</Title>
    <Subtitle>
      {companyHref ? <Link href={companyHref}>{company}</Link> : company}
      {date && `, ${date}`}
    </Subtitle>
    {children && <Description>{children}</Description>}
  </section>
))`
  margin-bottom: 3em;

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    margin-bottom: 2em;
  }
`
