import Link from './Link'
import styled from 'styled-components'

const Root = styled.section``

const WebsiteLink = Link.extend`
  display: none;

  @media print {
    display: inline-block;
  }
`

export default function Contact() {
  return (
    <Root>
      <Link href="https://uk.linkedin.com/in/craigarogers" target="_blank">
        linkedin.com/in/craigarogers
      </Link>
      <br />
      <Link href="mailto:hello@crai.gr" target="_blank">
        hello@crai.gr
      </Link>
      <br />
      <WebsiteLink href="/" target="_blank">
        crai.gr
      </WebsiteLink>
    </Root>
  )
}
