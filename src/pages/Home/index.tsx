import React from 'react';

import { FaChevronRight } from 'react-icons/fa'
import { useTheme } from 'styled-components';
import Pokeball from '../../assets/pokeball.png';

import {
  Container,
  Header,
  Footer,
  Section
} from './style';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <div>
          <img src={Pokeball} alt="score" />
          <p className="score">10</p>
        </div>
        <p className="switch-dificulty">switch to easy mode</p>
      </Header>
      <Section>
        <h1>who's that pokemon</h1>
        <div className="input">

            <input placeholder="isn't a ditto?" />
            <div>
              <FaChevronRight color={theme.colors.text.regular}/>
            </div>
        </div>
      </Section>
      <Footer>
        <a href="https://www.linkedin.com/in/gus-cruz/" target="_blank">contact</a>
        <a href="https://github.com/gus-cruz" target="_blank">about</a>
      </Footer>
    </Container>
  );
}

export default Home;