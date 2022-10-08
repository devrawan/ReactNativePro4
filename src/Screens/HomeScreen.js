import React from 'react';
import {
  ImageBackground,
    Text,
    Pressable,
    View,
    FlatList,
    Keyboard,
    SafeAreaView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    useWindowDimensions,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    Image
  } from 'react-native';
  import {images} from './../../constants/index'


const Data =[
    {key: 0, title: 'التعريف بقطاع المقاولات',uri :images.not},
    {key: 1, title: 'متطلبات تاسيس منشات مقاولات ',uri :images.bank},
    {key: 2, title: ' تراخيص مزاولة نشاط المقاولات  ',uri :images.business},
    {key: 3, title: ' قواعد واجرات اساسية بشان التعاقد ',uri :images.construction},
    {key: 4, title: 'الجهات العليا للمقاولات',uri :images.contract},
    {key: 5, title: 'منصات الكترونبة في خدمة المقاول ',uri :images.filee},
    {key: 6, title: 'خطة عمل المشروعات  المالية   ',uri :images.business},
    {key: 7, title: 'اليات  تسليم مشروعات المقاولات ',uri :images.bank},
    {key: 8, title: 'انظمة عقود المقاولات  ',uri :images.group3},

    {key: 9, title: '  علاقة المقاول مع الزبون',uri :images.not},
    {key: 10, title: '   لجنة المقاولات  ',uri :images.social},
    {key: 11, title: '   لجنة الانجازات   ',uri :images.contract},
    {key: 12, title: 'انظمة عقود المقاولات  ',uri :images.construction},
    {key: 13, title: 'الجهات العليا للمقاولات',uri :images.not},
]

const Hed =()=>{
  return (
    <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',marginTop:10,paddingEnd:10,paddingVertical:5}}>
    <Text style={{fontSize:20,color:'black',fontFamily:'Cairo-Bold'}}> الفهرس </Text>
</View>
  )
}
const renderItem = ({ item }) => (
    <View key={item.key} style={{
        marginHorizontal:8,marginVertical:11,
        backgroundColor:"white",
        height:150,
        width:'45%',justifyContent:'center',alignItems:'center',paddingHorizontal:10,paddingVertical:20,borderRadius:12,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 7}}>
          <View style={{padding:10,backgroundColor:'white',borderWidth:1,borderColor:'#CED4E3',width:60,height:60,justifyContent:'center',alignItems:'center',borderRadius:50}}> 
              <Image source={item.uri} style={{backgroundColor:'white'}}/>
         </View>
        <Text style={{textAlign:'center',fontSize:16,marginTop:10}}>{item.title}</Text>
    
         </View>
  ); 
  
const HomeScreen  = ({navigation}) => {
    const {height, width} = useWindowDimensions();
        return (
            <View style={[styles.container,{ 
              // backgroundColor:'black', 
              width:width,height:height}]}>

        <ImageBackground source={images.image} style={{width:width,height:140,justifyContent:"flex-end",alignItems:'center',paddingBottom:30}}>
        <Text style={{fontSize:25 ,color:'white',alignSelf:'center',fontFamily:'Cairo-Bold'}}>المقاولات  </Text>
        </ImageBackground>

            
        <FlatList
        style={{  height:'90%',   width: "100%",    paddingBottom: 10,}}
        numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                    ListHeaderComponent={<Hed/>}
                />

     




             </View>
        )}

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#E8E8E8",
      marginTop: 0,
    //   justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:20,
      // paddingBottom:30
    
    }})