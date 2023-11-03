import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Input} from '@rneui/themed';
import layoutStyles from '../styles/layoutStyles';

export default function Calculation2({d}) {
    const [e, setE] = useState('');
    const [f, setF] = useState('');

    const calculateResult = () => {
        const result = d - parseFloat(e);
        setF(result);
    };

    return (
        <View>
            <Text h4 style={layoutStyles.text}>Calculating the fishing line capacity to be used for filling</Text>
            <Input
                placeholder="Line capacity to be wound on the machine (m)"
                value={d}
                keyboardType='numeric'
                disabled
            />
            <Input
                placeholder="Line capacity of the machine"
                value={e}
                keyboardType='numeric'
                onChangeText={(text) => setE(text)}
            />
            <Button title="Calculate" onPress={calculateResult}/>
            <Text>Calculating the fishing line capacity to be used for filling: {f}</Text>
        </View>
    );
}
