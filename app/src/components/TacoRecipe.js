import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchTaco } from '../actions/tacoAction'

const TacoRecipe = (props) => {
    useEffect(() => {
        props.fetchTaco();
    }, []);

    return (
        <div>
            <h1>Tacos!</h1>
            <div>
                <h2>{props.tacoData.name}</h2>
                <a href={props.tacoData.url} >{props.tacoData.url}</a>
            </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tacoData: state.tacoData,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchTaco })(TacoRecipe);