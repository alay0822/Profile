import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const Avatar = ({ isDarkMode }) => { 
  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Image
        source={require('../../assets/lumay.jpg')}
        style={styles.image}
      />
      <View style={styles.joinedContainer}>
        <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Alyza Shane Lumay</Text> 
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, isDarkMode && styles.darkText]}>2 years ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center',  
    width: '100%',
    padding: 10,  
  },
 
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderColor: '#E0E0E0',  
    borderWidth: 2,         
  },
  joinedContainer: {
    alignItems: 'center',  
    marginTop: 10, 
    
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#263238',  
  },
  darkText: {
    color: '#E0E0E0', 
  },
  statusContainer: {
    flexDirection: 'row',
    marginTop: 5, 
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold' 
  },
});

export default Avatar;
