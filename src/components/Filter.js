import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    const style = {
        marginBottom: 10
    }

    const changeFilter = (event) => {
        const filter = event.target.value
        props.setFilter(filter)
    }

    return (
        <div style={style}>
            filter <input onChange={changeFilter}></input>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}
const mapDispatchToProps = {
    setFilter
}

const ConnectedFilter = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Filter)

export default ConnectedFilter