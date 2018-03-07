import Contact from '../components/Contact'
import Intro from '../components/Intro'
import styled from 'styled-components'

const Root = styled.main``

export default function Index() {
  return (
    <Root>
      <Intro />
      <Contact />
    </Root>
  )
}
