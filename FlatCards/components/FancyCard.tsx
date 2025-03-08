import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.elevated]}>

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
    card:{

    },
    elevated:{

    }
})