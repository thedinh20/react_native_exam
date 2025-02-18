import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';


export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    // Biểu thức Regex kiểm tra số điện thoại Việt Nam
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!, Vui lòng nhập lại');
    }
  };

  const getErrorMessageStyle = () => {
    return errorMessage.includes('không hợp lệ')
      ? { color: 'red' }
      : { color: 'green' };
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{
          fontSize: 40, 
          fontWeight: "600",}}>Đăng nhập</Text>
      </View>
      <View styles={styles.body}>
        <Text style={styles.text}>Nhập số điện thoại</Text>
        <Text style={styles.text}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OnHousing Pro</Text>
        <TextInput style={styles.text}
          placeholder="Nhập số điện thoại của bạn "
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        {/* {errorMessage ? <Text>{errorMessage} ? </Text> : null} */}
        {/* <Button style={styles.text} title=' Tiếp tục'/> */}
        {errorMessage && (
          <Text style={getErrorMessageStyle()}>{errorMessage}</Text>
        )}
        
        <Button 
        title="Tiếp Tục"
        onPress={() => validatePhoneNumber(phoneNumber)}
        />
        
      </View> 
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
  header: {
    backgroundColor: '#fff',
    display: 'flex',
    top: 20,
    paddingTop: 20,
    marginBottom: 80,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    
  },
  body: {
    backgroundColor: '#ccc',
    
  },
  
  text: {
    fontSize: 20,
    margin:10,
  },
  
});
