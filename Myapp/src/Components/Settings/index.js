import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsCard = ({ isDarkMode, toggleSwitch }) => {

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      
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

        <Text style={[styles.header, isDarkMode && styles.darkText]}>Account Settings</Text>

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
  container: {
    padding: 20,
    backgroundColor: '#F7F7F7', 
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
    marginBottom: 20,
  },
  darkContainer: {
    backgroundColor: '#1C1C1E', 
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  section: {
    marginBottom: 50,
  },
  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10, 
    borderRadius: 10,
    marginVertical: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
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

export default SettingsCard;
