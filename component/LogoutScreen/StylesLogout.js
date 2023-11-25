import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    container1: {
    },
    container2: {
        flexDirection : 'row',
        //justifyContent: 'space-between',
        gap:80,
        justifyContent:'center',
        paddingLeft:110,
    },
    container3: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:50,
    },
    img:{
        height:35,
        width:35,
        borderRadius:100,
        borderWidth:1,
        borderColor:'#FFFFFF'
    },
    txt1:{
        textAlign:'center',
        fontFamily: 'Roboto',
        fontWeight:'bold',
        fontSize: 20,  
        paddingTop:10,
    },
    img2:{
        height:140,
        width:140,
        borderRadius:100,
        borderWidth:1,
    },
    txt2:{
        textAlign:'center',
        fontFamily: 'Roboto',
        fontWeight:'bold',
        color: '#948D8D',
        fontSize: 16,  
    },
    container4: {
        flex:1,
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center',
    },
    container41: {
        flexDirection:'column',
    },
    txt3:{
        fontFamily: 'Roboto',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:16,
    },
    txt4:{
        fontFamily: 'Roboto',
        fontWeight:'bold',
        textAlign:'center',
        color: '#948D8D',
        fontSize:14,
    },
    container5: {
        flex:2,
        backgroundColor:'#7B7B7B',
        flexDirection:'column',
    },
    container51: {
        height:67,
        //alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingTop:290,
    },
    container52: {
        height:67,
        backgroundColor:'red',
        borderRadius:10,
    },
    txt5:{
        fontFamily: 'Roboto',
        fontWeight:'bold',
        textAlign:'center',
        color: '#FFFFFF',
        fontSize:20,
        paddingTop:22,
    }
});
export default Styles;