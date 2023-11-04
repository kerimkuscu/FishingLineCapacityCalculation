import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Text} from '@rneui/themed';
import FirstCalculation from './pages/FirstCalculation';
import SecondCalculation from './pages/SecondCalculation';
import ThirdCalculation from './pages/ThirdCalculation';
import layoutStyles from './styles/layoutStyles';

export default function CalculatorApp() {
    const [step, setStep] = useState(1);
    const [d, setD] = useState(null);
    const [f, setF] = useState(null);

    const handleCalculate = (result) => {
        setD(result);
    };

    const handleCalculateSecond = (result) => {
        setF(result);
    }

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handleBackStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <ScrollView>
            <View style={layoutStyles.view}>
                <Text h2 style={layoutStyles.text}>Fishing Line Capacity Calculation</Text>
            </View>
            {step === 1 && <FirstCalculation onCalculate={handleCalculate} onStepNext={handleNextStep} />}
            {step === 2 && <SecondCalculation d={d} onCalculate={handleCalculateSecond} onStepNext={handleNextStep} />}
            {step === 3 && <ThirdCalculation f={f} />}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
                {step > 1 && (
                    <Button
                        buttonStyle={{ backgroundColor: '#6c757d' }}
                        title="< Back Step"
                        onPress={handleBackStep}
                    />
                )}
                {step < 3 && (
                    <Button
                        buttonStyle={{ backgroundColor: '#6c757d' }}
                        title="Next Step >"
                        onPress={handleNextStep}
                    />
                )}
            </View>
        </ScrollView>
    );

}