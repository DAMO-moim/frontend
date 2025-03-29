import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Info = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16, // 컴포넌트 간 간격
    alignItems: "flex-start",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4, // 제목과 내용 간의 간격
  },
  content: {
    fontSize: 14,
    lineHeight: 20, // 줄 간격 설정
  },
});

export default Info;
