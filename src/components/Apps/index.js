import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  UtilityList,
  Img,
} from './styles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="apps">
    <SectionDivider />
    <SectionTitle main>Apps</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <Img src={p.image} />
            <HeaderThree isTitle>{p.title}</HeaderThree>
            <CardInfo className="card-info">{p.description}</CardInfo>

            <UtilityList>
              {p.code && (
                <ExternalLinks target="_blank" href={p.code}>
                  Code
                </ExternalLinks>
              )}
              {p.link && (
                <ExternalLinks target="_blank" href={p.link}>
                  Link
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
