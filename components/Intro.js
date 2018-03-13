import Title from './Title'
import styled from 'styled-components'

const Root = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media screen {
    max-width: 620px;
    min-height: 100vh;
    padding: 20px;
  }
`

const Bio = styled.p`
  margin: ${({ bottom }) => (bottom ? '0 0 2em' : 0)};
`

export default function Intro({ children, expand }) {
  return (
    <Root>
      <Title>Craig Rogers</Title>
      <Bio bottom={!!children}>
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
