import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import BoardCard from '../../components/BoardCard';
import { PRIMARY_BACK_COLOR, PRIMARY_BTN_COLOR, BLACK_COLOR } from '../../constants/colors';
import { commonBtn, commonShadow } from '../../constants/styles';

const BoardScreen = ({navigation}) => {
  // 임시 데이터
  const posts = [
    {
      id: 1,
      profileImage: null,
      username: "작성자",
      title: "게시글 제목",
      content: "게시글 내용 게시글 내용 게시글 내용 게시글 내용",
      postImage: require('../../../assets/images/loginLogo.png'),
      createdAt: "2024.03.18",
    //   likeCount: 2,
      commentCount: 0
    },
    {
      id: 2,
      profileImage: null,
      username: "작성자",
      title: "게시글 제목",
      content: "게시글 내용 게시글 내용 게시글 내용 게시글 내용용",
      postImage: null,
      createdAt: "2024.03.18",
    //   likeCount: 2,
      commentCount: 0
    }
  ];

  const handlePostPress = (postId) => {
    // 게시글 상세 페이지로 이동
    // navigation.navigate('PostDetail', { postId });
    console.log('게시글 클릭:', postId);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.writeButton, commonShadow.mainShadow]}
          onPress={() => {
            // navigation.navigate('WritePost');
          }}
        >
          <Text style={styles.buttonText}>게시글 작성</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {posts.map((post) => (
          <TouchableOpacity 
            key={post.id}
            onPress={() => handlePostPress(post.id)}
            activeOpacity={0.8}
          >
            <BoardCard
              profileImage={post.profileImage}
              username={post.username}
              title={post.title}
              content={post.content}
              postImage={post.postImage}
              createdAt={post.createdAt}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: PRIMARY_BACK_COLOR,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'flex-end',
  },
  writeButton: {
    backgroundColor: PRIMARY_BTN_COLOR,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    width: 'auto',
    minWidth: 100,
  },
  buttonText: {
    color: BLACK_COLOR,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default BoardScreen;
