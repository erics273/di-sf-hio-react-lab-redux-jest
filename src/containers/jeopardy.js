import { connect } from "react-redux";
import Jeopardy from "../components/jeopardy/jeopardy";
import { updateCategories, updateQuestion, updateScore } from "../actions";

const mapStateToProps = state => {
    return { 
        questionData: state.jeopardy.question,
        categories: state.jeopardy.categories,
        score: state.jeopardy.score
    };
};
const mapDispatchToProps = dispatch => {
    return { 
        updateCategories: (data) => dispatch( updateCategories(data) ),
        updateQuestion: (data) => dispatch( updateQuestion(data) ),
        updateScore: (data) => dispatch( updateScore(data) ),
    }
};

const JeopardyContainer = connect( mapStateToProps, mapDispatchToProps )( Jeopardy );
export default JeopardyContainer;