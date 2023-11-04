import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import {Input} from "@rneui/themed";
import layoutStyles from "../styles/layoutStyles";

export default function Calculation3({f}) {
    const [g, setG] = useState('');
    const [h, setH] = useState('');
    const [ı, setI] = useState('');

    const calculateResult = () => {
        const result = (parseFloat(f) * parseFloat(g.replace(',', '.'))) / parseFloat(h.replace(',', '.'));
        setI(result);
    };

    return (
        <View>
            <Text h4 style={layoutStyles.text}>Calculating the fishing line capacity to be used in the machine</Text>
            <Input
                placeholder="Line capacity to be filled in the machine (m)"
                value={f.toString()}
                keyboardType='numeric'
                onChangeText={(text) => setF(text)}
            />
            <Input
                placeholder="Line thickness to be used (mm)"
                value={g}
                keyboardType='numeric'
                onChangeText={(text) => setG(text)}
            />
            <Input
                placeholder="Line thickness to be filled (mm)"
                value={h}
                keyboardType='numeric'
                onChangeText={(text) => setH(text)}
            />
            <Button title="Calculate" onPress={calculateResult} />
            <Text>Filler line capacity to be wound on the machine (m): {ı}</Text>
        </View>
    );
}
