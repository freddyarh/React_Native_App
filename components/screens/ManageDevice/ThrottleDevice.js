import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { ProgressChart } from "react-native-chart-kit";
import { DataTable, Switch, Checkbox  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonGradient from '../../ButtonGradient';
import { colors } from '../../../helpers/constants';


export const ThrottleDevice = () => {

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isOneSwitch, setIsOneSwitch] = useState(false);
  const [isTwoSwitch, setIsTwoSwitch] = useState(false);
  const [isRowSwitchOn, setRowIsSwitchOn] = useState({
    switchOne: false,
    switchTwo: true,
  });
  const [isChecked, setIsChecked] = useState('checked');
  const [isTwoChecked, setTwoIsChecked] = useState('checked');

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onOneSwitch = () => setIsOneSwitch(!isOneSwitch);
  const onTwoSwitch = () => setIsTwoSwitch(!isTwoSwitch);

  const handleChengeSwitch = (event) => {
    console.log(event)
    setRowIsSwitchOn(() => ({ switchTwo: false}))
  }

  const Head = () => {
    return (
        <View style={ styles.containerTitle }>
            <Text style={ styles.title }>Connected Devices</Text>
        </View>
    )
  }
  
  const Table = () => {
    return (
        <>
            <View>
                <ProgressChart
                data={[1, 0.6, 0.8]}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                }}
                style={{
                marginVertical: 8,
                borderRadius: 16,
                }}
            />
            </View>
            <View>
                <DataTable.Header>
                    <DataTable.Title sortDirection='descending'>
                        Devices
                    </DataTable.Title>
                    <DataTable.Title numeric>Throttle</DataTable.Title>
                    <DataTable.Title numeric>Block</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell numeric>Device one</DataTable.Cell>
                    <DataTable.Cell numeric>
                    <View>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                    <View>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell numeric><Text>Device two</Text></DataTable.Cell>
                    <DataTable.Cell numeric>
                    <View>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                    <View>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                    </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell numeric>Device thre</DataTable.Cell>
                    <DataTable.Cell numeric>
                    <View>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                    <View>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                    </DataTable.Cell>
                </DataTable.Row>
            </View>
        </>
    )
  }

  const Body = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
            <View style={{ flexDirection: 'column', justifyContent: 'space-around'}}>
                <Text style={{ fontWeight: 'bold'}}>Devices</Text>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text>Device one</Text>
                    </View>
                    <View>
                        <Text>IP address 12.25.36.2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Icon 
                            name="arrow-down" 
                            color={ colors.zetifiBlue }
                            size={18}
                        />
                        <Text>Mbps</Text>
                        <Icon 
                            name="arrow-up" 
                            color={ colors.zetifiBlue }
                            size={18}
                        />
                        <Text>Mbps</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text>Device two</Text>
                    </View>
                    <View>
                        <Text>IP address 12.25.36.2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Icon 
                            name="arrow-down" 
                            color={ colors.zetifiBlue }
                            size={18}
                        />
                        <Text>Mbps</Text>
                        <Icon 
                            name="arrow-up" 
                            color={ colors.zetifiBlue }
                            size={18}
                        />
                        <Text>Mbps</Text>
                    </View>
                </View>
            </View>
            <View style={ styles.devicesColumn }>
                <Text style={{ fontWeight: 'bold', textAlign: 'center'}}>Throtle</Text>
                <View>
                    <Switch value={ isOneSwitch } onValueChange={ onOneSwitch } />
                </View>
                <View>
                    <Switch value={ isTwoSwitch } onValueChange={ onTwoSwitch } />
                </View>
            </View>
            <View style={ styles.devicesColumn }>
                <Text style={{ fontWeight: 'bold', textAlign: 'center'}}>Block</Text>                
                <View>
                    <Checkbox.Item status={ isChecked } onPress={ () => isChecked === 'checked' ?  setIsChecked('unchecked') :  setIsChecked('checked')} />
                </View>
                <View>
                    <Checkbox.Item status={ isTwoChecked } onPress={ () => isTwoChecked === 'checked' ?  setTwoIsChecked('unchecked') :  setTwoIsChecked('checked')} />
                </View>
            </View>
        </View>
    )
  }

  return (
    <ScrollView>
        <View style={ styles.mainContainer }>
            <Head />
            <Table />
            <Body />
            <View>
                <ButtonGradient label={"Save"} buttonEvent={ () => { handleLogin( email, password ) }} disabled={ false }/>
            </View>
        </View>
    </ScrollView>
  )
}

export default ThrottleDevice

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '5%',
        paddingVertical: '5%'
    },
    containerTitle: {
        alignItems: 'center',
        marginHorizontal: '5%',
    },
    title: {
        fontSize: 30,
        color: colors.zetifiBlue,
        fontWeight: 'bold',
    },
    devicesColumn: {
        flexDirection: 'column', 
        justifyContent: 'space-between'
    }
})