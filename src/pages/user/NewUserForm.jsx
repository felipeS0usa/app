import { Wrapper } from "../../styles/styles";
import { TextInput } from "@react-native-material/core";
import { Button, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
};

const phoneRegExp = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup
            .string()
            .email("Esse email não é válido.")
            .required("required"),
    contact: yup
            .string()
            .matches(phoneRegExp, "O número de telefone não é válido.")
            .required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup.string().required("required"),
});

const NewUserForm = () => {
    const [image, setImage] = useState(null);

    return(
        <Wrapper>
            <Formik
                initialValues={{ initialValues }}
                onSubmit={values => console.log({...values, images: image})}
                validationSchema={userSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (

                <View>
                
                    <TextInput
                        placeholder="Primeiro nome"
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        value={values.firstName}
                    />

                    <TextInput
                        placeholder="Sobrenome"
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values.lastName}
                    />

                    <TextInput
                        placeholder="E-mail"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput
                        placeholder="Contato"
                        onChangeText={handleChange('contact')}
                        onBlur={handleBlur('contact')}
                        value={values.contact}
                    />
                    
                    <TextInput
                        placeholder="Senha"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                    />

                    <TextInput
                        placeholder="Confirme a senha"
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry={true}
                    />
                    <Image
                        source={{
                        uri: image ? image.uri : 'https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg'
                        }}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.button} onPress={async() => {
                        setImage(await ImagePicker.launchCameraAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.All,
                            allowsEditing: true,
                            quality: 1,
                          }));
                    }}>
                        <Text style={styles.buttonText}>
                            Escolher imagem
                        </Text>
                    </TouchableOpacity>

                    <Button onPress={handleSubmit} title="CRIAR NOVO USUÁRIO" />
                
                </View>
            )}
            </Formik>
        </Wrapper>
    );
}

export default NewUserForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7159c1',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }
});