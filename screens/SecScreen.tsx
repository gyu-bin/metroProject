import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const SecScreen = () => {
  const [selectedLine, setSelectedLine] = useState<any>('');
  const [selectedStation, setSelectedStation] = useState<any>('');

  // 각 호선에 따른 역 리스트
  const stationList = {
    '1호선': ['청량리', '시청', '종각', '종로3가', '종로5가'],
    '2호선': ['신도림', '홍대입구', '을지로입구', '건대입구', '강남'],
    '3호선': ['신도림', '홍대입구', '을지로입구', '건대입구', '강남'],
    '4호선': ['신도림', '홍대입구', '을지로입구', '건대입구', '강남'],
    '5호선': ['신도림', '홍대입구', '을지로입구', '건대입구', '강남'],
    '6호선': ['신도림', '홍대입구', '을지로입구', '건대입구', '강남'],
    '7호선': ['신도림', '홍대입구', '을지로입구', '건대입구', '강남'],
    '8호선': ['신도림', '홍대입구', '을지로입구', '건대입구', '강남'],
    '9호선': ['양천향교', '가양', '여의도', '노량진', '강남']
    // 나머지 호선들의 역 리스트도 추가
  };

  // 호선 선택 시 호출되는 함수
  const handleLineChange = (line:any) => {
    setSelectedLine(line);
    // 호선이 변경될 때 선택된 역 초기화
    setSelectedStation('');
  };

  // 역 선택 시 호출되는 함수
  const handleStationChange = (station:any) => {
    setSelectedStation(station);
  };

  
  return (
    <View>
      {/* 호선 선택 */}
      <Text>호선 선택:</Text>
      <Picker
        selectedValue={selectedLine}
        onValueChange={(itemValue) => handleLineChange(itemValue)}
      >
        <Picker.Item label="1호선" value="1호선" />
        <Picker.Item label="2호선" value="2호선" />
        <Picker.Item label="3호선" value="3호선" />
        <Picker.Item label="4호선" value="4호선" />
        <Picker.Item label="5호선" value="5호선" />
        <Picker.Item label="6호선" value="6호선" />
        <Picker.Item label="7호선" value="7호선" />
        <Picker.Item label="8호선" value="8호선" />
        <Picker.Item label="9호선" value="9호선" />
        {/* 나머지 호선들의 Picker.Item 추가 */}
      </Picker>
      
      {/* 역 선택 */}
      <Text>역 선택:</Text>
      <Picker
        selectedValue={selectedStation}
        onValueChange={(itemValue) => handleStationChange(itemValue)}
      >
        {/* 선택된 호선에 따른 역 목록 렌더링 */}
        {stationList[selectedLine] && stationList[selectedLine].map((station:any, index:any) => (
          <Picker.Item key={index} label={station} value={station} />
        ))}
      </Picker>

      <Text>혼잡도</Text>
      {/* <Text>{selectedLine},{selectedStation}</Text> */}
    </View>
  );
};

export default SecScreen;
