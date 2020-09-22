import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import * as types from '../Redux/ActionTypes'
import { connect } from 'react-redux';
import { useNavigation, StackActions } from '@react-navigation/native';
function Login(props) {

    const [UserName, setUserName] = useState('')
    const [password, setpassword] = useState('')
    const navigation = useNavigation();


    function onLogin() {

        props.S_UserName(UserName)
        // navigation.navigate('Drawer')
        navigation.dispatch(
            StackActions.replace('Drawer')
        );
    }

    return (
        <View style={{ justifyContent: "center", flex: 1, paddingHorizontal: 10 }}>
            <Text style={{ color: "#0a7", fontSize: 16 }}>UserName</Text>
            <TextInput placeholder="Please Enter UserName" underlineColorAndroid="#0a7b"
                value={UserName} onChangeText={(text) => { setUserName(text) }} />
            <Text style={{ color: "#0a7", fontSize: 16 }}>Password</Text>
            <TextInput placeholder="Please Enter password" underlineColorAndroid="#0a7b"
                secureTextEntry={true} value={password} value={password} onChangeText={(text) => { setpassword(text) }} />
            <TouchableOpacity
                onPress={() => { onLogin() }}
                style={{ backgroundColor: "#0a7", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 5 }}
            >
                <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        S_UserName: (username) => dispatch({ type: types.SaveUserName, payLoad: username }),
        S_Pawword: (password) => dispatch({ type: types.SavePassword, payLoad: password }),

    }
}

export default connect(null, mapDispatchToProps)(Login);

