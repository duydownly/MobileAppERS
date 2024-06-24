import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const employees = [
    { id: 1, name: 'Kim', balance: 500, type: 'Tháng' },
    { id: 2, name: 'Hoàng Anh', balance: 0, type: 'Ngày' },
    { id: 3, name: 'Duy', balance: 0, type: 'Tháng' },
    { id: 4, name: 'Đạt Cáo', balance: 0, type: 'Ngày' },
    { id: 5, name: 'Hiệp Gà', balance: 0, type: 'Tháng' },
    { id: 6, name: 'Linh Tã', balance: 0, type: 'Ngày' }
  ]
  

const categorizeEmployees = (employees) => {
  const monthlyEmployees = employees.filter(employee => employee.type === 'Tháng');
  const dailyEmployees = employees.filter(employee => employee.type === 'Ngày');
  return { monthlyEmployees, dailyEmployees };
};

export default function Employees() {
   const navigation = useNavigation();
  const { monthlyEmployees, dailyEmployees } = categorizeEmployees(employees);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>TỔNG PHẢI TRẢ</Text>
        <View style={styles.circle}>
          <Text style={styles.circleText}>0</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddEmployee')}>
        <MaterialCommunityIcons name="account-plus" size={24} color="white" />
        <Text style={styles.addButtonText}>Thêm nhân viên</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollContainer}>
              <Text style={styles.categoryHeader}>NHÂN VIÊN NGÀY ({dailyEmployees.length})</Text>
        {dailyEmployees.map((employee) => (
          <View key={employee.id} style={styles.employeeContainer}>
            <Text style={styles.employeeName}>{employee.name}</Text>
            <Text style={styles.employeeBalance}>Số dư {employee.balance}</Text>
          </View>
        ))}
        <Text style={styles.categoryHeader}>NHÂN VIÊN THÁNG ({monthlyEmployees.length})</Text>
        {monthlyEmployees.map((employee) => (
          <View key={employee.id} style={styles.employeeContainer}>
            <Text style={styles.employeeName}>{employee.name}</Text>
            <Text style={styles.employeeBalance}>Số dư {employee.balance}</Text>
          </View>
        ))}


      </ScrollView>
    </View>
  );
}
