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
                <p> {this.props.recipe_to_display.title}</p>
                
                <img src={this.props.recipe_to_display.image} style={{display: this.props.recipeitem_display}}/>
                <p>Calories: {this.props.recipe_to_display.calories} </p>
                <p>Rating: {this.props.recipe_to_display.rating} </p>
                <p> Extremely Good for {this.props.recipe_to_display.dietLabel} Diets</p>
            </div>
        )
    }
}
export default Recipes;
