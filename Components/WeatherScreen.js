
import { View,StyleSheet,Text,Image } from "react-native";



export default function WeatherScreen({temp, icon,feelsLike,weatherDes,time,cityWeather}) {

    const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return(
   
        <View style={styles.container} > 

         <View style={styles.topView}>
            <Text style={styles.otherTextStyle}>{cityWeather}</Text> 
            </View>

            <View style={styles.topView}>
            <Text style={styles.otherTextStyle}>{time}</Text> 
            </View>

          <View style={styles.nestedView}>
            <Text style={styles.textStyle}>{temp.toFixed(0)}&#176;C</Text> 
            <Image style={styles.imageStyle} source={{ uri: url }}></Image>
            </View>

        <View style={styles.bottomView}>
        <Text style={styles.otherTextStyle}>Feels Like {feelsLike.toFixed(0)}&#176;</Text> 
        <Text style={styles.otherTextStyle}>{weatherDes}</Text> 

        </View>


        </View>
      
    )
}

const styles= StyleSheet.create({
    container:{  
    flex:1,
    justifyContent:'center',
    marginBottom:100,

    },
    nestedView:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:"center",
        marginLeft:55,
    },
    topView:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:"center",
        paddingTop:15,
    },
    bottomView:{
        flexDirection: 'row',
        alignItems: "stretch",
        justifyContent:'space-evenly',
        
    },
    textStyle: {
        paddingTop:45,
        fontSize: 40,
        
    },
    imageStyle:{
        
        width: 150,
        height: 150
    }
,otherTextStyle:
{
    fontSize: 20,

}
})


