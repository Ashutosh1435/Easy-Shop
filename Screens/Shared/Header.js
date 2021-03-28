import React from 'react'
import {
    StyleSheet,
    Image,
    SafeAreaView,
} from 'react-native';

export default function Header() {
    return (
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../../assets/Logo.png")}
                resizeMode="contain"
                style={{ height: 40 }}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header:{
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        // marginTop: 120
    }
})