import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import CategoryTag from '../../components/CategoryTag';
import { CustomButton } from '../../components/CustomButton';
import * as userService from '../../api/mutations/userService';
import { commonStyles } from '../../constants/styles';

const categories = [
  '사교/인맥', '독서', '언어', '요리', '스포츠',
  '음악', '악기', '게임', '차',
  '댄스', '사진', '여행', '반려동물',
];

const SelectCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { width } = Dimensions.get('window');
  const BUTTON_WIDTH = (width - 48) / 3 - 8; 

  const route = useRoute();
  const navigation = useNavigation();

  const initialData = route.params?.initialData || {};

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : prev.length < 3 ? [...prev, category] : prev
    );
  };

  const handleCompleteSelection = () => {
    const memberCategories = selectedCategories.map((categoryName) => {
      const categoryId = categories.indexOf(categoryName) + 1;
      return { categoryId };
    });
  
    const finalData = { ...initialData, memberCategories };
  
    userService.registerUser(finalData)
      .then(() => {
        console.log('회원가입 성공!', finalData);
        navigation.navigate('MainTabs', { screen: 'Login' });
      })
      .catch((error) => {
        console.error('회원가입 실패:', error);
      });
  };
  

  return (
    <View style={[styles.container, commonStyles.container]}>
      {/* Category list */}
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
            buttonWidth={BUTTON_WIDTH}
          />
        ))}
      </View>

      {/* Notice */}
      <View style={styles.noticeContainer}>
        <Text style={styles.noticeText}>
          안내사항{'\n'}
          - 관심사는 최소 1개 최대 3개 선택 가능합니다.{'\n'}
          - 처음 선택한 관심사가 1순위로 지정됩니다.{'\n'}
          - 카테고리는 마이페이지에서 수정이 가능합니다.
        </Text>
      </View>

      <CustomButton 
        title="선택 완료"
        onPress={handleCompleteSelection}
        disabled={selectedCategories.length === 0} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
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
});

export default SelectCategories;
