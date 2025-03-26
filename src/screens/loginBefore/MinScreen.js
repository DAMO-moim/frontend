import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
// import CommonTag from '../../components/CommonTag';
// import CategoryTag from '../../components/CategoryTag';
// import SelectCategories from './SelectCategories';
import { commonStyles } from '../../constants/styles';
import GroupBox from '../../components/GroupBox';
// import MenuBar from '../../components/MenuBar';
// import MyPage from '../MyPage';

function MinScreen() {
  // 태그 목록을 상태로 관리
  const [tags, setTags] = useState(['운동', '독서', '여행']);
  // 특정 태그를 제거하는 함수
  const removeTag = (index) => {
    setTags((currentTags) => currentTags.filter((_, i) => i !== index));
  };
 
  return (
    <View style={commonStyles.container}>
      {/* 태그 목록을 반복 렌더링 */}
      {/* {tags.map((tag, index) => (
        <CommonTag
          key={index} // 고유 키
          name={tag} // 태그 이름
          size={14} // 글자 크기
          color="black" // 글자 색상
          showCloseButton={true} // X 버튼 표시 여부
          onPress={() => removeTag(index)} // X 버튼 클릭 시 호출할 함수
        />
      ))} */}
        {/* <CategoryTag /> */}
        {/* 메뉴 버튼 */}
      <GroupBox />
    </View>
  );
}



export default MinScreen;
