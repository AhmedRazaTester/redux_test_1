import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


export default function Screen3() {

    const score = useSelector(state => state.score.score);

    return (
        <View>
            <Text>{score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
