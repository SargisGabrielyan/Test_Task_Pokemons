import React from 'react';
import Name from './pokemonsListItems/pokemonName';
import Avatar from './pokemonsListItems/pokemonAvatar';

class PokemonInfo extends React.Component{
    render(){
        return(
            this.props.categories.map(function(item, i){
                return <div className="pokemonInfo" key={i}>
                            <Avatar avatarImg={item.url} />
                            <Name name={item.name} />
                       </div>
            })
        )
    }
};

export default PokemonInfo;