import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen03 = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);  // Trạng thái checkbox
    const [user, setUser] = useState('use1');
    const [email, setEmail] = useState('ngophuc');
    const [password, setPassword] = useState('a21313');

    const [info, setInfo] = useState({
        user: '',
        email: '',
        password: ''
    });

    return (
        <View >

            <View style={{ marginBottom: 20 }}>
                {/* <Icon
                    name='arrow-left'
                    size={24}
                    color="#000"
                    onPress={() => { navigation.navigate("Screen01") }}
                /> */}
                <Image source={require("../assets/Data/Image 20.png")} style={{ height: 200, width: '100%' }} />
            </View>


            <View style={{ padding: 20 }}>

                {/* Hình ảnh và văn bản chào mừng */}
                <View style={{ marginBottom: 40 }}>

                    <Text style={{ fontSize: 30, fontWeight: '600', marginVertical: 10 }}>
                        Welcome
                    </Text>

                </View>

                {/* Form */}
                <View>

                    {/* Input cho email */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                        <Icon name="envelope" size={20} color="gray" style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Enter your email"
                            style={{ flex: 1 }}
                            value={email}
                            onChangeText={setEmail} // Sử dụng onChangeText
                        />
                    </View>

                    {/* Input cho password */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                        <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry
                            style={{ flex: 1 }}
                            value={password}
                            onChangeText={setPassword} // Sử dụng onChangeText
                        />
                    </View>
                </View>



                {/* Nút Continue */}
                <View>
                    <TouchableOpacity
                        style={{ width: '94%', marginLeft: 16, marginTop: 11, backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 11, borderRadius: 20 }}
                        onPress={() => {
                            if (user && email && password) { // Kiểm tra điều kiện
                                setInfo({
                                    user: user,
                                    email: email,
                                    password: password
                                });
                                navigation.navigate("Screen04");
                                console.log(info)
                            } else {
                                alert('Please fill all fields and agree to the terms.');
                            }
                        }}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Screen03;
