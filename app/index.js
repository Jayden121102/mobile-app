import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, FONTS } from '../recorder-mobile-app/src/constants';
import { fonts, icons, images } from '../recorder-mobile-app/src/assets'


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.
        charcoalgray}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.charcoalgray}
                }}
            />
        </SafeAreaView>
    )
}

export default Home;