import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CommonTag from "./CommonTag";

const TagList = ({ title, tags = [], color }) => {
  const [isExpanded, setIsExpanded] = useState(false); // 섹션 펼침 여부 상태 관리

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // 펼침/닫힘 상태 변경
  };
  const handleTagPress = (tag) => {
    console.log(`Tag clicked: ${tag}`); // 태그 클릭 시 로그 출력
  };

  return (
    <View style={[styles.sectionContainer, { borderColor: color }]}>
      {/* 제목 및 + / - 버튼 */}
      <TouchableOpacity style={styles.sectionHeader} onPress={toggleExpand}>
        <Text style={[styles.sectionTitle, { color }]}>{title}</Text>
        <Text style={[styles.toggleButton, { color }]}>{isExpanded ? "-" : "+"}</Text>
      </TouchableOpacity>

      {/* 태그 목록 (펼쳐진 경우에만 렌더링) */}
      {isExpanded && (
        <View style={styles.tagContainer}>
          {tags.map((tag) => (
            <TouchableOpacity key={tag} onPress={() => handleTagPress(tag)}>
              <CommonTag name={tag} size={14} color="#6D5EAC" />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#EFEAFD",
    width: "100%", // 컨테이너 너비를 화면 전체로 설정
  },
  sectionHeader: {
    flexDirection: "row", // 제목과 버튼을 가로로 배치
    justifyContent: "space-between", // 좌측 끝과 우측 끝 배치
    alignItems: "center", // 세로 중앙 정렬
    width: "100%", // 헤더 너비를 화면 전체로 설정
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left", // Title을 좌측 정렬
  },
  toggleButton: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "right", // 버튼을 우측 정렬
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
});

export default TagList;
