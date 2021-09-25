import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    
    colors: {
      background: string;
      contrast: string;

      text: {
        regular: string;

        bold: string;
        medium: string;
        thin: string;
      }
    }
  }
}