import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>برنامه کاهش وزن برای شما</Text>
      <View style={styles.top}>
        <View style={styles.statusContainer}>
          <View>
            <Text>مبتدی</Text>
            <Text style={styles.link}>سطح آمادگی</Text>
          </View>
          <View>
            <Text>9هفته</Text>
            <Text style={styles.link}>مدت زمان </Text>
          </View>
          <View>
            <Text>کاهش وزن</Text>
            <Text style={styles.link}> هدف </Text>
          </View>
        </View>
      </View>
      <View style={styles.middle}>
        <View style={styles.block}>
          <Image style={styles.pen} source={require('./assets/icon/pen.png')} />
          <Image
            style={styles.tinyLogo}
            source={require('./assets/icon/1.png')}
          />
          <Text>خانه</Text>
          <Text style={styles.link}>محل ورزش</Text>
        </View>
        <View style={styles.block}>
          <Image style={styles.pen} source={require('./assets/icon/pen.png')} />
          <Image
            style={styles.tinyLogo}
            source={require('./assets/icon/2.png')}
          />
          <Text>2 روز</Text>
          <Text style={styles.link}>ورزش در هفته</Text>
        </View>
        <View style={styles.block}>
          <Image style={styles.pen} source={require('./assets/icon/pen.png')} />
          <Image
            style={styles.tinyLogo}
            source={require('./assets/icon/3.png')}
          />
          <Text>10-15</Text>
          <Text style={styles.link}>دقیقه در هفته</Text>
        </View>
      </View>
      <View style={styles.date}>
        <Image style={styles.pen} source={require('./assets/icon/pen.png')} />
        <View style={styles.rw}>
          <View style={styles.cntnt}>
            <Text>70/30/3</Text>
            <Text style={styles.link}>تاریخ تولد</Text>
          </View>
          <View style={styles.cntnt}>
            <Text>90</Text>
            <Text style={styles.link}>وزن شما</Text>
          </View>
          <View style={styles.cntnt}>
            <Text>182</Text>
            <Text style={styles.link}>قد شما</Text>
          </View>
          <View style={styles.cntnt}>
            <Text>مرد</Text>
            <Text style={styles.link}>جنسیت</Text>
          </View>
        </View>
      </View>
      <View style={styles.prize}>
        <Image style={styles.coin} source={require('./assets/img/coin.png')} />
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={{color:'#FF7010', fontSize:30,fontWeight:'bold'}}>2.500.000</Text>
          <Text>دومیلیون و پانصد هزار تومان</Text>
        </View>
        <Image
          style={styles.Logo}
          source={require('./assets/icon/danger.png')}
        />
      </View>
      <View style={styles.bmi}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Logo: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  coin: {
    maxHeight: 60,
    maxWidth: 80,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    marginTop: 52,
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  top: {
    height: '23%',
    backgroundColor: 'pink',
    borderRadius: 22,
    marginTop: 20,
    marginHorizontal: 20,
  },
  link: {
    fontSize: 9,
    color: '#6FCF97',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    height: '11%',
  },
  block: {
    flexDirection: 'column',
    backgroundColor: 'pink',
    width: '30%',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    height: '8%',
    borderRadius: 22,
    backgroundColor: 'pink',
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  prize: {
    height: '10%',
    borderRadius: 22,
    backgroundColor: 'pink',
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bmi: {
    height: '18%',
    borderRadius: 22,
    backgroundColor: 'pink',
    marginTop: 20,
    marginHorizontal: 20,
  },
  pen: {
    alignSelf: 'flex-start',
    marginTop: 9,
    marginLeft: 9,
  },
  tinyLogo: {
    maxHeight: 18,
    maxWidth: 18,
  },
  rw: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cntnt: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
