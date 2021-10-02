import React, { useEffect, useState } from 'react';

import { FaChevronRight } from 'react-icons/fa'
import { useTheme } from 'styled-components';
import Pokeball from '../../assets/pokeball.png';

import api from '../../services/api';

import {
  Container,
  Header,
  Footer,
  Section
} from './style';

const Home: React.FC = () => {
  const theme = useTheme();

  const [ pokemon, setPokemon ] = useState(null as any);

  async function spawnPokemon() {
    try {
      let newPokemon = await api.get(`/pokemon/${Math.floor(Math.random() * 898) + 1}`); 
      setPokemon(newPokemon);
      return 
    } catch(err) {
      return err;
    }
  }

  useEffect(() => {
    spawnPokemon();
  }, []);

  return (
    <>
      <meta name="theme-color" content={theme.colors.contrast} />

      <Container>
        <Header>
          <div>
            <img src={Pokeball} alt="score"/>
            <p className="score">10</p>
          </div>
          <p className="switch-dificulty" role='button'>switch to easy mode</p>
        </Header>
        <Section>
          <h1>who's that pokemon?</h1>
          <div className="pokemon">
            <img src={pokemon ? pokemon.data.sprites.front_default : ''} width={240}/>
          </div>
          <div className="input">
              <input placeholder="isn't a ditto?" />
              <div role='button' onClick={() => spawnPokemon()}>
                <FaChevronRight color={theme.colors.text.regular}/>
              </div>
          </div>
        </Section>
        <Footer>
          <a href="https://www.linkedin.com/in/gus-cruz/" target="_blank">contact</a>
          <a href="https://github.com/gus-cruz" target="_blank">about</a>
        </Footer>
      </Container>
    </>
  );
}

export default Home;