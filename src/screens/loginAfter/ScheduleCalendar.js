import React, { useState, useEffect } from 'react';
import { View, Modal, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
// import axios from 'axios';
import { instance } from '../../api/axiosInstance';

const ScheduleCalendar = ({ categoryName, memberId, token }) => {
  const [schedules, setSchedules] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  // 일정 조회 API 호출
  const fetchSchedules = async () => {
    try {
      const response = await instance.get(
        `/schedules?page=1&size=10&category=${categoryName}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSchedules(response.data.data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, [categoryName]);

  // 달력에 표시할 일정 데이터 생성
  const markedDates = schedules.reduce((acc, schedule) => {
    if (schedule.scheduleStatus === 'SINGLE') {
      acc[schedule.startSchedule] = { marked: true, dotColor: 'blue' };
    } else if (schedule.scheduleStatus === 'CONTINUOUS') {
      let currentDate = new Date(schedule.startSchedule);
      const endDate = new Date(schedule.endSchedule);

      while (currentDate <= endDate) {
        const formattedDate = currentDate.toISOString().split('T')[0];
        acc[formattedDate] = { marked: true, dotColor: 'purple' };
        currentDate.setDate(currentDate.getDate() + 1);
      }
    } else if (schedule.scheduleStatus === 'RECURRING') {
      acc[schedule.startSchedule] = { marked: true, dotColor: 'green' };
    }
    return acc;
  }, {});

  // 날짜 선택 핸들러
  const handleDayPress = (day) => {
    const selectedSchedule = schedules.find(
      (schedule) =>
        schedule.startSchedule === day.dateString ||
        schedule.endSchedule === day.dateString
    );
    if (selectedSchedule) {
      setModalData(selectedSchedule);
      setModalVisible(true);
    }
    setSelectedDate(day.dateString);
  };

  return (
    <View>
      <Calendar
        markedDates={{
          ...markedDates,
          [selectedDate]: { selected: true, selectedColor: '#FFC107' },
        }}
        onDayPress={handleDayPress}
        theme={{
          selectedDayBackgroundColor: '#FFC107',
          todayTextColor: '#FF5722',
          arrowColor: '#FFC107',
        }}
      />

      {/* 모달 */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>일정 정보</Text>
            <Text>시작 날짜: {modalData?.startSchedule}</Text>
            <Text>종료 날짜: {modalData?.endSchedule}</Text>
            <Text>유형: {modalData?.scheduleStatus}</Text>
            <Text onPress={() => setModalVisible(false)} style={styles.closeButton}>
              닫기
            </Text>
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
  closeButton: {
    color: '#FF5722',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default ScheduleCalendar;
