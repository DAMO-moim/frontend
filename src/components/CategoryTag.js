import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryTag = ({ name, size, color, onSelect, selectedOrder }) => {
    return (
        <TouchableOpacity
            style={[
                styles.categoryContainer,
                { backgroundColor: selectedOrder ? "#FFD700" : "white" }, // 선택 시 노란색 배경
            ]}
            onPress={onSelect}
        >
            {/* 좌측 상단에 숫자 표시 */}
            {selectedOrder && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{selectedOrder}</Text>
                </View>
            )}
            {/* 태그 이름 */}
            <Text style={[styles.tagName, { fontSize: size, color }]}>{name}</Text>
        </TouchableOpacity>
    );
};

const App = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleSelect = (tag) => {
        if (selectedTags.includes(tag)) {
            // 이미 선택된 태그를 클릭하면 제거
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else if (selectedTags.length < 3) {
            // 최대 3개까지 추가 가능
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <View style={styles.container}>
            {["스포츠", "개발", "음악", "악기", "반려동물", "문화/공연", "게임/오락"].map((tag) => (
                <CategoryTag
                    key={tag}
                    name={tag}
                    size={14}
                    color="black"
                    onSelect={() => handleSelect(tag)}
                    selectedOrder={selectedTags.indexOf(tag) + 1 || null} // 순서 표시
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap", // 태그를 여러 줄로 배치
        gap: 10,
        padding: 16,
        backgroundColor: "#F5F5F5",
    },
    categoryContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginHorizontal: 4,
        marginBottom: 8,
        width: 100,
        height: 40,
        position: "relative", // 배지 위치 설정을 위해 필요
    },
    tagName: {
        fontWeight: "bold",
    },
    badge: {
        position: "absolute", // 배지를 좌측 상단에 고정
        top: -5,
        left: -5,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#333", // 배지 색상 (회색)
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {   
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
});

export default App;
