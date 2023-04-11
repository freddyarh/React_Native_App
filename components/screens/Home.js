import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../helpers/constants';


export function Home () {

  const Header = () => {
    return (
      <>
        <Text style={styles.title}>Welcome</Text>
      </>
    )
    
  }
  const Body = () => {
    return (
    <View>
        <Card>
          <Card.Content>
            <Card.Cover source={require('../../assets/images/cows.jpg')} />
            <Text variant="titleLarge" style={ styles.card }>This is our title</Text>
            <Text variant="bodyMedium" style={ styles.card }>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </Card.Content>
        </Card>
    </View>
    )
    
  }
  const Carousel = () => {
    return (
      <View>
        <Text style={ styles.carouselTitle }>Check your products</Text>
        <View style={ styles.row }>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={[ styles.box, styles.elevation, {backgroundColor: colors.white}]} onPress={ () => { alert('box 1') } }><Icon 
                name="bar-chart" 
                color={ colors.lightBlue }
                size={100}
                />
                <Text style={{ fontWeight: 'bold', color: colors.dark }}>Monthly statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ styles.box, styles.elevation, {backgroundColor: colors.white}]} onPress={ () => { alert('box 2') } }>
              <Icon 
                  name="location" 
                  color={ colors.lightBlue }
                  size={100}
                />
                <Text style={{ fontWeight: 'bold', color: colors.dark }}>Locate your device</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ styles.box, styles.elevation, {backgroundColor: colors.white}]} onPress={ () => { alert('box 3') } }>
              <Image
                // style={[styles.logo}
                source={require('../../assets/images/logo.jpeg')}
                resizeMode="contain"
              /> 
            </TouchableOpacity>
            <TouchableOpacity style={[ styles.box, styles.elevation, {backgroundColor: colors.white}]} onPress={ () => { alert('box 4') } }>
              <Icon 
                  name="wifi" 
                  color={ colors.lightBlue }
                  size={100}
                />
                <Text style={{ fontWeight: 'bold', color: colors.dark }}>Wifi network</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
    
  }
  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView>
        <Header />
        <Body />
        <Carousel />
        <Body />
      </ScrollView>
    </SafeAreaView>
  )
}


export default Home;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'white'
    },
  title: {
    fontSize: 30,
    fontFamily: 'FieldGeoRegular',
    color: colors.zetifiBlue,
    fontWeight: 'bold',
    margin:'5%',
    textAlign: 'center',
  },
  card: {
    margin: '1%',
    fontFamily: 'FieldGeoRegular',
  },
  box: {
    width: 180,
    height: 180,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.grayLight
  },
  elevation: {
    elevation: 8,
    shadowColor: colors.black,
  },
  carouselTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Arial-Ln',
    margin: 18,
    color: colors.zetifiBlue
  },
  image: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});