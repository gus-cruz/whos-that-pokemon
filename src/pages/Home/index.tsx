import React, { useEffect, useState } from 'react';

import { FaChevronRight } from 'react-icons/fa'
import { useTheme } from 'styled-components';
import Pokeball from '../../assets/pokeball.png';

import { Form } from '@unform/web';
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
  const [ time, setTime ] = useState(0);
  const [ score, setScore ] = useState(0);
  const [ error, setError ] = useState(false);
  const [ waiting, setWaiting ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');

 

  //spawn a new random pokemon
  async function spawnPokemon(isInsta = true) {
    try {
      let response = await api.get(`/pokemon/${Math.floor(Math.random() * 898) + 1}`); 
      let newPokemon = {
        name: response.data.forms[0].name,
        sprite: response.data.sprites.front_default,
        shiny_sprite: response.data.sprites.front_shiny
      }
      
      if(isInsta){
        setPokemon(newPokemon);
      } else {
        return newPokemon;
      }
    } catch(err) {
      return err;
    }
  }

  //handle the user form submit
  async function handleSubmit(){
    if (pokemon.name.toLowerCase() === inputValue.toLocaleLowerCase()) {
      setScore(score + 1);
    } else {
      setScore(0);
      setError(true);

      setInterval(() => {
        setError(false);
      }, 2000)
    }

    let newPokemon = await spawnPokemon(false);
    let currentTime = 3;

    setWaiting(true);
    setTime(currentTime);
    const countDown = setInterval(function(){
      if(currentTime <= 0){
        setPokemon(newPokemon);
        setInputValue('');
        setWaiting(false);
        clearInterval(countDown);
      } else {
        currentTime--;
        setTime(currentTime);
      }
    }, 1000);
  };

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
            <p className="score">{score}</p>
          </div>
          <p className="switch-dificulty" role='button'>switch to easy mode</p>
        </Header>
        <Section>
          <h1>who's that pokemon?</h1>
          <div className="pokemon">
            <img src={pokemon ? pokemon.sprite : ''} alt={pokemon ? pokemon.name : ''} width={240}/>
          </div>
          <Form onSubmit={handleSubmit}>

          <p className="next-in">
            {waiting ? `next in... ${time}` : ''}
          </p>
          
          <div className={`input ${error ? 'error' : ''}`}>
              <input placeholder="isn't a ditto?" value={inputValue} onInput={(e: any) => setInputValue(e.target?.value)}/>
              <div role='button' onClick={() => handleSubmit()}>
                <FaChevronRight color={theme.colors.text.regular}/>
              </div>
          </div>
          </Form>
        </Section>
        <Footer>
          <a rel="noreferrer" href="https://www.linkedin.com/in/gus-cruz/" target="_blank">contact</a>
          <a rel="noreferrer" href="https://github.com/gus-cruz" target="_blank">about</a>
        </Footer>
      </Container>
    </>
  );
}

export default Home;