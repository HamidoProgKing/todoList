import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.itmes}>
        <View style={styles.leftitme}>
            <View style={styles.squre}></View>
            <Text style={styles.Title}>{props.text}</Text>
        </View>
            <View style={styles.circle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    itmes:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    leftitme: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    squre:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    Title:{
        maxWidth: '80%',
    },
    circle:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,

    },
   
});

export default Task;