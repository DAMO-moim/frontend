import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GroupBox from '../../components/GroupBox'; // GroupBox 컴포넌트를 import
import { BLACK_COLOR } from '../../constants/colors';

const MyGroups = () => {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={groups} // 데이터 배열
        keyExtractor={(item) => item.id} // 고유 키 설정
        renderItem={({ item }) => (
          <GroupBox
            image={item.image}
            title={item.title}
            text={item.text}
            isLeader={item.isLeader}
            currentCount={item.currentCount}
            maxCount={item.maxCount}
          />
        )}
        contentContainerStyle={styles.listContainer} // 리스트 스타일
        showsVerticalScrollIndicator={false} // 스크롤바 숨기기
        ListFooterComponent={<View style={{ height: 20 }} />} // 하단 여백 추가
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7', // 전체 배경색
    paddingHorizontal: 10, // 좌우 여백 추가
  },
  listContainer: {
    paddingVertical: 10, // 상하 여백 추가
    paddingHorizontal: 10, // FlatList 내부 항목 좌우 패딩 추가 (잘림 방지)
  },
});

export default MyGroups;
