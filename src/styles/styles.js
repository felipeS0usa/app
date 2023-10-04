import styled from 'styled-components/native';
import { tokens } from './theme';

export const Wrapper = styled.View`
    background-color: #fcfcfc;
    flex: 1;
    margin: 15px;
`;

export const TextInput = styled.TextInput`
    background-color: ${ tokens('light').primary[900] };
    margin-bottom: 10px;
    border-width: 1px;
    border-radius: 10px;
    padding: 10px;
`;