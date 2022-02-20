import { CustomText } from '../CustomText';
import { COLOR_MUTE } from '../../constants';

export function MuteText(props) {
  return <CustomText color={COLOR_MUTE} {...props} />;
}
