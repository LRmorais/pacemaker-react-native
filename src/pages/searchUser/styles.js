import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    // flex: 1,
    backgroundColor: '#0B0633',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  goBackButton: {
    width: '100%',
    paddingTop: '15%',
    // height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  goBackText: {
    color: '#FF4949',
    fontWeight: '800',
    fontSize: 25,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#4E4B67',
    width: '90%',
    marginBottom: 15,
    color: '#fff',
    fontSize: 17,
    padding: 15,
    borderRadius: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 50,
    flexDirection: 'row',
    borderLeftColor: '#fff',
    // backgroundColor: '#fff',
    padding: 20,
    marginVertical: 7,
    justifyContent: 'space-between',
    borderRadius: 10,
    // marginHorizontal: 16,
  },
});
