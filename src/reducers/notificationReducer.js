const notificationAtStart = ''
let timeoutId = null

const reducer = (state = notificationAtStart, action) => {
    switch (action.type) {
        case 'INFO':
            state = action.data
            return state
        case 'RESET':
            state = ''
            return state
        default:
            return state
    }
}

export const setInfoNotification = (text, time) => {
    return async dispatch => {
        dispatch({
            type: 'INFO',
            data: text
        })
        // Clear previous timeout if present
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            timeoutId = null
            dispatch(setResetNotification())
        }, time * 1000)
    }
}

const setResetNotification = () => {
    return {
        type: 'RESET'
    }
}

export default reducer