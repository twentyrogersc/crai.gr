import Link from './Link'
import styled from 'styled-components'

const Root = styled.section``

export default function Contact() {
  return (
    <Root>
      <Link href="https://uk.linkedin.com/in/craigarogers">linkedin.com/in/craigarogers</Link>
      <br />
      <Link href="mailto:hello@crai.gr">hello@crai.gr</Link>
      <br />
      <Link href="/">crai.gr</Link>
    </Root>
  )
}
