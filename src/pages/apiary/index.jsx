import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Wrapper } from '../../styles/styles.js';
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
  Button,
  ListItem
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { listaApiario } from "../../services/Api.js";

const Apiary = () => {
    const [revealed, setRevealed] = useState(false);
    const [apiary, setApiary] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const response = await listaApiario();
            
            //CheckCodeResponse(response);

            var remodel =  new Array();
            if(response.length > 0){
                response.map((item) => {
                    remodel.push({
                        id: item.id_apiario,
                        descricao: item.descricao ? item.descricao : "<Não informada>",
                        nome: item?.nome,
                        localizacao: item.localizacao ? item.localizacao : "<Não informada>",
                        data_criacao: item.data_criacao ? item.data_criacao : "<Não informada>",
                    })
                })
            }

            setApiary(remodel);
            setLoading(false);
        })();
    }, []);

    const columns = [
        { field: "id", label: "ID" },
        { field: "localizacao", label: "Localização" },
        { field: "descricao", label: "Descrição" },
        { field: "nome", label: "Nome" },
        { field: "data_criacao", label: "Data de Criação" },
    ];

    return (
        <Backdrop
            revealed={revealed}
            header={
                <AppBar
                title="Opções"
                transparent
                leading={props => (
                    <IconButton icon={props => (
                        <Icon name={revealed ? "close" : "menu"} {...props} />
                    )}
                    onPress={() => setRevealed(prevState => !prevState)}
                    {...props}
                    />
                )}
                />
            }
            backLayer={
                <View style={{ height: 120, margin: 10 }}>
                    <Button style={{marginBottom: "10px"}} onPress={null} title="CRIAR NOVO APIÁRIO" />
                    <Button style={{marginBottom: "10px"}} onPress={null} title="EDITAR APIÁRIO" />
                    <Button style={{marginBottom: "10px"}} onPress={null} title="EXCLUIR APIÁRIO(s)" />
                </View>
            }
            >
            <BackdropSubheader title="Depende da escolha a cima" />
            <View style={{ margin: 10, overflow: "auto"}}>
                {!loading ?
                    apiary.length > 0 ?
                    apiary.map((i) => (
                        <ListItem key={i.id} title={i.nome} />
                    ))
                    : <Text>Não há registros a serem exibidos.</Text>
                : <Text>Carregando...</Text>}
            </View>
        </Backdrop>
    );
}

export default Apiary;