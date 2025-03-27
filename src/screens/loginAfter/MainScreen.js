import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { fetchCategories } from '../../api/queries/categoryService';
import CategoryIcons from '../../components/calendar/CategoryIcons';
import ScheduleCalendar from './ScheduleCalendar';


function MainScreen({ memberId, token }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories(memberId, token);
      setCategories(data);
    };
    
    loadCategories();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CategoryIcons categories={categories} />
      {/* 첫 번째 카테고리의 이름으로 달력을 표시 */}
      {categories.length > 0 && (
        <ScheduleCalendar categoryName={categories[0].categoryName} memberId={memberId} token={token} />
      )}
    </SafeAreaView>
  );
}

export default MainScreen;

