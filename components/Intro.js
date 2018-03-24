import Section from './Section'
import Title from './Title'
import styled from 'styled-components'

const Root = Section.withComponent('header').extend`
  @media screen {
    min-height: 100vh;
  }
`

const Bio = styled.p`
  margin: 0.5em 0 0;
`

export default function Intro({ children, expand }) {
  return (
    <Root>
      <Title>Craig Rogers</Title>
      <Bio>
        An award-winning front-end developer just wanting to make great things.
        {expand &&
          `
            With over 8 years experience working on innovative projects that push the boundaries of
            the web, and an interest spanning the latest in design and technology, ideas are
            successfully realised at both a conceptual and technical level.
          `}
      </Bio>
      {children}
    </Root>
  )
}
