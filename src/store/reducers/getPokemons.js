export default function(state = [], action){
    switch (action.type){
        case'LOAD_POKEMONS':
            return action.payload;
        default:
            return state;
    }
}