import React, { Component } from 'react';
import logo from './logo.svg';
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
            title_query: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._search_by_title = this._search_by_title.bind(this); 
    }

/* reassign titlequery on input change */
    handleChange() {
        //this.setState({ title_query: document.getElementsByTagName("input")[0].value });
    }

    /* turn all search buttons invis and load images and such from JSON based on input query*/
    handleClick() {
        this.setState({
            search: true,
            display_state: "none",
            input_display_state: "none",
            recipeitem_display: "inline",
            title_query: document.getElementsByTagName("input")[0].value
        });
    }

    _search_by_title() {
        let r = 0;
        for (let i = 0; i < recipesJSON.recipes.length; i++) {
            if (recipesJSON.recipes[i].title.toUpperCase().includes(this.state.title_query.toUpperCase())) {
                console.log(true)
                r = recipesJSON.recipes[i];
                return r;
            } else {
                console.log(this.state.title_query.toUpperCase())
                console.log(recipesJSON.recipes[i].title.toUpperCase())

                r= recipesJSON.recipes[0];
            }
        }
        return r;
    }

    _search_by_description() {
       
    }

    _search_by_calories() {

    }
    render() {
        let q = recipesJSON.recipes[0];
        q = this._search_by_title();
        console.log(q);
        return (
            <div className="App">

                <input onChange={this.handleChange} id='title_input' type='text' />
                <button onClick={this.handleClick}>Search by Title</button>
                <button onClick={this.handleClick}>Search by Description</button>
                <div>
                <label>Search by Calories:  </label>
                <select name='calories'>
                    
                    <option>10</option>
                    </select>
                    </div>
                <Recipes recipe_to_display={q}  title_query={ this.state.title_query}buttondisplay={this.state.display_state} inputdisplay={this.state.input_display_state}
                    recipeitem_display={this.state.recipeitem_display} />

            </div>
        );
    }
}
export default App;
