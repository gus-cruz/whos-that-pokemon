import styled from 'styled-components';

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

export const Section = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px;

  h1 {
    text-align: center;
    color: ${props => props.theme.colors.text.regular};
    font-size: 20px;

    cursor: default;
  }

  .input {
    background: ${props => props.theme.colors.contrast};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 480px;
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