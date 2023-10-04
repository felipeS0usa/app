import React, { useState, useEffect, createContext } from "react";
import { api, createSession } from "./Api.js";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async() => {
            const recoveredUser = await recoverDataFunction('user');
            const recoveredToken = await recoverDataFunction('token');

            if(recoveredUser) {
                setUser(JSON.parse(recoveredUser));
            }

            if(recoveredToken) {
                setToken(recoveredToken);
                api.defaults.headers.authorization = `Bearer ${recoveredToken}`;
                api.defaults.headers.common = {'authorization': `Bearer ${recoveredToken}`}
            }
            
            setLoading(false);
        })();
    }, []);

    const storeDataFunction = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);

        } catch (error) {
            console.log(error);
        }
    };

    const recoverDataFunction = async (option) => {
        try {
            const value = await AsyncStorage.getItem(option);
            if (value !== null) {
                console.log(value);
                return value;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const removeDataFunction = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch(exception) {
            return false;
        }
    }
    

    const loginFunction = async(email, password) => {

        const response = await createSession(email, password);

        if(response.status === 200) {
            await storeDataFunction("user", JSON.stringify(
                {
                    id: response.data.id,
                    nome: `${response.data.nome}`,
                    email: response.data.email,
                    type: response.data.id_papel
                }
            ));
            await storeDataFunction("token", response.data.token);
    
            const loggedUser = {
                id: response.data.id,
                nome: response.data.nome,
                email: response.data.email,
                type: response.data.id_papel
            };
    
            api.defaults.headers.common =  {'authorization': `Bearer ${response.data.token}`}

            setUser(loggedUser);
            setToken(response.token);
        
        }else{
            if(response.response.status === 401) {
                Alert.alert("Falha ao realizar login: Não autorizado.");
            }
            if(response.response.status === 422) {
                Alert.alert("Falha ao realizar login: Campo vazio.");
            } 
            if(response.response.status === 500) {
                Alert.alert("Falha ao realizar login: Servidor não acessível.");
            }
            //return navigate("/login");
        }
    };

    const logout = async() => {

        await removeDataFunction("user");
        await removeDataFunction("token");
        api.defaults.headers.Autorization = null;
        setUser(null);
        
        //navigate("/login");
    };

    const CheckCodeResponse = (response) => {
        
        //console.log("[REPOSTA DO SERVER]")
        //console.log(response);

        if((response.code === "ERR_BAD_REQUEST") && (response.message === "Request failed with status code 401")) {
            Alert.alert("Sessão expirada.");
            logout();
            return;
          }
  
        if((response.code === "ERR_BAD_REQUEST") && (response.message === "Request failed with status code 422")) {
            Alert.alert(response.response.data.msg ? response.response.data.msg : response.message);
            return navigate("/");
        }
    
        if((response.code === "ERR_CONNECTION_REFUSED") || (response.code === "ERR_NETWORK") || response.message === "Request failed with status code 500") {
            Alert.alert("O servidor não está acessível, tente novamente mais tarde.");
            return navigate("/");
        }
        return;
    }

    const FormataData = (date) => {
        if(date){
            return `${date.split('T')[0].split('-')[2]}-${date.split('T')[0].split('-')[1]}-${date.split('T')[0].split('-')[0]} ${parseInt(date.split('T')[1].split('.')[0].split(':')[0])}:${date.split('T')[1].split('.')[0].split(':')[1]}:${date.split('T')[1].split('.')[0].split(':')[2]}`;
        }else{
            return date;
        }
    }

    const FormataDataAcertaHora = (dateErr) => {
        var dateOK = new Date(dateErr);
        dateOK.setHours(dateOK.getHours() - 3);
        var date = dateOK.toISOString();
        return `${date.split('T')[0].split('-')[2]}-${date.split('T')[0].split('-')[1]}-${date.split('T')[0].split('-')[0]} ${parseInt(date.split('T')[1].split('.')[0].split(':')[0])}:${date.split('T')[1].split('.')[0].split(':')[1]}:${date.split('T')[1].split('.')[0].split(':')[2]}`;
    }

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, token, loading, loginFunction, logout, CheckCodeResponse, FormataData, FormataDataAcertaHora }}>
            
                { children }
            
        </AuthContext.Provider>
    );
}
