import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { colors } from '../../../helpers/constants';
import ButtonGradient from '../../ButtonGradient';

export const ChangeSSID = () => {

    const [dataTable, setDataTable] = useState("");
  return (
    <View style={ styles.mainContainer }>
        <View style={ styles.containerTitle }>
            <Text style={ styles.title }>Change SSID</Text>
        </View>
        <View>
            <DataTable.Row>
                <DataTable.Cell numeric>WIFI network name (SSID):</DataTable.Cell>
                <DataTable.Cell numeric>
                <View>
                    <TextInput
                        value={ 'Zetifi' }
                        onChangeText={ setDataTable }
                        placeholder={ 'SSID' }
                        style={styles.textInput}
                        />
                </View>
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell numeric>WIFI Password:</DataTable.Cell>
                <DataTable.Cell numeric>
                <View>
                    <TextInput
                        value={ dataTable }
                        onChangeText={ setDataTable }
                        placeholder={ '65465465' }
                        style={styles.textInput}
                    />
                </View>
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell numeric>Confirm Password:</DataTable.Cell>
                <DataTable.Cell numeric>
                <View>
                    <TextInput
                        value={ dataTable }
                        onChangeText={ setDataTable }
                        placeholder={ '65465465' }
                        style={styles.textInput}
                    />
                </View>
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell numeric>WPA Group Rekey Interval:</DataTable.Cell>
                <DataTable.Cell numeric>
                <View>
                    <TextInput
                        value={ dataTable }
                        onChangeText={ setDataTable }
                        placeholder={ '65465465' }
                        style={styles.textInput}
                    />
                </View>
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell numeric>WPA/WAPI Encryption:</DataTable.Cell>
                <DataTable.Cell numeric>
                <View>
                    <TextInput
                        value={ dataTable }
                        onChangeText={ setDataTable }
                        placeholder={ '65465465' }
                        style={styles.textInput}
                    />
                </View>
                </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell numeric>WIFI Security Type:</DataTable.Cell>
                <DataTable.Cell numeric>
                <View>
                    <TextInput
                        value={ dataTable }
                        onChangeText={ setDataTable }
                        placeholder={ '65465465' }
                        style={styles.textInput}
                    />
                </View>
                </DataTable.Cell>
            </DataTable.Row>
        </View>
        <View>
            <ButtonGradient label={"Save and Apply"} buttonEvent={ () => { handleLogin( email, password ) }} disabled={ false }/>
        </View>
    </View>
  )
}

export default ChangeSSID;

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