import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const CommonTag = ({ name, size, color, onPress, showCloseButton }) => {
    return (
        <View style={[styles.tagContainer, { alignSelf: 'flex-start' }]}>
            {/* 태그 이름 */}
            <Text style={[styles.tagName, { fontSize: size, color }]}>
                { name }
            </Text>
            {/* "x" 버튼 조건부 렌더링 */}
            {showCloseButton && (
                <TouchableOpacity style={styles.closeButton} onPress={onPress}>
                    <Text style={styles.closeButtonText}>x</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: 'row', // 태그와 버튼을 가로로 배치
        alignItems: 'center', // 세로 정렬
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 16, // 둥근 테두리
        marginHorizontal: 4,
        backgroundColor: '#CCE5E5', // 배경색
        marginBottom: 10
    },
    tagName: {
        fontWeight: 'bold',
        fontFamily: 'Inter'
    },
    closeButton: {
        marginLeft: 8, // 텍스트와 버튼 간격
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 12,
        backgroundColor: '#CCE5E5', // 버튼 배경색
    },
    closeButtonText: {
        fontSize: 14,
        color: '#828282', // 버튼 텍스트 색상
        fontWeight: 'bold',
    },
});

export default CommonTag;
