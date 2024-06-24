import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 4,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 8,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 16,
  },
  employeeContainer: {
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 4, // Thu hẹp khoảng cách giữa các dòng

  },
  employeeName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop : 0,
  },
  employeeDate: {
    fontSize: 14,
    color: 'gray',
  },
  employeeBalance: {
    fontSize: 14,
    color: 'red',
  },
  categoryHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  navButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  monthYear: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekday: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%', // Adjusted width to fit 7 columns
    aspectRatio: 1, // Ensure the cell is square
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8, // Adjust margin as needed
    padding: 8, // Adjust padding as needed
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dayText: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    color : 'white',
  },

  employeeButton: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  selectedEmployeeButton: {
    backgroundColor: '#3b5998',
  },
    openModalButtonText: {
    color: 'black',
    fontSize: 20, // Kích thước chữ to hơn
    textAlign: 'center', // Căn giữa dòng
  },
    statusIcon: { // Style for the status icon
    fontSize: 15,
        marginTop: -41, // Dịch icon lên trên

  },

  partOne: {
    flex: 3, // Độ rộng lớn nhất
    justifyContent: 'center',
    marginTop : -5,
    
  },
  partTwo: {
    flex: 1, // Độ rộng trung bình
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100, // Dịch sang bên phải một chút

  },
  partThree: {
    flex: 2, // Độ rộng nhỏ nhất
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  employeeStatus: {
    fontSize: 14,
                marginBottom: 0,
  },
   employeeList: {
    flexGrow: 3, // Để ScrollView không chiếm toàn bộ không gian còn lại
    height: 30, // Chiều cao cố định để ScrollView nhỏ hơn
            marginTop: 240,
  },
});