import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.175.95:3001',
});

// 전체 사용자 목록 조회
const axiosData1 = async () => {
  const { data } = await instance.get('/users');
  return data.data; // 배열 반환
};

// 특정 사용자 상세 정보 조회
const axiosData2 = async (id) => {
  const { data } = await instance.get(`/users/${id}`);
  return data.data; // 객체 반환
};

const MokoonTest = () => {
  const [id, setId] = useState(1);

  // 전체 사용자 목록 쿼리
  const { data: datas, isLoading: isLoading2 } = useQuery({
    queryKey: ['users'],
    queryFn: axiosData1,
  });

  // 특정 사용자 상세 정보 쿼리
  const { data, isLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => axiosData2(id),
    enabled: !!id, // id가 존재할 때만 쿼리 실행
  });

  console.log('Users:', datas);
  console.log('User Detail:', data);

  return (
    <View style={{ flex: 1 }}>
      {/* 전체 사용자 목록 */}
      {isLoading2 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={datas}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text>Name: {item.name}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Phone: {item.phone}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()} // id 사용
        />
      )}

      {/* 특정 사용자 상세 정보 */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={{ padding: 10 }}>
          <TouchableOpacity onPress={() => setId(id + 1)}>
            <Text>Next User</Text>
          </TouchableOpacity>
          <View>
            <Text>Name: {data?.name || '-'}</Text>
            <Text>Email: {data?.email || '-'}</Text>
            <Text>Phone: {data?.phone || '-'}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default MokoonTest;
