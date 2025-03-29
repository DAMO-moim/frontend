import { StyleSheet } from 'react-native';
import { BLACK_COLOR, ERROR_COLOR, G_DARKER_COLOR, G_LIGHT_COLOR, NAV_BAR_COLOR, PRIMARY_BACK_COLOR, PRIMARY_BTN_COLOR, WHITE_COLOR } from './colors';

export const commonStyles = StyleSheet.create({
  container: {
    width:'100%',
    fontFamily: 'NotoSansKR-Regular',
    minHeight:'100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: PRIMARY_BACK_COLOR,
    padding: 16,
  },
  centerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer:{
    width:'100%',
    paddingVertical:16,
    // borderWidth:1,
    // borderColor:BLACK_COLOR,
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignContent:'space-between',
  },
  header: {
    backgroundColor: NAV_BAR_COLOR,
    height: 80,
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

export const homeStyles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_BACK_COLOR,
    height:'100%'
  }
});

export const commonCircle = StyleSheet.create({
  outer: {
    width: 11, 
    height: 11,
    borderRadius: 100, 
    borderColor: '#66D3A5', 
    borderWidth: 1,
    position:'relative',
    marginTop:4,
  },
  inner:{
    width: 6, 
    height: 6,
    position:'absolute',
    top:'50%',
    left:'50%',
    transform: [
      { translateX: '-52%' }, 
      { translateY: '-52%' }, 
    ],
    borderRadius: 100, 
    backgroundColor: '#66D3A5', 
  }
})

export const commonShadow = StyleSheet.create({
  btnShadow:{
    borderWidth:1,
    borderColor:BLACK_COLOR,
    borderStyle:'solid',
    boxShadow:'4px 4px 0 0 rgba(0,0,0,0.9)'
  },
  btnNoBdShadow:{
    boxShadow:'4px 4px 0 0 rgba(0,0,0,0.9)'
  },
  mainShadow:{
    borderWidth:1,
    borderColor:BLACK_COLOR,
    borderStyle:'solid',
    boxShadow:'5px 5px 0 0 rgba(0,0,0,0.9)'
  }
})

export const commonBtn = StyleSheet.create({
  btnBox : {
    width: "100%",
    backgroundColor: PRIMARY_BTN_COLOR,
    boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.9)",
    // paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: BLACK_COLOR,
  },
  btnText:{
    textAlign: 'center',
    fontSize: 18,
    color: BLACK_COLOR,
  },

   // 비활성화 상태 스타일
   disabledBtn: {
    backgroundColor: G_LIGHT_COLOR, 
  },
  disabledText: {
    color: G_DARKER_COLOR, 
  },
})

export const commonRadio = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center'
  },
  radioGroup:{
    display:'flex',
    flexDirection:'row',
    gap: 14
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2, 
    paddingVertical: 2, 
  },
  radioLabel: {
    marginLeft: 6,
    fontSize: 14,
  },
})


export const categoryIcon = StyleSheet.create({
  gContainer:{
    paddingVertical:10,
    overflow: 'hidden',
  },
  container:{
    width: 60,
    height: 60,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:BLACK_COLOR,
    backgroundColor: WHITE_COLOR,
    borderRadius: 100,
    boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer:{
    flexDirection: 'row',
    gap: 10
  },
  image:{
    width: 34,
    resizeMode: "contain",
  }
});

export const commonInput = StyleSheet.create({
  container: {
    width: "100%",
    fontFamily: 'NotoSansKR-Regular'
  },
  label: {
    fontSize: 14,
    fontWeight: 'medium',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderColor: BLACK_COLOR,
    borderWidth: 1,
    marginBottom: 4,
    paddingHorizontal: 10,
    backgroundColor: WHITE_COLOR,
    borderRadius: 8, // 둥근 모서리
  },
  error:{
    borderColor: ERROR_COLOR,
    borderWidth: 1,
  },
  description: {
    fontSize: 12,
    color: 'gray',
  },
});

export const passwordInput = StyleSheet.create({
  container: {
    width: "100%",
    fontFamily: 'NotoSansKR-Regular'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BLACK_COLOR,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: WHITE_COLOR,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: BLACK_COLOR,
  },

});
