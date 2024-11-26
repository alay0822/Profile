import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

const Logout = () => {
    const router = useRouter();

    useEffect(() => {
        console.log('Logging out...');
        router.replace('/'); 
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Logging out...</Text>
        </View>
    );
};

export default Logout;