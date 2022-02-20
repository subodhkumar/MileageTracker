import { View, Pressable, TextInput } from 'react-native';
import {
  COLOR_PRIMARY,
  ICON_DOLLAR_SIGN,
  ICON_GAS,
  ICON_MILEAGE,
  ICON_DATE,
  SIZE_XXLARGE,
  COLOR_WHITE,
  COLOR_MUTE,
  ICON_LEFT_ARROW,
  ICON_CHECK,
  SIZE_LARGE,
} from '../../constants';
import { useState } from 'react';
import { PrefixIcon } from '../../components/PrefixIcon';
import { styles } from '../../styles';
import { CustomTextInput } from '../../components/CustomTextInput/input';
import { MuteText } from '../../components/MuteText';
import { CustomText } from '../../components/CustomText';
import { useDispatch, useSelector } from 'react-redux';
import { formatDateToLocale } from '../../utils';
import { CustomIcon } from '../../components/CustomIcon';
import { addRefuel } from '../../store/refuel/refuelSlice';
import DateTimePicker from '@react-native-community/datetimepicker';

export function AddEntryScreen({ navigation }) {
  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [gas, setGas] = useState('');
  const [price, setPrice] = useState('');
  const [odometer, setOdometer] = useState('');

  const dispatch = useDispatch();

  const onDateOrTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const isValidOdometer = (odometer) =>
    odometer && lastEntry && parseInt(odometer) > parseInt(lastEntry.odometer);
  const isValidGas = (gas) => gas && gas !== '';
  const isValidPrice = (price) => price && price != '';
  const isValidDateTime = (date) => date && lastEntry && new Date(date) > new Date(lastEntry.date);

  const isValidData = () =>
    isValidOdometer(odometer) && isValidGas(gas) && isValidPrice(price) && isValidDateTime(date);

  const resetData = () => {
    setOdometer('');
    setGas('');
    setPrice('');
    setDate(new Date(Date.now()));
  };

  const onPressSave = () => {
    if (isValidData()) {
      dispatch(
        addRefuel({
          odometer,
          gas,
          price,
          date: date.toISOString(),
        })
      );
      resetData();
      onPressBack();
    }
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const firstEntry = {
    odometer: -1,
    gas: 0,
    price: 0,
    date: new Date('1700-01-01T00:00:00').toISOString(),
  };

  const lastEntry = useSelector(({ refuel: { data } }) => {
    if (data.length) {
      return data[0];
    } else {
      return firstEntry;
    }
  });
  const { h100, bgDark, pv20, ph20, fRow, mv20, alignItemsCenter } = styles;

  const AddEntryHeader = () => (
    <View
      style={[
        fRow,
        mv20,
        alignItemsCenter,
        {
          height: 50,
        },
      ]}
    >
      <View style={{ width: 40 }}>
        <Pressable onPress={onPressBack}>
          <CustomIcon icon={ICON_LEFT_ARROW} size={SIZE_XXLARGE} />
        </Pressable>
      </View>

      <View style={{ flex: 4 }}>
        <CustomText text={'Add Entry'} size={SIZE_LARGE} />
      </View>

      <View style={{ width: 40 }}>
        <Pressable onPress={onPressSave}>
          <CustomIcon
            icon={ICON_CHECK}
            size={SIZE_XXLARGE}
            color={isValidData() ? COLOR_WHITE : COLOR_MUTE}
          />
        </Pressable>
      </View>
    </View>
  );
  const RowDateTime = () => (
    <PrefixIcon icon={ICON_DATE} iconSize={SIZE_XXLARGE} iconColor={COLOR_PRIMARY}>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <CustomTextInput
              label={'Date'}
              style={styles.input}
              onPressIn={showDatepicker}
              value={date.toLocaleDateString()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomTextInput
              label={'Time'}
              style={styles.input}
              onPressIn={showTimepicker}
              value={date.toLocaleTimeString()}
            />
          </View>
        </View>
        {date && !isValidDateTime(date) && (
          <View style={{ paddingLeft: 15 }}>
            <CustomText
              color={COLOR_MUTE}
              style={{ paddingLeft: 10 }}
              text={`Date & Time should be greater than Last entry ${formatDateToLocale(
                lastEntry.date
              )}`}
            />
          </View>
        )}
      </View>
    </PrefixIcon>
  );
  return (
    <View style={[h100, bgDark, pv20, ph20]}>
      <AddEntryHeader />
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onDateOrTimeChange}
          />
        )}
      </View>

      <PrefixIcon icon={ICON_MILEAGE} iconSize={SIZE_XXLARGE} iconColor={COLOR_PRIMARY}>
        <CustomTextInput
          style={[styles.input]}
          placeholder={'Odometer (mi)'}
          placeholderTextColor={COLOR_MUTE}
          keyboardType="numeric"
          value={odometer ? odometer.toString() : ''}
          onChangeText={setOdometer}
        >
          {lastEntry && (
            <MuteText
              text={`${
                odometer && !isValidOdometer(odometer) ? 'Should be greater than ' : ''
              }Last Value: ${lastEntry.odometer < 0 ? 0 : lastEntry.odometer}`}
              suffix={'mi'}
            />
          )}
        </CustomTextInput>
      </PrefixIcon>

      <PrefixIcon icon={ICON_GAS} iconSize={SIZE_XXLARGE} iconColor={COLOR_PRIMARY}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.input}
              placeholder={'Gas(l)'}
              placeholderTextColor={COLOR_MUTE}
              value={gas ? gas.toString() : ''}
              onChangeText={setGas}
              keyboardType="numeric"
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomTextInput
              label={'Gas type'}
              style={[styles.input]}
              placeholder={'Gastype'}
              defaultValue={'Regular'}
              placeholderTextColor={COLOR_MUTE}
              editable={false}
            />
          </View>
        </View>
      </PrefixIcon>

      <PrefixIcon icon={ICON_DOLLAR_SIGN} iconSize={SIZE_XXLARGE} iconColor={COLOR_PRIMARY}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.input}
              placeholder={'Price/L'}
              placeholderTextColor={COLOR_MUTE}
              value={price ? price.toString() : ''}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.input}
              placeholder={'Total Cost'}
              placeholderTextColor={COLOR_MUTE}
              editable={false}
              value={
                (gas && price && (parseFloat(gas) * parseFloat(price)).toFixed(3).toString()) || ''
              }
            />
          </View>
        </View>
      </PrefixIcon>

      <RowDateTime />
    </View>
  );
}
