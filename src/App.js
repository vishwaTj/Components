import React from 'react';
import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';


export default function App() {
  return (
    <div>
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>   
      <div>
         <Route path="/accordion">
           <AccordionPage />
         </Route>
         <Route path="/dropdown">
           <DropDownPage />
         </Route>

      </div>

    </div>
  )
}
