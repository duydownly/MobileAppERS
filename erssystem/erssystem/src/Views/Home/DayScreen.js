import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';

export default function DayScreen() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [employeeStatuses, setEmployeeStatuses] = useState({});

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    updateEmployeeStatuses(selectedDate);
  }, [selectedDate]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://192.168.0.100:5000/dayscreen'); // Replace with your server's IP address
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
      // Handle error as needed
    }
  };
  
  
const updateEmployeeStatuses = (date) => {
  const formattedDate = date.format('YYYY-MM-DD');
  const statuses = {};

  employees.forEach((employee) => {
    const attendance = employee.attendance.find(item => item.date === formattedDate);
    if (attendance) {
      statuses[employee.id] = {
        status: attendance.status,
        icon: attendance.icon,
        color: attendance.color,
      };
    } else {
      statuses[employee.id] = {
        status: 'Offline',
        icon: 'cloud-off',  // Default icon for 'Offline'
        color: 'gray',      // Default color for 'Offline'
      };
    }
  }); 

  setEmployeeStatuses(statuses);
};

  const handlePrevDay = () => {
    const newDate = selectedDate.clone().subtract(1, 'day');
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = selectedDate.clone().add(1, 'day');
    setSelectedDate(newDate);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(moment(date));
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevDay}>
          <Text style={styles.navButton}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.dateText}>{selectedDate.format('DD/MM/YYYY')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextDay}>
          <Text style={styles.navButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.infoText}>Hiển thị thông báo ứng tiền</Text>
      <ScrollView style={styles.employeeList}>
  {employees.map((employee) => (
    <View key={employee.id} style={styles.employeeContainer}>
      <View style={styles.partOne}>
        <Text style={styles.employeeName}>{employee.name}</Text>
      </View>
      <View style={styles.partTwo}>
        <Text style={[styles.employeeStatus, { color: employeeStatuses[employee.id]?.color }]}>
          {employeeStatuses[employee.id]?.status}
        </Text>
      </View>
      <View style={styles.partThree}>
        <Icon
          name={employeeStatuses[employee.id]?.icon}
          size={20}
          color={employeeStatuses[employee.id]?.color}
          style={styles.statusIcon}
        />
      </View>
    </View>
  ))}
</ScrollView>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
