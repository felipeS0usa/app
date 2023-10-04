import { Wrapper } from "../../styles/styles";
import { TextInput } from "@react-native-material/core";
import { Button, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

const initialValues = {
    email: "",
    password: "",
};

const userSchema = yup.object().shape({
    email: yup
            .string()
            .email("Esse email não é válido.")
            .required("required"),
    password: yup.string().required("required"),
});


const Login = () => {
    return(
        <Wrapper>
            <Formik
                initialValues={{ initialValues }}
                onSubmit={values => console.log(values)}
                validationSchema={userSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (

                <View>

                    <TextInput
                        placeholder="E-mail"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />

                    <TextInput
                        placeholder="Senha"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                    />

                    <Button onPress={handleSubmit} title="ENTRAR" />
                
                </View>
            )}
            </Formik>
        </Wrapper>
    );
}

export default Login();