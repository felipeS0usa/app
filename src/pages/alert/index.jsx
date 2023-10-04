import * as React from 'react';
import { Text } from 'react-native';
import { Wrapper } from '../../styles/styles';
import { useTheme } from '@rneui/themed';

const Alert = () => {
    const theme = useTheme();

    return (
        <Wrapper>
            <Text>Página de Alertas ativos no sistema</Text>
        </Wrapper>
    );
}

export default Alert;