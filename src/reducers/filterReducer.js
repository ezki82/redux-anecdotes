const filterAtStart = ''

const reducer = (state = filterAtStart, action) => {
    switch (action.type) {
        case 'FILTER':
            state = action.data
            return state
        default:
            return state
    }
}

export const setFilter = (text) => {
    return {
        type: 'FILTER',
        data: text
    }
}

export default reducer