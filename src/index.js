import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import App from"./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
  <App />

</>
)








// import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import Header from"./Header";
// import MainContent from"./mainContent";
// import Footer from"./footer";
// import App from './App';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);




// function Page() {
//   return (
//       <>
//           <Header />
//           <MainContent />
//           <Footer />
//       </>
//   )
// }

// root.render(
//   <Page />
// )

