import styled from 'styled-components';

import {shade} from 'polished';

interface SectionProps {
  isHide: boolean;
}

export const Container = styled.div`
  background: ${props => props.theme.colors.background};

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  div {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }

  p {
    font-size: 12px;
  }

  .score {
    color: ${props => props.theme.colors.text.regular};

    cursor: default;
  }

  .switch-dificulty {
    color: ${props => props.theme.colors.text.bold};
    cursor: pointer;

    display: flex;
    align-items: center;

    transition: color 0.2s ease-in;

    &:hover {
      color: ${props => props.theme.colors.text.thin};
    }
  }
`;

export const Section = styled.section<SectionProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px;

  small {
    color: ${props => props.theme.colors.text.bold}
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
  }

  h1 {
    text-align: center;
    color: ${props => props.theme.colors.text.regular};
    font-size: 20px;

    cursor: default;
  }

  .error {
    transition: all 0.5s;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;

  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  .choices {
    max-width: 480px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
     
    @media (max-width: 880px) {
      grid-template-columns: repeat(1, 1fr);
    }  
  
    .input {
      padding: 16px;
      transition: 0.1s;
      color: ${props => props.theme.colors.text.regular};
      height: 56px;

      &:hover {
        transform: scale(0.98);
        cursor: pointer;
        background: ${props => shade(0.08, props.theme.colors.contrast)};
      }
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 480px;
    width: 100%;
  }

  .input {
    background: ${props => props.theme.colors.contrast};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      width: 100%;
      background: none;
      border: none;
      padding: 24px;
      color: ${props => props.theme.colors.text.regular};

      &::placeholder {
        color: ${props => props.theme.colors.text.thin}
      }
    }

    div {
      &:hover {
        svg {
          fill: ${props => props.theme.colors.text.bold};
        }
      }

      svg {
        transition: fill 0.2s ease-in-out;
      }

      cursor: pointer;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 24px;
    }
  }

  .pokemon {
    margin: 24px 0 16px;
    height: 248px;

    img {
      image-rendering: -moz-crisp-edges;
      image-rendering: -webkit-crisp-edges;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
      transition: ${props => props.isHide ? '' : '0.5s'};

      user-drag: none;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }

  .next-in {
    color: ${props => props.theme.colors.text.regular};
    font-size: 10px;
    margin: 4px 0;
    text-align: right;
    cursor: progress;
    height: 16px;
    align-self: flex-end;
  }

  .hide {
    filter: brightness(0);
  }
`;

export const Footer = styled.footer`
  display: flex;	
  justify-content: center;
  align-items: center;

  a {
    font-size: 12px;
    color: ${props => props.theme.colors.text.regular};
    transition: color 0.2s ease-in;
    margin: 16px;

    &:hover {
      color: ${props => props.theme.colors.text.thin};
    }
  }
`;