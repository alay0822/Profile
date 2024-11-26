import React from 'react';
import { Image, StyleSheet, View, Text, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Avatar = ({ isDarkMode, toggleSwitch }) => { 
  return (
      <View style={[styles.container, isDarkMode && styles.darkContainer]}>
    <View style={[styles.containers, isDarkMode && styles.darkContainer]}>
      <Image
        source={require('../../../assets/lumay.jpg')}
        style={styles.image}
      />
      <View style={styles.joinedContainer}>
        <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Alyza Shane Lumay</Text> 
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, isDarkMode && styles.darkText]}>2 years ago</Text>
        </View>
      </View>
      </View>
      
  <View style={styles.section}>
    <Text style={[styles.header, isDarkMode && styles.darkText]}>Settings</Text>
    
    <View style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
      <View style={styles.iconContainer}>
        <Icon name="moon" size={24} color="white" /> 
      </View>
      <Text style={[styles.item, isDarkMode && styles.darkText]}>Dark Mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81C784" }}
        thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
    
    <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
      <View style={styles.iconContainer}>
        <Icon name="notifications" size={24} color="white" /> 
      </View>
      <Text style={[styles.item, isDarkMode && styles.darkText]}>Notifications</Text>
      <Icon name="chevron-forward-outline" size={24} color="white" />  
    </TouchableOpacity>

    <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
      <View style={styles.iconContainer}>
        <Icon name="key" size={24} color="white" />  
      </View>
      <Text style={[styles.item, isDarkMode && styles.darkText]}>Privacy</Text>
      <Icon name="chevron-forward-outline" size={24} color="white" />  
    </TouchableOpacity>

    <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
      <View style={styles.iconContainer}>
        <Icon name="shield" size={24} color="white" />  
      </View>
      <Text style={[styles.item, isDarkMode && styles.darkText]}>Security</Text>
      <Icon name="chevron-forward-outline" size={24} color="white" /> 
    </TouchableOpacity>

  <Text style={[styles.headerText, isDarkMode && styles.darkText]}>Account Settings</Text>
  <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
    <View style={styles.iconContainer}>
      <Icon name="people" size={24} color="white" />  
    </View>
    <Text style={[styles.item, isDarkMode && styles.darkText]}>Account</Text>
    <Icon name="chevron-forward-outline" size={24} color="white" />  
  </TouchableOpacity>
</View>

  </View>

);
};

const styles = StyleSheet.create({
  containers: {
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
    bottom: 10,        
  },
  joinedContainer: {
    alignItems: 'center',  
    marginTop: -10, 
    
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
  section: {
    padding: 20,
    margin: 10,
    marginTop: -5, 
    left: 2,
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
  },

  darkContainer: {
    backgroundColor: '#1C1C1E', 
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },

  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10, 
    borderRadius: 10,
    marginVertical: 5,
    marginBottom: -10,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10, 
    color: '#000',
  },

  headerText: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10, 
    color: '#000',
  },
  
  darkText: {
    color: '#FFFFFF',
  },
  item: {
    fontSize: 16,
    color: '#263238',
    flex: 1,
    marginLeft: 8,
  },
  iconContainer: {
    backgroundColor: 'hotpink',  
    borderRadius: 30, 
    padding: 5,  
    alignItems: 'center',  
    justifyContent: 'center', 
    width: 40,  
    height: 40, 
  },
});

export default Avatar;
