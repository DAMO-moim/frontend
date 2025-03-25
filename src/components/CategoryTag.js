import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const categories = [
  "스포츠", "개발", "음악", "악기", "반려동물",
  "문화/공연", "게임/오락", "요리/제조", "외국어",
  "자기계발", "공예", "주류", "여행", "독서",
  "Category", "Category", "Category"
];

const CategoryTag = ({ name, size, color, onSelect, selectedOrder, isDisabled }) => {
  const TagComponent = isDisabled ? View : TouchableOpacity;

  return (
    <TagComponent
      style={[
        styles.categoryContainer,
        { backgroundColor: selectedOrder ? "#FFD700" : "#FFFFFF" },
        // isDisabled && { opacity: 0.5 }, // 비활성화 시 흐리게 표시
      ]}
      onPress={isDisabled ? undefined : onSelect}
    >
      {selectedOrder && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{selectedOrder}</Text>
        </View>
      )}
      <Text style={[styles.tagName, { fontSize: size, color }]}>{name}</Text>
    </TagComponent>
  );
};

  const SelectCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, category]);
    }
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
            onSelect={() => handleSelect(category)}
            selectedOrder={selectedCategories.includes(category) ? 
              selectedCategories.indexOf(category) + 1 : null}
            isDisabled={
              selectedCategories.length >= 3 && 
              !selectedCategories.includes(category)
            }
          />
        ))}
      </View>

      {/* 안내사항 */}
      <View style={styles.noticeContainer}>
        <Text style={styles.noticeText}>
          - 관심사는 최대 3개 선택 가능합니다.{'\n'}
          - 처음 선택한 관심사가 1순위로 지정됩니다.
        </Text>
      </View>

      {/* 선택 완료 버튼 */}
      <TouchableOpacity 
        style={[
          styles.completeButton,
          selectedCategories.length === 0 && styles.disabledButton
        ]}
        disabled={selectedCategories.length === 0}
      >
        <Text style={styles.completeButtonText}>선택 완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    // main 배경
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F2E6F7",
    alignItems: 'center',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    width: '100%',
    marginBottom: 16,
  },
  // 카테고리 박스
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    width: '31.5%',
    maxWidth: 140,
    height: 40,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "#FFFFFF",
  },
  tagName: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // 순서 번호
  badge: {
    position: 'absolute',
    top: -5,
    left: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#5B5B5B",
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '500',
  },
  // 공지사항
  noticeContainer: {
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  noticeText: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
    textAlign: 'center',
  },
  completeButton: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // 안드로이드 그림자 효과
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  completeButtonText:{
     fontSize :16 ,
     fontWeight:"bold"
     
}});
export default CategoryTag
