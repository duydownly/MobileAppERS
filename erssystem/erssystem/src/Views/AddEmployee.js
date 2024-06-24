import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddEmployee = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  const handleAddEmployee = () => {
    // Add logic to handle adding an employee here
    console.log('Full Name:', fullName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('ID Number:', idNumber);
    console.log('Date of Birth:', dob);
    console.log('Address:', address);
    navigation.navigate('PayrollCalculationMethod');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddEmployee}>
        <Text style={styles.addButtonText}>Tiếp tục</Text>
      </TouchableOpacity>
      <Text ></Text>
      <Text ></Text>

      <Text style={styles.label}>Tên nhân viên</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        keyboardType="default"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Số điện thoại</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Mật khẩu</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Text style={styles.label}>Số CMND</Text>
      <TextInput
        style={styles.input}
        value={idNumber}
        onChangeText={setIdNumber}
        keyboardType="default"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Ngày sinh</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        keyboardType="default"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Địa chỉ</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        keyboardType="default"
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  addButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    borderRadius: 4,
    zIndex: 1, // Ensure the button is on top of other elements
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default AddEmployee;
