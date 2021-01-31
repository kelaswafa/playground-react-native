import {Button, Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import React from 'react';

const App = () => {
  const [data, setData] = React.useState(0);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <StatusBar backgroundColor="#aaaddd" />
      <View
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: '#aaaddd',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: 50,
          elevation: 10,
          overflow: 'visible',
        }}>
        <View
          style={{
            width: '80%',
            padding: 10,
            marginBottom: -30,
            borderRadius: 10,
            elevation: 4,
            backgroundColor: '#fff',
            shadowOpacity: 1,
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: 'https://github.com/mwafa.png',
            }}
            style={{
              borderRadius: 50 / 2,
              width: 50,
              height: 50,
            }}
          />
          <View style={{marginLeft: 15}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Muhammad Wafa
            </Text>
            <Text style={{color: '#555'}}>Rp. {data}.000,-</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '80%',
        }}>
        <Button
          onPress={() => {
            setData((n) => n + 1);
          }}
          accessibilityLabel="Tekan untuk tambah"
          title="tambah"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
