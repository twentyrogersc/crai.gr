import Link from './Link'
import Section from './Section'
import styled from 'styled-components'

const Root = Section.extend`
  align-items: flex-start;
`

const WebsiteLink = Link.extend`
  display: none;

  @media print {
    display: inline-block;
  }
`

export default function Contact({ nested }) {
  return (
    <Root nested={nested}>
      <Link href="https://uk.linkedin.com/in/craigarogers">linkedin.com/in/craigarogers</Link>{' '}
      <Link href="mailto:hello@crai.gr">hello@crai.gr</Link>{' '}
      <WebsiteLink href="/">crai.gr</WebsiteLink>
    </Root>
  )
}
