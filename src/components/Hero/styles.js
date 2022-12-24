import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const SectionLabel = styled.p`
  max-width: 800px;
  font-size: 22px;
  line-height: 1.5;
  font-weight: 300;
  padding-bottom: 2rem;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 1.5;
    padding-bottom: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 1.5;
    padding-bottom: 1rem;
  }
`;
