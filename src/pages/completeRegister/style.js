import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0B0633',
  },

  content: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  backButton: {
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 25,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TextsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
    fontSize: 10,
  },
  ColorTexts: { color: '#FF4949', fontSize: 15 },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    padding: 15,
    borderRadius: 10,
  },
  btnSubmit: {
    marginTop: 15,
    backgroundColor: '#FF4949',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnSendPhoto: {
    // marginTop: 15,
    backgroundColor: '#696969',
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#fff',
    fontSize: 17,
  },
  loading: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0B0633',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
  },

});
