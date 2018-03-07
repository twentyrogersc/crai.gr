import styled from 'styled-components'

export default styled.a`
  border-bottom: 1px solid #bbb;
  color: #000;
  display: inline-block;
  line-height: 1em;
  text-decoration: none;
  text-shadow: 1px 1px 0 #fff, -1px 1px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff;
  transition: border-bottom-color 0.2s ease-in-out;

  &:hover {
    border-bottom-color: #000;
  }
`
