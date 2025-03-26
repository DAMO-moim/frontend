import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CategoryTag from '../../components/CategoryTag';
import { CustomButton } from '../../components/CustomButton';

const categories = [
    '사교/인맥', '독서', '언어', '요리', '스포츠',
  '음악', '악기', '게임', '차',
  '댄스', '사진', '여행', '반려동물',
];

const SelectCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { width } = Dimensions.get('window');
  const BUTTON_WIDTH = (width - 48) / 3 - 8; // 동적 너비 계산

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : prev.length < 3 ? [...prev, category] : prev
    );
  };

  return (
    <View style={styles.container}>
      {/* 카테고리 목록 */}
      <View style={styles.categoryGrid}>
        {categories.map((category, index) => (
          <CategoryTag
            key={index}
            name={category}
            size={14}
            color="black"
            onSelect={() => toggleCategory(category)}
            selectedOrder={selectedCategories.includes(category) ? 
              selectedCategories.indexOf(category) + 1 : null}
            isDisabled={
              selectedCategories.length >= 3 && 
              !selectedCategories.includes(category)
            }
            buttonWidth={BUTTON_WIDTH} // 너비 prop 전달
          />
        ))}
        {/* 안내사항 */}
      <View style={styles.noticeContainer}>
        <Text style={styles.noticeText}>
        ㆍ 안내사항{'\n'}
          - 관심사는 최소 1개 최대 3개 선택 가능합니다.{'\n'}
          - 처음 선택한 관심사가 1순위로 지정됩니다.{'\n'}
          - 카테고리는 마이페이지에서 수정이 가능합니다.
        </Text>
      </View>
        <CustomButton 
        title="선택 완료"
        onPress={() => console.log('선택 완료!')}
        
        disabled={selectedCategories.length === 0} // 선택된 카테고리가 없으면 비활성화
      />
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  categoryGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap : 8,
    justifyContent: 'flex-start',
    marginBottom: 16,
    width: '100%',
  },
  noticeContainer: {
    marginBottom: 16,
    width: '100%',
    alignItems: 'flex-start',
  },
  noticeText: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
    textAlign: 'left',
    marginTop: 14,
  },
  buttonWrapper: {
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  completeButton: {
    marginTop: 16,
    width: Dimensions.get('window').width * 0.8, // 버튼 너비 설정
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // 안드로이드 그림자 효과
  },
});

export default SelectCategories;
