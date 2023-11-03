import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Input, Text} from "@rneui/themed";
import layoutStyles from "../styles/layoutStyles";

export default function Calculation1({onCalculate}) {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [d, setD] = useState('');

    const calculateResult = () => {
        const result = (parseFloat(a.replace(',', '.')) * parseFloat(b)) / parseFloat(c.replace(',', '.'))
        setD(result);
        onCalculate(d);
    };

    return (
        <View>
            <Text h4 style={[layoutStyles.text, layoutStyles.pt30, layoutStyles.pb30]}>Calculating the fishing line capacity to be used in the machine</Text>
            <Input
                placeholder="Recommended mono line thickness (mm)"
                value={a}
                keyboardType='numeric'
                onChangeText={(text) => setA(text)}
            />
            <Input
                placeholder="Recommended mono line length (m)"
                value={b}
                keyboardType='numeric'
                onChangeText={(text) => setB(text)}
            />
            <Input
                placeholder="Line thickness to be used (mm)"
                value={c}
                keyboardType='numeric'
                onChangeText={(text) => setC(text)}
            />
            <Button type="clear" title="Calculate" onPress={calculateResult}/>
            <Text>Calculating the fishing line capacity to be used in the machine: {d}</Text>
        </View>
    );
}
