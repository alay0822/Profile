import React from 'react';
import { SafeAreaView, View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Avatar from '../Components/Avatar'; 
import SettingsCardComponent from '../Components/SettingsCardComponent'; 

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Avatar />
      <View style={styles.cardContainer}>
        <SettingsCardComponent />
      </View>

      {/* Custom TouchableOpacity for the Log Out button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Logging out...')}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  mainContent: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardContainer: {
    marginTop: 20,
    width: '100%',
    maxHeight: 450
  },
  button: {
    backgroundColor: 'hotpink', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
