import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
    const style = {
        marginBottom: 10
    }

    const dispatch = useDispatch()

    const changeFilter = (event) => {
        const filter = event.target.value
        console.log(filter)
        dispatch(setFilter(filter))
    }

    return (
        <div style={style}>
            filter <input onChange={changeFilter}></input>
        </div>
    )
}

export default Filter