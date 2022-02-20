import { StyleSheet } from 'react-native';
import {
  COLOR_BG,
  COLOR_BG_DARK,
  COLOR_DANGER,
  COLOR_MUTE,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from '../constants';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_BG_DARK,
    color: COLOR_WHITE,
    paddingVertical: 20,
  },
  primary: {
    backgroundColor: COLOR_PRIMARY,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    borderColor: COLOR_MUTE,
    padding: 10,
    borderRadius: 5,
    color: COLOR_WHITE,
  },
  clearDataButton: {
    position: 'absolute',
    bottom: 85,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderColor: COLOR_DANGER,
    borderWidth: 1,
    elevation: 5,
    opacity: 0.75,
  },
  addEntryButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    opacity: 0.75,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY,
  },
  textSm: {
    fontSize: 12,
  },
  textMd: {
    fontSize: 15,
  },
  textLg: {
    fontSize: 18,
  },
  textXl: {
    fontSize: 21,
  },
  cardContent: {
    backgroundColor: COLOR_BG,
    borderRadius: 15,
    elevation: 3,
  },
  mh10: {
    marginHorizontal: 10,
  },
  mh20: {
    marginHorizontal: 20,
  },
  mv10: {
    marginVertical: 10,
  },
  mv20: {
    marginVertical: 20,
  },
  ph10: {
    paddingHorizontal: 10,
  },
  ph20: {
    paddingHorizontal: 20,
  },
  pv5: {
    paddingVertical: 5,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv20: {
    paddingVertical: 20,
  },
  bgPrimary: {
    backgroundColor: COLOR_PRIMARY,
  },
  bgDefault: {
    backgroundColor: COLOR_BG,
  },
  bgDark: {
    backgroundColor: COLOR_BG_DARK,
  },
  fRow: {
    flexDirection: 'row',
  },
  cPrimary: {
    color: COLOR_PRIMARY,
  },
  cWhite: {
    color: COLOR_WHITE,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  timeLineLeft: {
    left: 30,
  },
  h100: {
    height: '100%',
  },
});
