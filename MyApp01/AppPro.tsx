import React from "react";

import {
    Text,
    View,
    SafeAreaView,
    useColorScheme,
    StyleSheet
} from "react-native"

function AppPro(){
    const isDarkmode = useColorScheme() === "dark"
    return(
        <SafeAreaView style = {styles.container}>
            <View >
                <Text style = {isDarkmode? styles.darkMode:styles.whiteMode}>
                    Hello Aryan
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    darkMode:{
        color: "#FFFF"
    },
    whiteMode:{
        color: "#000000"
    }
})
export default AppPro