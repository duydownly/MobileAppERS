import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const PayrollCalculationMethod = () => {
  const navigation = useNavigation();
  const [payMethod, setPayMethod] = useState('month');
  const [salary, setSalary] = useState('');
  const [selectedDay, setSelectedDay] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const daysInMonth = Array.from({ length: 28 }, (_, i) => i + 1);

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setIsModalVisible(false);
  };

  const formatDate = (day) => {
    return `Mùng ${day} hàng tháng`;
  };

  const handleComplete = () => {
    // DizzyTran: Thêm logic
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chọn cách tính công</Text>
      <View style={styles.radioButtonContainer}>
        <RadioButton.Group onValueChange={newValue => setPayMethod(newValue)} value={payMethod}>
          <View style={styles.radioButtonItem}>
            <RadioButton value="month" />
            <Text style={styles.radioLabel}>Tháng</Text>
          </View>
          <View style={styles.radioButtonItem}>
            <RadioButton value="day" />
            <Text style={styles.radioLabel}>Ngày</Text>
          </View>
        
        </RadioButton.Group>
      </View>
      {payMethod === 'month' && (
        <View style={styles.salaryContainer}>
          <Text style={styles.label}>Lương theo tháng</Text>
          <TextInput
            style={styles.input}
            value={salary}
            onChangeText={setSalary}
            keyboardType="numeric"
            placeholder="0 VNĐ/tháng"
          />
        </View>
      )}
      {payMethod === 'day' && (
        <View style={styles.salaryContainer}>
          <Text style={styles.label}>Lương theo ngày</Text>
          <TextInput
            style={styles.input}
            value={salary}
            onChangeText={setSalary}
            keyboardType="numeric"
            placeholder="0 VNĐ/ngày"
          />
        </View>
      )}
   
      <View style={styles.dateContainer}>
        <Text style={styles.label}>Chu kỳ trả lương</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>{formatDate(selectedDay)}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={daysInMonth}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelectDay(item)} style={styles.dayItem}>
                  <Text style={styles.dayText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
        <Text style={styles.completeButtonText}>Hoàn thành</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  radioButtonContainer: {
    marginBottom: 16,
  },
  radioButtonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioLabel: {
    fontSize: 16,
  },
  salaryContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  dateContainer: {
    marginBottom: 16,
  },
  dateButton: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateButtonText: {
    fontSize: 16,
  },
  completeButton: {
    width: '100%',
    padding: 12,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    borderRadius: 4,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    maxHeight: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  dayItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dayText: {
    fontSize: 16,
  },
});

export default PayrollCalculationMethod;
