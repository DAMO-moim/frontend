import React, { useState, useEffect } from 'react';
import { View, Modal, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { instance } from '../../api/axiosInstance';

const ScheduleCalendar = ({ categoryId, token }) => {
  const [schedules, setSchedules] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);

  // 일정 조회 API 호출
  const fetchSchedules = async () => {
    try {
      const response = await instance.get(`/schedules`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: 1, size: 10, categoryId },
      });
      setSchedules(response.data.data);
    } catch (error) {
      console.error('Error fetching schedules:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (categoryId) fetchSchedules();
  }, [categoryId]);

  const markedDates = {};
  
  schedules.forEach(schedule => {
    const { startSchedule, endSchedule, scheduleStatus } = schedule;
    if (scheduleStatus === 'SINGLE') {
      markedDates[startSchedule] = {
        customStyles: {
          container: { backgroundColor: '#F8C8DC', borderRadius: 5 },
          text: { color: 'black' },
        },
      };
    } else if (scheduleStatus === 'CONTINUOUS') {
      let currentDate = new Date(startSchedule);
      const endDate = new Date(endSchedule);
      while (currentDate <= endDate) {
        const formattedDate = currentDate.toISOString().split('T')[0];
        markedDates[formattedDate] = {
          customStyles: {
            container: { backgroundColor: '#A991F7', borderRadius: 10 },
            text: { color: 'black' },
          },
        };
        currentDate.setDate(currentDate.getDate() + 1);
      }
    } else if (scheduleStatus === 'RECURRING') {
      markedDates[startSchedule] = markedDates[startSchedule] || { customStyles: {} };
      markedDates[startSchedule].customStyles.text = {
        color: '#FFC107',
        fontWeight: 'bold',
      };
    }
  });

  const handleDayPress = (day) => {
    const filteredSchedules = schedules.filter(
      (schedule) =>
        schedule.startSchedule === day.dateString ||
        schedule.endSchedule === day.dateString
    );
    if (filteredSchedules.length > 0) {
      setModalData(filteredSchedules);
      setModalVisible(true);
    }
    setSelectedDate(day.dateString);
  };

  return (
    <View>
      <Calendar
        markingType="custom"
        markedDates={{
          ...markedDates,
          [selectedDate]: { selected: true, selectedColor: '#FFC107' },
        }}
        onDayPress={handleDayPress}
        theme={{
          backgroundColor: '#FFF9E5',
          calendarBackground: '#FFF9E5',
          textSectionTitleColor: 'black',
          selectedDayBackgroundColor: '#FFC107',
          todayTextColor: '#FF5722',
          arrowColor: '#FFC107',
          monthTextColor: 'black',
          textDayFontWeight: 'bold',
        }}
      />
      
      {/* 모달 */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>일정 정보</Text>
            {modalData.map((schedule, index) => (
              <View key={index} style={styles.scheduleItem}>
                <Text>시작: {schedule.startSchedule}</Text>
                <Text>종료: {schedule.endSchedule}</Text>
                <Text>유형: {schedule.scheduleStatus}</Text>
              </View>
            ))}
            <Text onPress={() => setModalVisible(false)} style={styles.closeButton}>닫기</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scheduleItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
  },
  closeButton: {
    color: '#FF5722',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default ScheduleCalendar;
