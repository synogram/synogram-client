import { render } from 'enzyme';
import React from 'react';
import styles from "./GraphSelection.module.scss"
import { useSelector } from 'react-redux'
const GraphSelection = () => {
    const definition = useSelector(state => state.dictionary.definition)
    return (
        <div className = {styles.container}>
            <p className = {styles.description}>{definition}</p>
            <button>Tree Graph</button>
        </div>
    )
}

export default GraphSelection;
