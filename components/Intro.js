import styled from 'styled-components'

const Root = styled.header``

const Title = styled.h1``

const SubTitle = styled.p``

export default function Intro({ expand }) {
  return (
    <Root>
      <Title>Craig Rogers</Title>
      <SubTitle>
        An award-winning front-end developer just wanting to make great things.
        {expand &&
          `
        With over 8 years experience working on innovative projects that push the boundaries of
        the web, and an interest spanning the latest in design and technology, ideas are
        successfully realised at both a technical and conceptual level.`}
      </SubTitle>
    </Root>
  )
}
