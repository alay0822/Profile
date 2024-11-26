import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const handleForgotPassword = () => {
    
    console.log('Sending password reset email to:', email);

    router.back('index');
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
      <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back('index')}> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    borderRadius: 5,
  },
    button: {
      backgroundColor: 'hotpink',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      width: '50%',
      marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default ForgotPassword;