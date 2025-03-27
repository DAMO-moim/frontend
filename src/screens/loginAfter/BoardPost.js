import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonInput, commonStyles } from '../../constants/styles';
import InputWithLabel from '../../components/InputWithLabel';
import { BLACK_COLOR, ERROR_COLOR, WHITE_COLOR } from '../../constants/colors';
import { CustomButton } from '../../components/CustomButton';


function BoardPost({ navigation }) {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    console.log('click!');
  };
  return (
    <View style={commonStyles.container}>
      <View style={styles.container}>
        <InputWithLabel
            label={<Text style={commonStyles.text}>게시글 제목</Text>}
            placeholder="게시글 제목을 입력해주세요."
            value={title}
            onChangeText={(text) => setTitle(text)}
            // description="description"
          />
          <InputWithLabel
            label={<Text style={commonStyles.text}>이미지 첨부</Text>}
            value={image}
            onChangeClick={(text) => setImage(text)}
            // description="description"
          />
      </View>


      <View style={styles.contentWrapper}>
        <InputWithLabel
            label={<Text style={commonStyles.text}>게시글 내용</Text>}
            placeholder="게시글 내용을 입력해주세요."
            value={content}
            onChangeText={(text) => setContent(text)}
            inputStyle={{ height: 120 }}
            // description="description"
        />
        </View>
        <View style={styles.contentWrapper}>
            <CustomButton
            title={<Text style={commonStyles.text}>게시글 작성</Text>}
            onPress={handleSubmit}
            disabled={title.length < 1} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    gap: 16
  },
  contentWrapper: {
    width:'100%',
    display: 'flex',
    marginTop: 24
  },
})


export default BoardPost;