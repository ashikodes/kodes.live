import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import { SiFrontendmentor } from 'react-icons/si';

import { SocialIcons } from '../Header/styles';
import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  FooterContainer,
} from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:ashikodiemeka@gmail.com">
              ashikodiemeka@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialContainer>
          <SocialIcons
            target="_blank"
            href="https://www.linkedin.com/in/ashikodiemeka/"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.frontendmentor.io/profile/ashikodes"
          >
            <SiFrontendmentor size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://github.com/ashikodes?tab=repositories"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
