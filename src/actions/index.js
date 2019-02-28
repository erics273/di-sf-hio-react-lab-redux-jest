export function updateCategories(categories){
    return {
        type: "UPDATE_CATEGORIES",
        categories: categories
    }
}

export function updateQuestion(question){
    return {
        type: "UPDATE_QUESTION",
        question: question
    }
}

export function updateScore(score){
    return {
        type: "UPDATE_SCORE",
        score: score
    }
}