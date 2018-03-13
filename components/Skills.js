import Title from './Title'
import styled from 'styled-components'

const Root = styled.section``

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li``

const skills = {
  JavaScript: ['ES6', 'React', 'Redux', 'Backbone', 'Canvas', 'Webpack', 'Gulp', 'Browserify'],
  HTML5: ['Templating (Django, Mustache, etc)', 'Jade'],
  CSS3: ['Modules', 'JSS', 'PostCSS', 'BEM', 'Sass', 'Stylus'],
  'Testing/Deployment': ['Jest', 'Mocha', 'ESLint', 'NPM', 'CircleCI', 'Node.js', 'TDD'],
  'UI/UX': ['Wireframing', 'Sketch', 'Photoshop', 'Research']
}

export default function Skills() {
  return (
    <Root>
      <Title>Skills</Title>
      <List>
        {Object.keys(skills).map(skill => (
          <ListItem key={skill}>
            <strong>{skill} </strong>
            {skills[skill].join(', ')}
          </ListItem>
        ))}
      </List>
    </Root>
  )
}
