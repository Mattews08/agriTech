
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import { Home } from '../page/Home';
import { Login } from '../page/Login';
import { Guide } from '../page/Businnes/Guide';
import { Details } from '../page/Businnes/Details/Details';
import { Fiscal } from '../page/Businnes/Fiscal';
import { DetailsFiscal } from '../page/Businnes/Details/DetailsFiscal';
import { Certification } from '../page/Businnes/Details/Certification';
import { Parceiros } from '../page/Businnes/Parceiros';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Info } from '../page/Info';
import { DetailsInfor } from '../page/Businnes/Details/DetailsInfor';
import { Metas } from '../page/Businnes/Metas';
import { Calendar } from '../page/Businnes/Agendar';
import { Globe } from '../page/Comunidade';
import { User } from '../page/User';

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Guide" component={Guide} options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}
            />
            <Stack.Screen name="Fiscal" component={Fiscal} options={{ headerShown: false }}
            />
            <Stack.Screen name="DetailsFiscal" component={DetailsFiscal} options={{ headerShown: false }}
            />
            <Stack.Screen name="Certifications" component={Certification} options={{ headerShown: false }}
            />
            <Stack.Screen name="Parceiros" component={Parceiros} options={{ headerShown: false }}
            />
            <Stack.Screen name="Infor" component={Info} options={{ headerShown: false }}
            />
             <Stack.Screen name="DetailsInfor" component={DetailsInfor} options={{ headerShown: false }}
            />
             <Stack.Screen name="Metas" component={Metas} options={{ headerShown: false }}
            />
             <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }}
            />
              <Stack.Screen name="Globe" component={Globe} options={{ headerShown: false }}
            />
            <Stack.Screen name="User" component={User} options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}