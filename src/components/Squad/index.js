import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselContainer,
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './styles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  return (
    <Section id="jobs">
      <SectionTitle>Squad</SectionTitle>
      <br />
      <CarouselContainer>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem index={index} id={`carousel__item-${index}`}>
                <CarouselItemTitle>{`${item.text}`}</CarouselItemTitle>
                {item.company.map((value, idx) => (
                  <CarouselItemText key={idx}>{value}</CarouselItemText>
                ))}
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
