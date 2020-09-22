import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function Login() {

    const [UserName, setUserName] = useState('')
    const [password, setpassword] = useState('')


    function onLogin() {

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

const styles = StyleSheet.create({})
