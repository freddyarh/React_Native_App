import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { colors } from '../../../helpers/constants';
import ButtonGradient from '../../ButtonGradient';
import { ProgressChart } from "react-native-chart-kit";

export const UpdateFirmware = () => {

    const [updatePorcent, setUpdatePorcent] = useState(0);
    const [buttonUpdate, setButtonUpdate] = useState(false);

    const handleUpdateChange = () => {
        const interval = setInterval(() => {
            setUpdatePorcent( () => updatePorcent + 1 );
            if( updatePorcent === 0 ){
                clearInterval(interval);
                setTimeout(() => {
                    alert('Device updated successfully');
                }, 1000);
                setButtonUpdate(true);
            }
        }, 1000);

    }
    return (
    <View style={ styles.mainContainer }>
        <View style={ styles.containerTitle }>
            <Text style={ styles.title }>Update Firmware</Text>
        </View>
        <View>
            <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
        </View>
        <View>
            <ProgressChart
                data={[updatePorcent]}
                width={Dimensions.get('window').width - 20}
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
        <ButtonGradient label={"Update Firmware"} buttonEvent={ handleUpdateChange } disabled={ buttonUpdate }/>
    </View>
  )
}

export default UpdateFirmware

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '5%'
    },
    containerTitle: {
        alignItems: 'center',
        margin: '5%'
    },
    title: {
        fontSize: 30,
        color: colors.simplifyBlue,
        fontWeight: 'bold',
    },
})