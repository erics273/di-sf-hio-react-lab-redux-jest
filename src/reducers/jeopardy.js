const initialState = {
    questionData: {},
    categories: [],
    score: 0
}

const jeopardy = ( state = initialState, action )=>{
    switch( action.type ){
        case 'UPDATE_CATEGORIES':
        console.log(action)
            return Object.assign( {}, state, {
                categories: action.categories
            } );
        case 'UPDATE_QUESTION':
            return Object.assign( {}, state, {
                question: action.question
            } );
        case 'UPDATE_SCORE':
            return Object.assign( {}, state, {
                score: action.score,
                question: {}
            } );
        default:
            return state;
    }
}
export default jeopardy;