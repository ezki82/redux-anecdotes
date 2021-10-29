import anecdoteService from '../services/anecdotes'

const sortAnecdotes = (a) => {
  return a.sort((a, b) => b.votes - a.votes)
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW ANECDOTE':
      return sortAnecdotes([...state, action.data])      
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(n => n.id === id)
      const voted = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return sortAnecdotes(state.map(anecdote =>
        anecdote.id !== id ? anecdote : voted))
    case 'INIT NOTES':
      return action.data
    default:
      return sortAnecdotes(state)
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
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