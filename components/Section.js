import Title from './Title'
import styled from 'styled-components'

const SectionTitle = Title.extend`
  opacity: 0.5;

  @media screen and (min-width: 900px) {
    padding-right: 40px;
    transform: translate(-150px, 100%);
    text-align: right;
    width: 150px;
  }
`

export default styled(({ children, className, title }) => (
  <section className={className}>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </section>
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;

  @media screen {
    max-width: 620px;
    min-width: 300px;
    padding: ${({ nested }) => (nested ? '40px 0' : '40px 20px')};
  }
`
