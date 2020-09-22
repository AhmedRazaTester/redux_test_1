import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useSelector } from 'react-redux';
import * as types from '../Redux/ActionTypes'
import { connect } from 'react-redux';

function Setting(props) {
    const score = useSelector(state => state.score.score);
    return (
        <View>
            <Button title="Plus" onPress={() => { props.increment() }} />
            <Text style={{ textAlign: "center" }}>{score}</Text>
            <Button title="Minus" onPress={() => { props.decrement() }} />
        </View>
    )
}


// const mapStateToProps = state => ({
//     reducer1: state.reducer1
// });

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: types.Plus }),
        decrement: () => dispatch({ type: types.Minus }),

    }
}

export default connect(null, mapDispatchToProps)(Setting);
// export default Setting;

const styles = StyleSheet.create({})
