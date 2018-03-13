import Section from './Section'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Skill = styled.li``

const Name = styled.strong`
  font-weight: 700;
`

const skills = {
  JavaScript: ['ES6', 'React', 'Redux', 'Backbone', 'Canvas', 'Webpack', 'Gulp', 'Browserify'],
  HTML5: ['Templating (Django, Mustache, etc)', 'Jade'],
  CSS3: ['Modules', 'JSS', 'PostCSS', 'BEM', 'Sass', 'Stylus'],
  'Testing/Deployment': ['Jest', 'Mocha', 'ESLint', 'NPM', 'CircleCI', 'Node.js', 'TDD'],
  'UI/UX': ['Wireframing', 'Sketch', 'Photoshop', 'Research']
}

export default function Skills() {
  return (
    <Section title="Skills">
      <List>
        {Object.keys(skills).map(skill => (
          <Skill key={skill}>
            <Name>{skill} </Name>
            {skills[skill].join(', ')}
          </Skill>
        ))}
      </List>
    </Section>
  )
}
