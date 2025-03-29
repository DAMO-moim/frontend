import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BLACK_COLOR, WHITE_COLOR, INPUT_BACK_COLOR } from '../constants/colors';
import { commonShadow } from '../constants/styles';
import IconButton from './IconButton';

const CommentItem = ({ 
    profileImage, 
    username, 
    content, 
    createdAt,
    onEdit,
    onDelete,
    isMyComment = false,
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    return (
        <View style={styles.commentContainer}>
            <View style={styles.leftSection}>
                <Image 
                    source={profileImage || require('../../assets/images/mypage/user.png')}
                    style={styles.profileImage}
                />
                <View style={styles.contentSection}>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View> 
                <IconButton name='more-vert' size={20} color={BLACK_COLOR} onPress={() => setIsOpen(!isOpen)}/>
                {isOpen && (
                    <View style={[styles.buttonContainer, commonShadow.btnShadow]}>
                        <TouchableOpacity onPress={onEdit}>
                            <Text style={[styles.actionButton, {borderBottomWidth: 1, borderColor: BLACK_COLOR }]}>수정</Text>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={onDelete}>
                        <Text style={[styles.actionButton]}>삭제</Text>
                    </TouchableOpacity>
                </View>
            )}
            </View>
            <Text style={styles.date}>{createdAt}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: WHITE_COLOR,
        borderWidth: 1,
        borderColor: BLACK_COLOR,
        borderRadius: 8,
        width: '100%',
        minHeight: 100,
    },
    leftSection: {
        flexDirection: 'row',
        flex: 1,
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 12,
    },
    contentSection: {
        flex: 1,
        paddingRight: 12,
    },
    username: {
        fontSize: 12,
        fontWeight: '600',
        color: BLACK_COLOR,
        marginBottom: 8,
    },
    content: {
        fontSize: 12,
        color: BLACK_COLOR,
        marginBottom: 8,
        lineHeight: 20,
    },
    date: {
        fontSize: 12,
        color: '#666666',
    },
    buttonContainer: {
        // // display:'flex',
        // display:'none',
        position:'absolute',
        right: 0,
        top: 20, 
        backgroundColor: WHITE_COLOR,
        zIndex: 100,
        alignSelf:'flex-start',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: BLACK_COLOR,
        borderRadius: 5,
        height:'auto'
    },
    actionButton: {
        fontSize: 12,
        color: '#666666',
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
});

export default CommentItem; 