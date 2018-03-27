import React from 'react';
import {connect} from 'react-redux';
import Category from './categoryFilter';
import store from '../store/store'
import PokemonInfo from './pokemonList';

class App extends React.Component{
    constructor(props) {
        super(props);

        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
                .then((r) => r.json())
                .then((r) => store.dispatch({type: 'LOAD_POKEMONS', payload: r.results} ));
    }

    render() {
        return (
            <div>
                <Category categories={this.props.pokemonList}/>
                <div className="content">
                    <PokemonInfo categories = {this.props.pokemonList} />
                </div>
            </div>
        )
    }
};

export default connect(
    (state) => {return {pokemonList: state.pokemonList};}
)(App);

