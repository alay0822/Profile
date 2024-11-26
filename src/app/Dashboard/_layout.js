import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen 
                    name="(tabs)" 
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home', 
                        headerStyle: {
                            backgroundColor: 'white', 
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Drawer.Screen 
                    name="logout" 
                    options={{
                        drawerLabel: 'Logout',
                        title: 'Logout',  
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
export default DrawerLayout;
