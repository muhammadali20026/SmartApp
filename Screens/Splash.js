import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Image, View } from "react-native"

const Splash = () => {
    const navigation=useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('login');
        },3000)
    },[])
    return(
    <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../Image/smartdiet.png')} style={{ height:400,width:400 }} />
    </View>
    )
}
export default Splash