import Link from '../components/Link'
import Title from '../components/Title'
import styled from 'styled-components'

const Hidden = Title.extend`
  display: none;
`

export default () => (
  <main>
    <Hidden>Craig Rogers</Hidden>
    <Link href="mailto:hello@crai.gr" target="_blank">
      hello@crai.gr
    </Link>
    <br />
    <Link href="https://uk.linkedin.com/in/craigarogers" target="_blank">
      linkedin.com/in/craigarogers
    </Link>
  </main>
)
