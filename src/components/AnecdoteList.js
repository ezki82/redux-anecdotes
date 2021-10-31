import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setInfoNotification } from "../reducers/notificationReducer";

const NewAnecdote = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterText = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        voteNotify(anecdote.content)
    }

    const voteNotify = (text) => {
        dispatch(setInfoNotification(`you voted '${text}'`, 5))
    }

    const filteredList = filterText.length === 0 ? anecdotes : anecdotes.filter(a => a.content.toLowerCase().includes(filterText.toLowerCase()))

    return (
        <div>
            {filteredList.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NewAnecdote