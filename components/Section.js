import styled from 'styled-components'

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
  width: 100%;

  @media screen {
    max-width: 620px;
    min-width: 300px;
    padding: ${({ nested }) => (nested ? '40px 0' : '40px 20px')};
  }
`
