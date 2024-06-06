import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';



const App = () =>{

  return (
    <div   >
      <Header />
      <Navbar />
      <Main />
      <Footer />  
    </div>
  );


};

export default App;  

ReactDOM.render(<App />, document.getElementById('root'));

// const rootElement = document.getElementById('root');

// // Create a root and render the JSX directly
// const root = ReactDOM.createRoot(rootElement);
// root.render(
  
//     <App />
    
// );


// ReactDOM.render(<App />, document.getElementById('root'));

// const userName ='Peter Smith';

// ReactDOM.render(<div>

//   <h2>MainTitle</h2>

//   <h3>Hello Again {userName}</h3>

//   <p>Hi there</p>

//   <p>Some text here to follow</p>

// </div>, document.getElementById('root'));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
   
//      <p>Hello {userName}</p>
//      <p>Test Again</p>
//    </div>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // The JSX content to be rendered
// const userName = 'Peter Smith';

// // Get the root element
// const rootElement = document.getElementById('root');

// // Create a root and render the JSX directly
// const root = ReactDOM.createRoot(rootElement);
// root.render(
  
//     <div>
//       <h2>Main Title</h2>
//       <h3>Hello Again {userName}</h3>
//       <p>Some text here to follow</p>
//       <p>Hello a third time</p>
//     </div>
    
// );
