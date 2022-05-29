import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import { useFonts } from 'expo-font';


import Text from './src/component/Text';
import { colors } from './src/theme/colors';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing } from './src/theme/spacing';
import { Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './src/component/Details/Details';
import { NavigationContainer } from '@react-navigation/native';





export default function App() {
  const Stack = createNativeStackNavigator();


  let [fontsloaded] = useFonts({
      "Antonio-Bold":require('./assets/Antonio-Bold.ttf'),
      "Antonio-Medium":require('./assets/Antonio-Medium.ttf'),

  });
  if(!fontsloaded){
    return <Text>loading</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.view1}>
     <View style={styles.imagediv1} >
     <Image source={require('./assets/D.png')}  style={styles.d} />
     </View>
      </View>
      <View style={styles.view2}>
                  <View style={styles.vectorMain}>
                  <Image source={require('./assets/Vector.png')}  style={styles.vector} />

                  </View>

                  <View style={styles.lastPart}>
                    <Text  style={styles.head}>Non-Contact{"\n"}Deliveries</Text>
                    <Text preset='' style={styles.desc}>When placing an order, select the option{"\n"}“Contactless 
                      delivery” and the courier will leave{"\n"}your order at the door</Text>
                      <Pressable style={styles.btn}><Text style={styles.btntext}>order now</Text></Pressable>
                      <Text preset='' style={{color:colors.lowopacitycolor,fontSize:19,fontWeight:'bold',opacity:0.7,marginTop:spacing[3]}}>Dismiss</Text>
                  </View>
      </View>
     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
   flexDirection:'column'

  },
  view1:{
    flex:0.9,
    backgroundColor:colors.greenblue
  },
  view2:{
    flex:1.1,
    backgroundColor:colors.lowwhite,
  
  },
  d:{
   position:'relative',
   
  
  },
  imagediv1:{
    backgroundColor:colors.lowblue,
    position:'absolute',
    padding:spacing[6],
    borderRadius:100,
    margin:spacing[7],
    marginTop:50
  }
 ,
 vectorMain:{
  marginLeft:'auto',
  marginRight:'auto',
  backgroundColor:colors.white,
  marginTop:spacing[9],
  padding:spacing[6],
  borderRadius:100

 },
lastPart:{
paddingTop:spacing[4],
alignItems:'center',


},
head:{
 textAlign:'center',
 fontSize:spacing[9],
 fontWeight:'bold',
color:colors.blackblue
 
 
},
desc:{
  textAlign:'center',
  lineHeight:spacing[6],
  fontSize:17,
  opacity:0.8,
  color:colors.lowopacitycolor
},
btn:{
  backgroundColor:colors.green,
  paddingHorizontal:140,
  paddingVertical:spacing[4],
  borderRadius:spacing[3],
  marginVertical:spacing[3]
 
},
btntext:{
  color:colors.white,
  fontSize:spacing[5],
  letterSpacing:2,
  textTransform:'uppercase'

}

});
