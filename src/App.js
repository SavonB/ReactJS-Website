import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import TitleSearchQuery from './components/TitleSearchQuery.js';
import DescriptionSearch from './components/DescriptionSearch.js';
import Calories from './components/Calories.js'
import DietLabels from './components/DietLabels.js'
import Servings from './components/Servings.js'
import Preptimes from './components/Preptimes.js'

function App() {
  return (
      <div className="App">

          {/*Add a text input field for search by title*/}
          <TitleSearchQuery defaultText="Enter Search Criteria"
          dummy = 'dummy'/>
          {/*Add a button*/}
          <Button buttontext='Search' />

          {/*Add a text input field and button for search by description*/}
            
         <DescriptionSearch defaultInputText='Enter Search Criteria'
              defaultButtonText='Search' />


          {/*Add a drop down menu for calories*/}
          <Calories label='Calories: ' ranges={[10, 20, 30, 40, 50]} />

          {/*Add a drop down menu for servings*/}
          <Servings label='Servings: ' ranges={[10, 20, 30, 40, 50]} />

          {/*Add a drop down menu for preptime*/}
          <Preptimes label='Preptimes: ' ranges={[10, 20, 30, 40, 50]} />

          {/*Add a drop down menu for diet labels*/}
          <DietLabels label='DietLabels: ' ranges={[10, 20, 30, 40, 50]} />


    </div>
  );
}

export default App;
