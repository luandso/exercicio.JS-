/************************************************************
 * Objetivo:                    
 * Autor: Luan Oliveira        
 * Data: 20/10/2023              
 * Versão: 1.0
 ************************************************************/
var estadoscidade = require("./estados_clientes.js")

const getListaDeEstados = () => {

    let estados = pais.estadosCidades.estados
    let siglas = {}
    let uf =[]

    // forEach
    estados.forEach(function(estados){
        uf.push(estados.sigla)
    })

    siglas.uf = uf
    siglas.uf = ufsiglas.quantidade = pais.estadosCidades.estados.lenght
    console.log(siglas)
    
}

const getDadosEstado = () => {

    let uf = pais.estadosCidades.estados.sigla

    // forEach
    estados.forEach(function(estados){
        uf.push(estados.sigla)
    })
}



