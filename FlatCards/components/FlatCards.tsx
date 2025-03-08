import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

function FlatCards() {
  return (
    <View>
      <Text style = { styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
            <Text style={styles.containerText}>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
            <Text style={styles.containerText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
            <Text style={styles.containerText}>Green</Text>
        </View>
        <View style={[styles.card, styles.card4]}>
            <Text style={styles.containerText}>Yellow</Text>
        </View>
      </View>
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
        flex:1,
        flexDirection:"row",
        padding:8,
    },
    containerText:{
        color: "white",
    },
    card:{
        flex:1,
        borderRadius:5,
        width:100,
        height:100,
        justifyContent: "center",
        alignItems: "center",
        margin:8,
    },
    card1:{
        
        backgroundColor:"red",

    },
    card2:{
        backgroundColor:"blue",

    },
    card3:{
        backgroundColor:"green",

    },
    card4:{
        backgroundColor:"yellow",

    },
})

export default FlatCards