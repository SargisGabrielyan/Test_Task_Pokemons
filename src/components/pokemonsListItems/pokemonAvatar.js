import React from 'react';


class Avatar extends React.Component{

    render(){
        return(
            <div className="avatar">
                <img src={'https://pokeapi.co/media/img/' + this.props.avatarImg.slice(34, -1) + '.png'} />
            </div>
        )
    }
};

export default Avatar;

