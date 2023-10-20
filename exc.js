/************************************************************
 * Objetivo:                    
 * Autor: Luan Oliveira        
 * Data: 20/10/2023              
 * Versão: 1.0
 ************************************************************/
var estadoscidade = require('./estados_cidades')

const getListaDeEstados = function() {

    let siglas = {}
    let ufarray =[]

    // forEach
    estadoscidade.estadosCidades.estados.forEach(function(sigla, index){
        ufarray.push(estadoscidade.estadosCidades.estados[index].sigla)
    })

    siglas.uf = ufarray
    siglas.quantidade = ufarray.length

    console.log(siglas)
    return siglas
    
}

getListaDeEstados()



