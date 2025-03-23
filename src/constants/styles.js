// constants/styles.js
import { StyleSheet } from 'react-native';
import { NAV_BAR_COLOR, PRIMARY_BACK_COLOR } from './colors';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_BACK_COLOR,
  },
  header: {
    backgroundColor: NAV_BAR_COLOR,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
},
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    marginLeft: 10,
    // paddingVertical: 5,
    // paddingHorizontal: 10,
    // backgroundColor: '#ddd',
    // borderRadius: 5,
},
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
