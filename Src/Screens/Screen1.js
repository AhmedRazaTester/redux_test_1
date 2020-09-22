import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';


const Screen1 = (props) => {
    // console.log('=== PROPS', props.reducer1);
    const score = useSelector(state => state.score.score);
    const textcolor = useSelector(state => state.score.textcolor);
    const username = useSelector(state => state.loginDate.Username);
    // console.log('=== MY STATE', myState);
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontSize: score, color: textcolor }}>hi {username}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})

export default Screen1;
// const mapStateToProps = state => ({
//     reducer1: state.reducer1
// });

// export default connect(null, null)(Screen1);