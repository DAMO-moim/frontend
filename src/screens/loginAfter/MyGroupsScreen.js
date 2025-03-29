import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GroupBox from '../../components/GroupBox'; // GroupBox 컴포넌트 import
import { useState } from 'react';
import { CommonRadio } from '../../components/CommonRadio';
import { commonStyles } from '../../constants/styles';

const MyGroupsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  // 데이터 배열
  const groups = [
    {
      id: '1',
      image: require('../../../assets/images/groups/tennis.png'),
      title: '테니스 모임',
      text: '안녕하세요! 테니스 모임입니다! 매주 테니스 치는 모임!! 테니스 초보도 환영합니다.',
      isLeader: true,
      currentCount: 15,
      maxCount: 20,
    },
    {
      id: '2',
      image: require('../../../assets/images/groups/baseball.png'),
      title: '야구방',
      text: '안녕하세요! 야구방입니다! 매주 야구를 즐기는 모임입니다!',
      isLeader: false,
      currentCount: 15,
      maxCount: 20,
    },
    {
      id: '3',
      image: require('../../../assets/images/groups/food.png'),
      title: '맛집탐방',
      text: '안녕하세요! 맛집탐방 모임입니다! 다양한 맛집을 함께 탐방해요!',
      isLeader: false,
      currentCount: 12,
      maxCount: 15,
    },
    {
      id: '4',
      image: require('../../../assets/images/groups/basketball.png'),
      title: '농구광농구',
      text: '안녕하세요! 농구광농구 모임입니다! 농구를 좋아하는 분들 환영합니다!',
      isLeader: true,
      currentCount: 8,
      maxCount: 40,
    },
  ];

  // 클릭 이벤트 핸들러
  const handlePress = (groupId) => {
    console.log(`Group ${groupId} clicked!`);
    // 네비게이션 또는 다른 동작 추가 가능
  };

  // 라디오 버튼 옵션
  const radioOptions = [
    { label: '전체', value: '전체' },
    { label: '스포츠', value: '스포츠' },
    { label: '사교/인맥', value: '사교/인맥' },
    { label: '테스트', value: '테스트' },
  ];

  return (
    <View style={styles.container}>
      <CommonRadio
        value={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
        options={radioOptions}
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupBox
            image={item.image}
            title={item.title}
            text={item.text}
            isLeader={item.isLeader}
            currentCount={item.currentCount}
            maxCount={item.maxCount}
            onPress={() => handlePress(item.id)} // 클릭 이벤트 전달
          />
        )}
        showsVerticalScrollIndicator={false} // 스크롤바 숨기기
        ListFooterComponent={<View style={{ height: 20 }} />} // 하단 여백 추가
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    justifyContent: 'flex-start', // 내용을 위쪽에 배치
    alignItems: 'stretch', // 내용을 전체 너비로 확장
  }
});

export default MyGroupsScreen;
