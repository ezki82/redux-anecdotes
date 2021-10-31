import anecdoteService from '../services/anecdotes'

const sortAnecdotes = (a) => {
  return a.sort((a, b) => b.votes - a.votes)
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW ANECDOTE':
      return sortAnecdotes([...state, action.data])
    case 'VOTE':
      const votedAnecdote = action.data
      return sortAnecdotes(state.map(anecdote =>
        anecdote.id !== votedAnecdote.id ? anecdote : votedAnecdote))
    case 'INIT NOTES':
      return sortAnecdotes(action.data)
    default:
      return sortAnecdotes(state)
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.vote(anecdote)
     dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT NOTES',
      data: anecdotes
    })
  }
}

export default reducer