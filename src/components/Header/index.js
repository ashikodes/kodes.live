import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiKodi, SiFrontendmentor } from 'react-icons/si';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './styles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <SiKodi size="3rem" />{' '}
          <Span>
            Ashi<b>Kodes</b>
          </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#apps">
          <NavLink>Apps</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#jobs">
          <NavLink>Jobs</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
