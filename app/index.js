import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import {COLORS,FONTS,SIZES,icons} from '../recorder-mobile-app/src/constants';
import { ScreenStackHeaderLeftView, ScreenStackHeaderRightView } from "react-native-screens";


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.
        charcoalgray}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.primary},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenStackHeaderLeftView iconURL={icons.menu} Dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenStackHeaderRightView iconURL={icons.menu} Dimension="100%" />
                    ),
                    headerTitle:""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;