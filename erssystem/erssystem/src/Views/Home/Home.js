import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Employees from './Employees';
import MonthScreen from './MonthScreen';
import DayScreen from './DayScreen';
import AccountScreen from './AccountScreen';
import styles from './styles';

const Tab = createBottomTabNavigator();
const employees = [
  { id: 1, name: 'Kim', balance: 0, type: 'Tháng', status: 'Offline', color: 'gray', icon: 'cloud-off' },
  { id: 2, name: 'Hoàng Anh', balance: 0, type: 'Ngày', status: 'Đủ', color: 'green', icon: 'check-circle' },
  { id: 3, name: 'Duy', balance: 0, type: 'Tháng', status: 'Nửa ', color: 'yellow', icon: 'access-time' },
  { id: 4, name: 'Đạt Cáo', balance: 0, type: 'Ngày', status: 'Vắng', color: 'red', icon: 'cancel' },
  { id: 5, name: 'Hiệp Gà', balance: 0, type: 'Tháng', status: 'Offline', color: 'gray', icon: 'cloud-off' },
  { id: 6, name: 'Linh Tã', balance: 0, type: 'Ngày', status: 'Đủ', color: 'green', icon: 'check-circle' },
];
export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Day"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'account-group';
          } else if (route.name === 'Month') {
            iconName = 'calendar-month';
          } else if (route.name === 'Day') {
            iconName = 'calendar-today';
          } else if (route.name === 'Account') {
            iconName = 'account-settings';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="Day" component={DayScreen} options={{ tabBarLabel: 'Ngày', headerShown: false }} />
      <Tab.Screen name="Home" component={Employees} options={{ tabBarLabel: 'Nhân viên', headerShown: false }} />
      <Tab.Screen name="Month" component={MonthScreen} options={{ tabBarLabel: 'Tháng', headerShown: false }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ tabBarLabel: 'Tài khoản', headerShown: false }} />
    </Tab.Navigator>
  );
}
