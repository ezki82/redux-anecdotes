const notificationAtStart = ''

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

export const setInfoNotification = (text) => {
    return {
        type: 'INFO',
        data: text
    }
}

export const setResetNotification = () => {
    return {
        type: 'RESET'
    }
}

export default reducer