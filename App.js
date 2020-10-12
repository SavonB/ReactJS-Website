import React, { Component } from 'react';
import './App.css';
import Recipes from './components/recipes'
import recipesJSON from './data/recipes.json'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        /*set necessary states of this and all children. States will be passed to children as props*/
            search: false,
            display_state: "inline",
            input_display_state: "inline",
            recipeitem_display: "none",
            title_query: '',
            dietLabel: "",
            curr_recipes: recipesJSON.recipes
        };
        this._handleClick = this._handleClick.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleChangeSelect = this._handleChangeSelect.bind(this);
        this._handleClickDiet = this._handleClickDiet.bind(this);

        this._search_by_title = this._search_by_title.bind(this);
        this._search_by_diet = this._search_by_diet.bind(this); 

    }


    _handleChange() {
        this.setState({ title_query: document.getElementsByTagName("input")[0].value });
    }
    /* handles the click for search by title,
     it updates this.curr_recipes to only be those returned by the query*/
    _handleClick() {
       
        console.log(this.state.title_query);
        console.log('clicked');
        console.log(this.state.curr_recipes);
        let r = this._search_by_title();
        console.log(r);
        this.setState({curr_recipes: r});
    }

    /*must return array*/
    _search_by_title() {
        let r = [];
        for (let i = 0; i < recipesJSON.recipes.length; i++) {
            if (recipesJSON.recipes[i].title.toUpperCase().startsWith(this.state.title_query.toUpperCase())) {
                console.log(true)
                r.push(recipesJSON.recipes[i]);
                
            } else {
                console.log(this.state.title_query.toUpperCase())
                console.log(recipesJSON.recipes[i].title.toUpperCase())

            }
        }
        return [r].flat();
    }

    /*must return array*/
    _search_by_diet() {
        //get the select
        let diet = document.getElementById("select").value;
        let r = [];
        for (let i = 0; i < recipesJSON.recipes.length; i++) {
            if (recipesJSON.recipes[i].dietLabel.toUpperCase().startsWith(this.state.dietLabel.toUpperCase())) {
                console.log(true)
                r.push(recipesJSON.recipes[i]);

            }
        }
        return [r].flat();
    }

    _handleChangeSelect() {
        this.setState({ dietLabel: document.getElementById("select").value })
    }

    _handleClickDiet() {

        console.log(this.state.title_query);
        console.log('clicked');
        console.log(this.state.curr_recipes);
        let r = this._search_by_diet();
        console.log(r);
        this.setState({ curr_recipes: r });
    }

    render() {
        
        return (
            <div className="App">
                <h1>Handy Dandy Recipes!</h1>
                <h2>Easy, Delicious, Satisfying meals on demand</h2>

                <input onChange={this._handleChange} type="text" />
                <button onClick={this._handleClick}>search</button>
                <select id="select" onChange={this._handleChangeSelect}>
                    <option value="Low-Carb">Low-Carb</option>
                    <option value="Medium-Carb">Med-Carb</option>
                    <option value="High-Carb">High-Carb</option>
                    <option value="Low-Sodium">Low-Sodium</option>
                    <option value="Low-Fat">Low-Fat</option>
                    <option value="Balanced">Balanced</option>
                    <option value="Vegetarian">Vegetarian</option>
                </select>
                <button onClick={this._handleClickDiet}>search by dietLabel</button>

                {this.state.curr_recipes.map(recipe => <Recipes recipe_title={recipe.title} recipe_description={recipe.description} img_url={recipe.image} recipe_rating={recipe.rating} dietLabel={recipe.dietLabel} calories={recipe.calories}/>)}

            </div>
        );
    }
}
export default App;
