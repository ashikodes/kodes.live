import React from 'react';
import { ImLocation } from 'react-icons/im';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection, SectionLabel } from './styles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Emeka Ashikodi
        </SectionTitle>
        <SectionLabel>Software Engineer</SectionLabel>
        <SectionLabel>
          <ImLocation />
          Waterloo, Ontario
        </SectionLabel>
        <SectionText>
          I am a software engineer and technology professional with extensive
          experience in JavaScript, modern web technologies and mobile
          cross-platform development.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
