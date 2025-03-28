import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { BLACK_COLOR, WHITE_COLOR } from '../constants/colors';
import { commonShadow } from '../constants/styles';

const BoardCard = ({ 
  profileImage, 
  username, 
  title, 
  content, 
  postImage, 
  createdAt,
  likeCount,
  commentCount, 
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, commonShadow.mainShadow]}>
        {/* 프로필 섹션 */}
        <View style={styles.profileSection}>
          <View style={styles.profileLeft}>
            <Image 
              source={profileImage || require('../../assets/images/mypage/user.png')}
              style={styles.profileImage}
            />
            <Text style={styles.username}>{username}</Text>
          </View>
          {likeCount && <Text style={styles.likeCount}>❤️ {likeCount}</Text>}
        </View>

        {/* 게시글 제목 */}
        <Text style={styles.title}>{title}</Text>

        {/* 게시글 이미지 - postImage가 있을 때만 렌더링 */}
        {postImage !== null && (
          <View style={styles.imageContainer}>
            <Image 
              source={postImage}
              style={styles.postImage}
              resizeMode="contain"
            />
          </View>
        )}

        {/* 게시글 내용 */}
        <Text style={styles.content}>{content}</Text>

        {/* 하단 섹션 */}
        <View style={styles.bottomSection}>
            <View style={styles.bottomLeft}>
                <Text style={styles.commentCount}>💬 {commentCount}</Text>
            </View>
            <Text style={styles.date}>{createdAt}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    width: '100%'
  },
  card: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: BLACK_COLOR,
    shadowColor: BLACK_COLOR,
    shadowOffset: {
      width: 60,
      height: 60,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
    color: BLACK_COLOR,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: BLACK_COLOR,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postImage: {
    width: '50%',
    height: '50%',
  },
  content: {
    fontSize: 14,
    color: BLACK_COLOR,
    marginBottom: 16,
    lineHeight: 20,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: BLACK_COLOR,
  },
  bottomRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    fontSize: 14,
    color: BLACK_COLOR,
  }
});

export default BoardCard; 