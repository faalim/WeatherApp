import { useState, useEffect } from 'react';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList, StyleSheet,Text,TouchableOpacity,View } from 'react-native';

export default function SearchComponent({ navigation }){

const[searchQuery,setSearchQuery] = useState("")
const [cityList,setCityList] = useState([])

useEffect(()=>{
    if (searchQuery.length>2){
      const url = 'http://gd.geobytes.com/AutoCompleteCity?&q='+searchQuery

    fetch(url).then(response=>response.json()
    .then((data)=>{
        setCityList(data)
        console.log(data)
    })
    .catch(error=>console.log("json error")))
    .catch(error=>console.log("network error"))
    }
    else{
        setCityList([]);
    }
    }, [searchQuery]);

 return(
 <View style={styles.container}>
    <Searchbar
     value={searchQuery}
     placeholder="Search for a city"
     onChangeText={(query) =>{
         setSearchQuery(query)
        }}
    />

    <FlatList
        data = {cityList}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={()=> {navigation.navigate('Weather',{city:item} ) }}> 
          <Text style={styles.textStyle}>{item}</Text>
          </TouchableOpacity>

        )}>        
    </FlatList>
</View>
);
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:1,
        
    },
    textStyle:{
        fontSize:16,
        paddingTop:10,
        marginLeft: 15,
        color:'black',
      }
})