import { injectGlobal } from 'styled-components';
import reset from 'styled=-reset';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  ${reset};
  body{
    font-family: 'Roboto', sans-serif;
    background-color: #efc0f1;
  }
  a{
    color: inherit;
  }
  main{
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;
