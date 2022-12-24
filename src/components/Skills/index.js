import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText } from './styles';

const data = [
  { text: 'HTML/CSS/Javascript' },
  { text: 'React/Next/Redux' },
  { text: 'EmberJs/Ember-data' },
  { text: 'React-Native/Expo' },
  { text: 'NodeJs/Express' },
  { text: 'GraphQL/JamStack' },
  { text: 'Rest APIs/MongoDB' },
  { text: 'Cybersecurity/Network Mgmt.' },
];

const Acomplishments = () => (
  <Section id="skills">
    <SectionTitle>Tools</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
