import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, Modal, ScrollView } from 'react-native';
import moment from 'moment';
import styles from './styles';
const employees = [
  { id: 1, name: 'Kim', balance: 0, type: 'Tháng', status: 'Offline', color: 'gray', icon: 'cloud-off' },
  { id: 2, name: 'Hoàng Anh', balance: 0, type: 'Ngày', status: 'Đủ', color: 'green', icon: 'check-circle' },
  { id: 3, name: 'Duy', balance: 0, type: 'Tháng', status: 'Nửa ', color: 'yellow', icon: 'access-time' },
  { id: 4, name: 'Đạt Cáo', balance: 0, type: 'Ngày', status: 'Vắng', color: 'red', icon: 'cancel' },
  { id: 5, name: 'Hiệp Gà', balance: 0, type: 'Tháng', status: 'Offline', color: 'gray', icon: 'cloud-off' },
  { id: 6, name: 'Linh Tã', balance: 0, type: 'Ngày', status: 'Đủ', color: 'green', icon: 'check-circle' },
];

export default function MonthScreen() {
    const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
    const [currentMonth, setCurrentMonth] = useState(moment());
    const [selectedButton, setSelectedButton] = useState(null);
    const [employeeCalendars, setEmployeeCalendars] = useState(
      employees.reduce((acc, employee) => {
        acc[employee.id] = {};
        return acc;
      }, {})
    );
    const [isModalVisible, setModalVisible] = useState(false);
  
    const selectEmployee = (employee) => {
      setSelectedEmployee(employee);
      setModalVisible(false);
    };
  
    const handlePrevMonth = () => {
      setCurrentMonth(prev => prev.clone().subtract(1, 'months'));
    };
  
    const handleNextMonth = () => {
      setCurrentMonth(prev => prev.clone().add(1, 'months'));
    };
  
    const handleButtonPress = (buttonTitle) => {
      setSelectedButton(buttonTitle);
    };
  
    const handleDayPress = (day) => {
      if (selectedButton) {
        setEmployeeCalendars(prevCalendars => ({
          ...prevCalendars,
          [selectedEmployee.id]: {
            ...prevCalendars[selectedEmployee.id],
            [day.format('DD-MM-YYYY')]: selectedButton === 'Xóa' ? undefined : selectedButton === 'Đủ' ? 'green' : selectedButton === 'Vắng' ? 'red' : 'yellow',
          }
        }));
      }
    };
  
    const renderDays = () => {
      const startOfMonth = currentMonth.clone().startOf('month').startOf('week');
      const endOfMonth = currentMonth.clone().endOf('month').endOf('week');
      const days = [];
  
      let day = startOfMonth.clone().subtract(0, 'day');
  
      while (day.isBefore(endOfMonth, 'day')) {
        day = day.add(1, 'day');
        const dayClone = day.clone(); // Clone the day to avoid issues with closure
        const isCurrentMonth = day.month() === currentMonth.month(); // Check if the day is in the current month
  
        const dayStyle = {
          ...styles.dayCell,
          backgroundColor: employeeCalendars[selectedEmployee.id][dayClone.format('DD-MM-YYYY')] || 'transparent', // Default to transparent if no color is set
          opacity: isCurrentMonth ? 1 : 0.3, // Apply opacity if the day is not in the current month
        };
        days.push(
          <TouchableOpacity key={dayClone.format('DD-MM-YYYY')} style={dayStyle} onPress={() => handleDayPress(dayClone)}>
            <Text style={styles.dayText}>{dayClone.date()}</Text>
          </TouchableOpacity>
        );
      }
  
      return days;
    };
  
    return (
      <View style={styles.calendarContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevMonth}>
            <Text style={styles.navButton}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.monthYear}>{currentMonth.format('MM/YYYY')}</Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <Text style={styles.navButton}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.weekdays}>
          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, index) => (
            <Text key={index} style={styles.weekday}>{day}</Text>
          ))}
        </View>
        <View style={styles.calendar}>
          {renderDays()}
        </View>
        <View style={styles.buttons}>
          <Button
            title="Đủ"
            onPress={() => handleButtonPress('Đủ')}
            color={selectedButton === 'Đủ' ? 'green' : undefined}
          />
          <Button
            title="Vắng"
            onPress={() => handleButtonPress('Vắng')}
            color={selectedButton === 'Vắng' ? 'red' : undefined}
          />
          <Button
            title="Nửa ngày"
            onPress={() => handleButtonPress('Nửa ngày')}
            color={selectedButton === 'Nửa ngày' ? 'yellow' : undefined}
          />
          <Button
            title="Xóa"
            onPress={() => handleButtonPress('Xóa')}
            color={selectedButton === 'Xóa' ? 'black' : undefined}
          />
        </View>
        <View>
          <Text></Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.openModalButton}>
          {/* Nút để mở modal */}
          <Text style={styles.openModalButtonText}>Nhân viên:     {selectedEmployee ? selectedEmployee.name : 'Chọn nhân viên'}</Text>
        </TouchableOpacity>
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={false}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <ScrollView>
          {employees.map((employee) => (
            <TouchableOpacity
              key={employee.id}
              onPress={() => selectEmployee(employee)}
              style={[
                styles.employeeButton,
                selectedEmployee?.id === employee.id && styles.selectedEmployeeButton
              ]}
            >
              <Text>{employee.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
