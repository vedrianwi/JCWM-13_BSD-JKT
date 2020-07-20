export const plus = (increment) => {
    return {
        type : 'PLUS',
        payload : increment
    }
}

export const minus = (decrement) => {
    return {
        type : 'MINUS',
        payload : decrement
    }
}