import React,{Component} from 'react';
import Data from '../data/recipe.json'




class Recipes extends Component{
  render() {
   return(
      <div>
        <h1>Handy Dandy Recipes</h1>
        {Data.map((recipesdata,index)=>{
          return <div>
          <h1>{recipesdata.title}</h1>
          <p>{recipesdata.description}</p>
          </div>
        })}
      </div>
   )
  }
}

         
        
      
   
        

      



            
           

       

   


export default Recipes;
