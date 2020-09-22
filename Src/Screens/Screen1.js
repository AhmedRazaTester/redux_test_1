import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


const Screen1 = (props) => {
    // console.log('=== PROPS', props.reducer1);
    const score = useSelector(state => state.score.score);
    // console.log('=== MY STATE', myState);
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: score }}>{score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Screen1;
// const mapStateToProps = state => ({
//     reducer1: state.reducer1
// });

// export default connect(null, null)(Screen1);