import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import GroupBox from '../../components/GroupBox';
import { CommonRadio } from '../../components/CommonRadio';
import { commonStyles } from '../../constants/styles';
import { useCategories } from '../../hooks/useCategories'; // Custom hook import
import { instance } from '../../api/axiosInstance'; // Axios instance import

const MyGroupsScreen = ({ memberId, token }) => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [groups, setGroups] = useState([]);
  const [isLoadingGroups, setIsLoadingGroups] = useState(true);

  // Fetch categories using custom hook
  const { categories, isLoading: isLoadingCategories } = useCategories(memberId, token);

  // Fetch groups based on category
  const fetchGroups = async (categoryId) => {
    setIsLoadingGroups(true);
    try {
      const response = await instance.get(`/mypage/groups`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          page: 1,
          size: 10,
          categoryId: categoryId === '전체' ? null : categoryId,
        },
      });

      console.log('Fetched groups:', response.data.data);
      setGroups(response.data.data || []); // Set groups data
    } catch (error) {
      console.error('Error fetching groups:', error.response?.data || error.message);
    } finally {
      setIsLoadingGroups(false);
    }
  };

  // Fetch groups when selectedCategory changes
  useEffect(() => {
    fetchGroups(selectedCategory);
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      {/* Loading indicator */}
      {isLoadingCategories || isLoadingGroups ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {/* Radio buttons */}
          <CommonRadio
            value={selectedCategory}
            onChange={(value) => setSelectedCategory(value)}
            options={[
              { label: '전체', value: '전체' },
              ...categories.map((category) => ({
                label: category.categoryName,
                value: category.categoryId,
              })),
            ]}
          />

          {/* Group list */}
          {groups.length > 0 ? (
            <FlatList
              data={groups}
              keyExtractor={(item) => item.groupId.toString()}
              renderItem={({ item }) => (
                <GroupBox
                  image={item.image}
                  title={item.groupName}
                  text={item.introduction}
                  isLeader={item.role === 'GROUP_LEADER'}
                  currentCount={item.memberCount}
                  maxCount={item.maxMemberCount}
                  onPress={() => console.log(`Group ${item.groupId} clicked!`)}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View style={{ height: 20 }} />}
            />
          ) : (
            <Text style={styles.noDataText}>해당 카테고리에 모임이 없습니다.</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default MyGroupsScreen;
