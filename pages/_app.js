import { createGlobalStyle } from "styled-components"
import '../styles/app.scss';
const GlobalStyled = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Krub:wght@400;700&family=Montserrat:wght@300;400;700;900&family=Roboto&family=Staatliches&display=swap');
  body{
    padding:0;
    margin:0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return( 
  <>
  <GlobalStyled />
  <Component {...pageProps} />
  </>
  )
}
