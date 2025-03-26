import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation } from '@react-navigation/native';
import CategoryTag from '../../components/CategoryTag';
import { CustomButton } from '../../components/CustomButton';
import * as userService from '../../api/mutations/userService';
import { commonStyles } from '../../constants/styles';
import { AuthContext } from '../../contexts/AuthProvider'; 

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
  const { setIsCategorySelected } = useContext(AuthContext); 

  const initialData = route.params?.initialData || {}; // 회원가입 데이터

  // 카테고리 선택 토글
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : prev.length < 3 ? [...prev, category] : prev
    );
  };

  // 카테고리 선택 완료 (로그인한 경우)
  const handleCategorySelectionComplete = async () => {
    try {
      await AsyncStorage.setItem('isCategorySelected', 'true'); 
      setIsCategorySelected(true); // 상태 업데이트
      navigation.replace('MainTabs'); 
    } catch (error) {
      console.error('Error saving category selection:', error);
    }
  };

  // 카테고리 선택 완료 (회원가입하는 경우)
  const handleCompleteSelection = async () => {
    const memberCategories = selectedCategories.map((categoryName) => {
      const categoryId = categories.indexOf(categoryName) + 1;
      return { categoryId };
    });

    const finalData = { ...initialData, memberCategories };

    try {
      if (Object.keys(initialData).length > 0) {
        // 회원가입 진행 중
        await userService.registerUser(finalData);
        console.log('회원가입 성공!', finalData);
        navigation.navigate('MainTabs', { screen: 'Login' });
      } else {
        // 이미 로그인한 경우
        await AsyncStorage.setItem('isCategorySelected', 'true');
        setIsCategorySelected(true); // 상태 업데이트 추가
        navigation.replace('MainTabs');
      }
    } catch (error) {
      console.error('회원가입 또는 카테고리 저장 실패:', error);
    }
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
