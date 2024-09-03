import React,{ StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom Ready!</h1>
    </div>
  );
}
// const ReactElement ={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherUser='chai aur code'
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

const AnotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <MyApp />  */}
     {/* <ReactElement/> */}
     {reactElement} 
     {/* {AnotherElement} */}
     {/* <chai />  */}
     {/* <App/> */}
  </StrictMode>,
);
