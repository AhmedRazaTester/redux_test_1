import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useSelector } from 'react-redux';
import * as types from '../Redux/ActionTypes'
import { connect } from 'react-redux';

function Setting(props) {
    const score = useSelector(state => state.score.score);


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        props.changecolor(color)
    }


    return (
        <View>
            <Button title="Plus" onPress={() => { props.increment() }} />
            <Text style={{ textAlign: "center", fontSize: score, }}>{score}</Text>
            <Button title="Minus" onPress={() => { props.decrement() }} />
            <View style={{ marginTop: 20 }}>
                <Button title="Change Text Color" onPress={() => { getRandomColor() }} />

            </View>
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
        changecolor: (textcolor) => dispatch({ type: types.ChangeTextColor, payLoad: textcolor }),

    }
}

export default connect(null, mapDispatchToProps)(Setting);
// export default Setting;

const styles = StyleSheet.create({})
