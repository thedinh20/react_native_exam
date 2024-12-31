import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{
          fontSize: 20,
          fontWeight: "600",
        }}>Đăng nhập</Text>
        
      </View>
      <View styles={styles.body}>
        <Text style={{paddingBottom: 10, }}>Nhập số điện thoại</Text>
        
        <Text>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OnHousing Pro</Text>
        <TextInput
          placeholder="Nhập số điện thoại của bạn "
          keyboardType="numeric"
        />
        <Button title=' Tiếp tục'/>
      </View> 
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fff',
    display: 'flex',
    top: 0,
    paddingTop: 10,
    marginBottom: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    
  },
  body: {
    backgroundColor: '#ccc',
  }
});
