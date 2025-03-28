import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { commonInput, commonStyles, homeStyles } from '../../constants/styles';
import InputWithLabel from '../../components/InputWithLabel';
import { BLACK_COLOR, ERROR_COLOR, PRIMARY_BACK_COLOR, WHITE_COLOR } from '../../constants/colors';
import { CustomButton } from '../../components/CustomButton';
import { Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';


function BoardPost({ navigation }) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log('click!');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={commonStyles.container}>
        <InputWithLabel
            label={<Text style={commonStyles.text}>게시글 제목</Text>}
            placeholder="게시글 제목을 입력해주세요."
            value={title}
            onChangeText={(text) => setTitle(text)}
            // description="description"
          />
          <View style={styles.imageUploadContainer}>
            <Text style={commonStyles.text}>이미지 첨부</Text>
            <TouchableOpacity 
              style={styles.imageUploadButton}
              onPress={() => {
                // 이미지 선택 로직 구현
                console.log('이미지 선택');
              }}
            >
              <Icon name="add" size={24} color={BLACK_COLOR} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentWrapper}>
        <InputWithLabel
            label={<Text style={commonStyles.text}>게시글 내용</Text>}
            placeholder="게시글 내용을 입력해주세요."
            value={content}
            onChangeText={(text) => setContent(text)}
            isTextarea={true}
            // description="description"
        />
      </View>
      <View style={styles.contentWrapper}>
            <CustomButton
            title={<Text style={commonStyles.text}>게시글 작성</Text>}
            onPress={handleSubmit}
            disabled={title.length < 1 || content.length < 1} 
        />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: PRIMARY_BACK_COLOR,
  },
  container:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    gap: 16
  },
  contentWrapper: {
    width:'100%',
    display: 'flex',
    marginTop: 30
  },
  imageUploadContainer: {
    width: '100%',
    marginTop: 16,
  },
  imageUploadButton: {
    width: '100%',
    height: 48,
    backgroundColor: WHITE_COLOR,
    borderWidth: 1,
    borderColor: BLACK_COLOR,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  uploadButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: BLACK_COLOR,
  }
})


export default BoardPost;