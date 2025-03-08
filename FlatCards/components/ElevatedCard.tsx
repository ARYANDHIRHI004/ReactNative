import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style = {[styles.card, styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>me</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>to</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>More...</Text>
        </View>
        <View style = {[styles.card, styles.elevated]}>
            <Text>😀</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color: "#FFFF",
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal:8
    },

    container:{
        padding:8,
    },

    elevated:{
        elevation:4,
        shadowOffset:{
            width:1,
            height:3,

        },
        shadowColor:"red",
        shadowOpacity: 0.9
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        backgroundColor: "#CAD5E2",
        borderRadius:4,
        margin:8,
    }
})