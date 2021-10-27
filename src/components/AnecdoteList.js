import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setInfoNotification, setResetNotification } from "../reducers/notificationReducer";

const NewAnecdote = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote.id))
        voteNotify(anecdote.content)
    }

    const voteNotify = (text) => {
        dispatch(setInfoNotification(`you voted '${text}'`))
        setTimeout(() => {
            dispatch(setResetNotification())
        }, 5000);
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
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