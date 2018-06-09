//usando modulo alurapic, criamos um controller com uma função, para prover o model a view
angular.module('alurapic').controller('FotosController', function($scope, $http){//injeção de dependencia, pre requisito $scope para definição do escopo 

    $scope.fotos = [];

    //requisição ajax, trazendo do servidor as fotos, usando $http do angular
    let promisse = $http.get('v1/fotos');

    promisse.then((ret) => {
        $scope.fotos = ret.data;
    }).catch((error) => {
        console.log(error);
    });
 
});