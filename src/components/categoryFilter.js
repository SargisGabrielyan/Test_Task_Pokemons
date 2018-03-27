import React from 'react';


class Category extends React.Component{
    render(){
        return(
            <select>
                {this.props.categories.map(function(item, i){
                    return <option value = {item.name} key={i}> {item.name}</option>
            })}

            </select>
        )
    }
}

export default Category;