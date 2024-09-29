import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Text, View } from 'react-native'


const Screen01 = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1 }}
        >
            <View
                style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 30 }}
            >
                <Image source={require('../assets/Data/Container 17.png')}

                    height={100}
                ></Image>
            </View>

            <View>
                <Text
                    style={{ fontSize: 30, fontWeight: '600', marginLeft: 45 }}
                >
                    Boost Productivity
                </Text>
                <Text
                    style={{ fontSize: 15, marginLeft: 45, color: 'gray' }}
                >
                    Simplify tasks,Boost Productivity
                </Text>
            </View>

            <View>
                <TouchableOpacity
                    style={{ width: '94%', marginLeft: 16, marginTop: 11, backgroundColor: 'rgb(34 200 247)', paddingVertical: 11, borderRadius: 20 }}
                    onPress={() => navigation.navigate("Screen02")}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>

            <View>

                <Text style={{ color: 'black', textAlign: 'center', marginTop: 20 }}>
                    Login
                </Text>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>

                <View style={{ width: 17, height: 17, borderRadius: 50, borderWidth: 1, borderColor: "rgb(34 200 247)" }}></View>
                <View style={{ width: 17, height: 17, borderRadius: 50, borderWidth: 1, borderColor: "rgb(34 200 247)", marginHorizontal: 5, backgroundColor: 'rgb(34 200 247)' }}></View>
                <View style={{ width: 17, height: 17, borderRadius: 50, borderWidth: 1, borderColor: "rgb(34 200 247)" }}></View>



            </View>
        </View>
    )
}

export default Screen01
