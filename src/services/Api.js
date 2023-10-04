import axios from "axios";

export const api = axios.create({
    //baseURL: "http://localhost:5000",
    baseURL: "https://backend-tcc.vercel.app/",
})

//**********************************************************//
//******************** ROTAS DE USUÁRIO ********************//
//**********************************************************//

//Login do usuário
export const createSession = async(email, password) => {
    try {
        return (await api.post("/login", {email, password}));

    }catch(err) {
        return err;
    }
}

// Adicionar um usuário
export const adicionaUsuario = async(novaConta) => {
    try {
        return (await api.post("/users", {novaConta}));

    }catch(err) {
        return err;
    }
}

// Listar usuários em específico
export const listaUsuario = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }

    try {
        return (await api.get(`/users`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Selecionar um usuário em específico
export const selectUsuario = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }

    try {
        return (await api.get(`/users/${id}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Editar um usuário
export const editarUsuario = async(conta, id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/users/edit/${id}`, {conta}, token)).data;

    }catch(err) {
        return err;
    }
}

// Editar senha do usuário
export const editarSenha = async(senha, id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/users/edit/password/${id}`, {senha}, token)).data;

    }catch(err) {
        return err;
    }
}




//**********************************************************//
//******************** ROTAS DE COLMEIA ********************//
//**********************************************************//

// Selecionar uma colmeia em específico
export const selectColmeiaId = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        console.log(JSON.stringify(api.defaults.headers));
        return (await api.get(`/beehive/${id}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Adicionar uma colmeia
export const adicionarColmeia = async(colmeia) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post("/beehive", {colmeia}, token)).data;

    }catch(err) {
        return err;
    }
}

// Editar uma colmeia
export const editarColmeia = async(colmeia, id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/beehive/edit/${id}`, {colmeia}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar todas as colmeias
export const listaColmeia = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.get("/beehive", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar as colmeias que possuem medição
export const listaColmeiaQueTemMedicao = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get("/beehive/measurements", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Alimentar select com colmeias
export const selectColmeia = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get("/beehive/select", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Excluir Colmeias
export const excluirColmeias = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/beehive/delete/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Todas as Colmeias de um apiário
export const selecionarColmeiasPorApiario = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/beehive/select/${id}`, {}, token));

    }catch(err) {
        return err;
    }
}



//**********************************************************//
//******************** ROTAS DE APIÁRIO ********************//
//**********************************************************//

// Adicionar apiário
export const adicionarApiario = async(apiario) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post("/apiary", {apiario}, token)).data;

    }catch(err) {
        return err;
    }
}

// Editar apiário
export const editarApiario = async(apiario, id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/apiary/edit/${id}`, {apiario}, token)).data;

    }catch(err) {
        return err;
    }
}

// Detalhes apiário
export const selectApiarioId = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        console.log(JSON.stringify(api.defaults.headers));
        return (await api.get(`/apiary/${id}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Selecionar um apiário em específico
export const detalhesApiarioId = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        console.log(JSON.stringify(api.defaults.headers));
        return (await api.get(`/apiary/details/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar todos os apiários
export const listaApiario = async() => {
    //const token = {
    //    'authorization': await localStorage.getItem("token")
    //}
    
    try {
        return (await api.get("/apiary", {})).data;

    }catch(err) {
        return err;
    }
}

// Alimentar select com apiários
export const selectApiario = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get("/apiary/select", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Excluir apiários
export const excluirApiarios = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/apiary/delete/${id}`, {}, token));

    }catch(err) {
        return err;
    }
}

// listar todas as mediçoes de um determinado apiário
export const listaMedicaoApiario = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/measurements/apiary/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Máximo ou minimo de uma medição
export const MaxMinMedicao = async(id, param, type) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/measurements/maxmin/apiary/${id}/${param}/${type}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Máximo ou minimo de uma medição de uma colmeia
export const MaxMinMedicaoColmeia = async(id, param, type) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/measurements/maxmin/beehive/${id}/${param}/${type}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Tem Medição? Apiário
export const TemMedicaoApiario = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/measurements/yesno/apiary/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Tem Medição? Colmeia
export const TemMedicaoColmeia = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/measurements/yesno/beehive/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}


//**********************************************************//
//******************** ROTAS DE MANEJO *********************//
//**********************************************************//

// Selecionar um manejo em específico
export const selectManejoId = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/management/${id}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Selecionar uma ação específica
export const selectAcaoId = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        console.log(JSON.stringify(api.defaults.headers));
        return (await api.get(`/action/${id}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Adicionar manejo
export const adicionarManejo = async(manejo) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post("/management", {manejo}, token)).data;

    }catch(err) {
        return err;
    }
}

// Adicionar ação
export const adicionarAcao = async(acao) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post("/action", {acao}, token)).data;

    }catch(err) {
        return err;
    }
}

// Editar manejo
export const editarManejo = async(manejo, id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/management/edit/${id}`, {manejo}, token)).data;

    }catch(err) {
        return err;
    }
}

// Editar ação
export const editarAcao = async(acao, id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/action/edit/${id}`, {acao}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar manejos feitos em colmeias
export const listaManejoColmeia = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.get("/management/beehive", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar manejos feitos em apiários
export const listaManejoApiario = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.get("/management/apiary", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar ações 
export const listaAcao = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.get("/action", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// excluir manejo
export const excluirManejo = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/management/delete/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar manejos agendados
export const listaManejoAgendado = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.get(`/management/calendar`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar Manejos realizados em determinada colmeia
export const ListaManejoColmeia = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.get(`/management/byid/beehive/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Listar ações de um determinado manejo 
export const listaAcaoManejo = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.get(`/action/management/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}


//**********************************************************//
//******************** ROTAS DE GRÁFICO ********************//
//**********************************************************//

// Listar gráficos de uma colmeia em específico
export const listaGrafico = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`measurements/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}


//**********************************************************//
//**************** ROTAS DE DESENVOLVIMENTO ****************//
//**********************************************************//

// Recupear todos os registros do sistema
export const retornarRegistros = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post("/retornar", {}, token));

    }catch(err) {
        return err;
    }
}

