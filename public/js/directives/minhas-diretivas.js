angular.module('minhasDiretivas', [])
.directive('meuPainel', () =>{

    let ddo = {};

    //definindo que a diretiva será usada como Atributo e Element
    ddo.restrict = "AE";

    //escopo de atributos 
    ddo.scope = {
        titulo : '@' //interface de comunicação com a diretiva, como passa o dado para dentro do escopo da diretiva
    };

    ddo.transclude = true; //para diretiva manter elementos filhos quando angular for processar o html

    //apontando para o html com as diretivas novas
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;

});