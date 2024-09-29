import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen02 = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);  // Trạng thái checkbox
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [info, setInfo] = useState({
        user: '',
        email: '',
        password: ''
    });

    return (
        <View style={{ padding: 20 }}>
            {/* Biểu tượng mũi tên */}
            <View style={{ marginBottom: 20 }}>
                <Icon
                    name='arrow-left'
                    size={24}
                    color="#000"
                    onPress={() => { navigation.navigate("Screen01") }}
                />
            </View>

            {/* Hình ảnh và văn bản chào mừng */}
            <View style={{ alignItems: 'center', marginBottom: 40 }}>
                <Image
                    source={require('../assets/Data/Image 19.png')}
                    style={{ width: 100, height: 100 }}
                />
                <Text style={{ fontSize: 30, fontWeight: '600', marginVertical: 10 }}>
                    Nice to see you
                </Text>
                <Text style={{ fontSize: 15, color: 'gray', textAlign: 'center' }}>
                    Create your account
                </Text>
            </View>

            {/* Form */}
            <View>
                {/* Input cho username với icon */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                    <Icon name="user" size={20} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Enter your username"
                        style={{ flex: 1 }}
                        value={user}
                        onChangeText={setUser} // Sử dụng onChangeText
                    />
                </View>

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

            {/* Checkbox và điều khoản */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                <Checkbox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={{ marginLeft: 10 }}>
                    I agree with <Text style={{ color: '#ED6263', textDecorationLine: 'underline' }}>Terms & Conditions</Text>
                </Text>
            </View>

            {/* Nút Continue */}
            <View>
                <TouchableOpacity
                    style={{ width: '94%', marginLeft: 16, marginTop: 11, backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 11, borderRadius: 20 }}
                    onPress={() => {
                        if (user && email && password && isChecked) { // Kiểm tra điều kiện
                            setInfo({
                                user: user,
                                email: email,
                                password: password
                            });
                            navigation.navigate("Screen03");
                            console.log(info)
                        } else {
                            alert('Please fill all fields and agree to the terms.');
                        }
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen02;