//**********************************************************//
//******************** ROTAS DE MEDIÇÔES *******************//
//**********************************************************//

// Recupear todos as medições de uma colmeia
export const medicaoColmeiaId = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/measurements/${id}`, {}, token))?.data;

    }catch(err) {
        return err;
    }
}

// Recupear todos os registros do sistema
export const mediaDeMedicoesNoApiario = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/measurements/temperature/apiary/${id}`, {}, token));

    }catch(err) {
        return err;
    }
}

/* ******************************************************************* */
/* ALERTAS E REGRAS ************************************************** */
/* ******************************************************************* */
// Adicionar regra de manejo
export const adicionarRegraManejo = async(regra) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }

    console.log(regra);
    
    try {
        return (await api.post("/rules/management", {regra}, token)).data.msg;

    }catch(err) {
        return err;
    }
}

// Adicionar regra de medição
export const adicionarRegraMedicao = async(regra) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }

    console.log(regra);
    
    try {
        return (await api.post("rules/measurement", {regra}, token)).data.msg;

    }catch(err) {
        return err;
    }
}

// Selecionar regras de manejo
export const listaRegrasManejo = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get("/rules/select/management", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Selecionar regras de medição
export const listaRegrasMedicao = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get("rules/select/measurement", {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Selecionar uma regra de manejo
export const selectRegraManejoId = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/rules/select/management/${id}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Selecionar uma regra de medição
export const selectRegraMedicaoId = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`rules/select/measurement/${id}`, {}, token)).data[0];

    }catch(err) {
        return err;
    }
}

// Editar uma regra de manejo
export const editarRegraManejo = async(regra, id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/rules/edit/management/${id}`, {regra}, token)).data;

    }catch(err) {
        return err;
    }
}

// Editar uma regra de medição
export const editarRegraMedicao = async(regra, id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.post(`/rules/edit/measurement/${id}`, {regra}, token)).data;

    }catch(err) {
        return err;
    }
}

// Excluir regras de manejo
export const excluirRegrasManejo = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/rules/delete/management/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Excluir regras de medição
export const excluirRegrasMedicao = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/rules/delete/measurement/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Selecionar alertas de medição
export const listaAlertasMedicao = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get("/alerts/select/measurement", {}, token)).data;

    }catch(err) {
        return err;
    }
}

/* ******************************************************************* */
/* MQTT ************************************************************** */
/* ******************************************************************* */
// Publicar novo intervalo de medição
export const publicarMQTT = async(mensagem) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/mqtt/publisher`, {mensagem}, token)).data;

    }catch(err) {
        return err;
    }
}

// Testar Conexão com as colmeias
export const publicarMensagemAliveMQTT = async(mensagem) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/mqtt/alive/publisher`, {mensagem}, token)).data;

    }catch(err) {
        return err;
    }
}

// Escutar status das colmeias
export const escutarMQTTstatus = async() => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.get(`/mqtt/select/logs`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

/* ******************************************************************* */
/* RELATÓRIOS ******************************************************** */
/* ******************************************************************* */
// Relatório de Apiário
export const RelatorioApiario = async(range) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post('/reports/apiary', {range}, token)).data;

    }catch(err) {
        return err;
    }
}

// Relatório de Colmeia
export const RelatorioColmeia = async(range) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/reports/beehive`, {range}, token)).data;

    }catch(err) {
        return err;
    }
}

// Relatório de Manejo
export const RelatorioManejo = async(range) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/reports/management/`, {range}, token)).data;

    }catch(err) {
        return err;
    }
}

// Relatório de Alerta de Medição
export const RelatorioAlertaMedicao = async(range) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/reports/alert/measurement/`, {range}, token)).data;

    }catch(err) {
        return err;
    }
}

// Relatório de Alerta de Manejo
export const RelatorioAlertaManejo = async(range) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/reports/alert/management/`, {range}, token)).data;

    }catch(err) {
        return err;
    }
}

// Relatório de Regra de Manejo
export const RelatorioRegraManejo = async(range) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/reports/rule/management/`, {range}, token)).data;

    }catch(err) {
        return err;
    }
}

// Relatório de Regra de Manejo
export const RelatorioRegraMedicao = async(range) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    try {
        return (await api.post(`/reports/rule/measurement/`, {range}, token)).data;

    }catch(err) {
        return err;
    }
}

/* ******************************************************************* */
/* IMAGEM ************************************************************ */
/* ******************************************************************* */
export const InserirImagens = async(object) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }

    const data = new FormData();
    data.append("file", object.image.file, object.image.file.name);

    try {
        return (await api.post(`/upload/image/`, data, token)).data;

    }catch(err) {
        console.log(err);
        return err;
    }
}

// Setar informações da imagem
export const InserirInfoImagens = async(id, object) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }

    try {
        return (await api.post(`/upload/image/${id}`, {object}, token)).data;

    }catch(err) {
        console.log(err);
        return err;
    }
}

// Selecionar imagens de um apiário
export const listarImagensApiario = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/select/apiary/image/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Selecionar imagens de uma colmeia
export const listarImagensColmeia = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/select/beehive/image/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}

// Selecionar imagens de um manejo
export const listarImagensManejo = async(id) => {
    const token = {
        'authorization': await localStorage.getItem("token")
    }
    
    try {
        return (await api.get(`/select/management/image/${id}`, {}, token)).data;

    }catch(err) {
        return err;
    }
}