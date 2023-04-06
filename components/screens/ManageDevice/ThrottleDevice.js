import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ProgressChart } from "react-native-chart-kit";
import { DataTable, Switch } from 'react-native-paper';
import ButtonGradient from '../../ButtonGradient';
import { colors } from '../../../helpers/constants';


export const ThrottleDevice = () => {

  const [dataTable, setDataTable] = useState("");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    
    <View style={ styles.mainContainer }>
        <View style={ styles.containerTitle }>
            <Text style={ styles.title }>Connected Devices</Text>
        </View>
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
        <View>
            <ButtonGradient label={"Save"} buttonEvent={ () => { handleLogin( email, password ) }} disabled={ false }/>
        </View>
    </View>
  )
}

export default ThrottleDevice

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '5%'
    },
    containerTitle: {
        alignItems: 'center',
        margin: '5%',
    },
    title: {
        fontSize: 30,
        color: colors.zetifiBlue,
        fontWeight: 'bold',
    },
})