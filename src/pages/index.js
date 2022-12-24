import Skills from '../components/Skills';
import BgAnimation from '../components/HeroAnime';
import Hero from '../components/Hero';
import Apps from '../components/Apps';
import Squad from '../components/Squad';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Apps />
      <Squad />
      <Skills />
    </Layout>
  );
};

export default Home;
