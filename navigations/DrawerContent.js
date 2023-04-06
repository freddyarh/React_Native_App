import React, { useContext }from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    List,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../helpers/constants/colors'
import{ AuthContext } from '../context/AuthContext';


export function DrawerContent(props) {
    
    const { signOut } = useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'column',marginTop: 15}}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/images/logo.jpg')}
                            resizeMode="contain"
                        /> 
                        </View>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'image'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Fredy Aristizabal</Title>
                                <Caption style={styles.caption}>user@gmail.com</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}></Paragraph>
                                <Caption style={styles.caption}>3 Devices connected</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home" 
                                color={ colors.simplifyBlue }
                                size={size}
                                />
                            )}

                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                            labelStyle={ styles.listItem }
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="git-network" 
                                color={ colors.simplifyBlue }
                                size={size}
                                />
                            )}
                            label="Device Registration"
                            onPress={() => {props.navigation.navigate('Device Registration')}}
                            labelStyle={ styles.listItem }
                        />
                        <List.AccordionGroup>
                            <List.Accordion 
                                title="Manage Devices" 
                                titleStyle={ styles.listItem }
                                left={props => <List.Icon {...props} icon="cog" color={ colors.simplifyBlue } style={{marginRight:24}} />}
                                style={{backgroundColor: 'white', marginLeft:10, fontSize:40}} 
                                id="1"
                            >
                                <List.Item 
                                    title="Throttle Device" 
                                    titleStyle={ styles.listItem }
                                    left={props => <List.Icon {...props} icon="speedometer" color={ colors.simplifyBlue } />}
                                    onPress={() => {props.navigation.navigate('Throttle')}} 
                                    style={{marginLeft:17}}
                                />
                                <List.Item 
                                    title="Troubleshoot Connection"
                                    titleStyle={ styles.listItem } 
                                    left={props => <List.Icon {...props} icon="tools" color={ colors.simplifyBlue } />}
                                    onPress={() => {props.navigation.navigate('Troubleshoot Connection')}} 
                                    style={{marginLeft:17}}
                                />
                                <List.Item 
                                    title="Change SSID"
                                    titleStyle={ styles.listItem } 
                                    left={props => <List.Icon {...props} icon="wifi" color={ colors.simplifyBlue } />}
                                    onPress={() => {props.navigation.navigate('Change SSID')}}
                                    style={{marginLeft:17}}
                                />
                                <List.Item 
                                    title="Update Firmware"
                                    titleStyle={ styles.listItem } 
                                    left={props => <List.Icon {...props} icon="download" color={ colors.simplifyBlue } />}
                                    onPress={() => {props.navigation.navigate('Update Firmware')}} 
                                    style={{marginLeft:17}}
                                />
                            </List.Accordion>
                        </List.AccordionGroup>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="card" 
                                color={ colors.simplifyBlue }
                                size={size}
                                />
                            )}
                            label="Billing"
                            onPress={() => {props.navigation.navigate('Billing')}}
                            labelStyle={ styles.listItem }
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="log-out" 
                        color={ colors.simplifyBlue }
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={ signOut }
                    labelStyle={ styles.listItem }
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    logo: {
        width: '30%',
        minWidth: 240,
        maxHeight: 200,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontFamily: 'FieldGeoRegular', 
      color: colors.gray
    },
    listItem: {
        fontSize: 15, 
        fontFamily: 'FieldGeoRegular', 
        color: colors.gray
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });