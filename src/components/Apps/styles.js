import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  padding: 1rem;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  background-color: #212d45;
  text-align: center;
  width: 400px;
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  padding: 0.5rem 1rem;
  font-size: 2rem;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 10px;
  color: #e4e6e7;
  line-height: 24px;
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #ffffff50;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #ffffff80;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem 2rem 0;
  flex-wrap: wrap;
`;
export const Tag = styled.li`
  color: #fffffe;
  font-size: 1.5rem;
  border: 1px solid #d8bfbf;
  padding: 4px 16px;
  border-radius: 16px;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.sm} {
    align-items: center;
    display: flex;
  }
`;
