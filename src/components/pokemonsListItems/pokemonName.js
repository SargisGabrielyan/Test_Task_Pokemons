import React from 'react';


class Name extends React.Component{

    render(){
        return(
            <div className="name">
                <h3>{this.props.name}</h3>
            </div>
        )
    }
};

export default Name;