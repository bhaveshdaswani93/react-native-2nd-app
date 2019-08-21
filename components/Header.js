import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        alignItems:'center',
        justifyContent:'center',
        height:90,
        backgroundColor:Colors.primary,
        paddingTop:36
        // width:'100%'  
    },
    headerTitle:{
        fontSize:18,
        color:'black'
    }
    
})

export default Header;