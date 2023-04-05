import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../helpers/constants';
import ButtonGradient from '../ButtonGradient';

export class Billing extends Component {
  render() {
    return (
      <ScrollView>
        <View style={ styles.container }>
          <Text style={ styles.title}>Pay your bill</Text>
          <View style={ [styles.card, styles.elevation]}>
            <View style={ styles.card_child_1 }>
              <Text>Fredy Aristizabal </Text>
              <Text>Account number: <Text style={{fontWeight: 'bold'}}>58333154</Text></Text>
            </View>
            <View style={styles.row}>
                <View style={styles.section}>
                    <Text>Payment reference: </Text>
                    <Text>132513251352156</Text>
                </View>
            </View>
            <View style={ styles.card_child_3 }>
              <Text>Services: </Text>
              <Text>Zetifi cell</Text>
            </View>
          </View>
          <View style={ [styles.card_2, styles.elevation]}>
            <View style={ styles.card2_child_1 }>
              <Text style={styles.titleCurrentBill}>Current bill</Text>
            </View>
            <View style={ styles.card2_child_2 }>
              <Text style={styles.titleCurrentBill}>Price to pay:</Text>
              <Text style={styles.price}>$80</Text>
            </View>
            <View style={styles.row2}>
              <Icon 
              name="information" 
              color={ colors.zetifiBlue }
              size={18}
              />
              <View style={styles.section}>
                  <Text style={styles.titlePayReference}>Date to pay: </Text>
                  <Text>30/January/2023</Text>
              </View>
            </View>
            <View>
              <Text style={{ textAlign: 'center', color: colors.black }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
          <View/>
          <ButtonGradient label={'Pay'} />
        </View>
        </View>
      </ScrollView>
    )
  }
}

export default Billing;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: '5%',
      alignItems: 'center',
      backgroundColor: colors.white,
  },
  title: {
    fontSize: 30,
    color: colors.zetifiBlue,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    alignItems:'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    width: '100%',
    marginBottom: 30,
    marginTop: 20
  },
  card_child_1: {
    backgroundColor: colors.lightBlue,
    width: '92%',
    borderRadius: 3,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems:'center',
  },
  card_child_3: {
    backgroundColor: colors.lightBlue,
    width: '100%',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    alignItems:'center',
    padding: 10,
  },
  card_2: {
    flex: 1,
    alignItems:'center',
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 30
  },
  card2_child_1: {
    backgroundColor: colors.lightBlue,
    width: '100%',
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    alignItems:'center',
    paddingBottom: 10,
  },
  card2_child_2: {
    backgroundColor: colors.white,
    width: '80%',
    borderRadius: 5,
    alignItems:'center',
    padding: 10,
  },
  textService:{
    marginTop: 15,
    fontWeight: 'bold'
  },
  elevation: {
    elevation: 8,
    shadowColor: colors.black,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 15,
  },
  row2: {
    flexDirection: 'row',
    backgroundColor: colors.lightBlue,
    margin: 15,
  },
  section: {
    flexDirection: 'row'
  },
  titlePayReference: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  titleCurrentBill: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold'
  },
  price: {
    marginTop: 18,
    fontSize: 30,
    color: colors.obsidium
  }
});