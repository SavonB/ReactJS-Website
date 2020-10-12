import React, { Component } from 'react';
import recipesJSON from './../data/recipes.json'
import './recipes.css'



class Recipes extends Component {
    constructor() {
        super();
        this.recipes = recipesJSON.recipes;
       
            }

    
    
    render() {
        
        return (
            <div>
                
                <p> {this.props.recipe_title}</p>
                <img src={this.props.img_url} />

                <label> Calories: {this.props.calories}</label>
                <label> Good For {this.props.dietLabel} diets </label>
         

            </div>
        )
    }
}
export default Recipes;
