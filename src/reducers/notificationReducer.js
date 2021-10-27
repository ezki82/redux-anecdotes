const notificationAtStart = 'testiviesti'

const reducer = (state = notificationAtStart, action) => {
    switch (action.type) {
        case 'INFO':
            state = action.data
            return state
        default:
            return state
    }
}

export const setInfoNotification = (text) => {
    return {
        type: 'INFO',
        data: {text}
    }
}

export default reducer