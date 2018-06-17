//usando modulo alurapic, criamos um controller com uma função, para prover o model a view
angular.module('alurapic').controller('FotosController', function($scope, $http){//injeção de dependencia, pre requisito $scope para definição do escopo 

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    //requisição ajax, trazendo do servidor as fotos, usando $http do angular
    /*let promisse = $http.get('v1/fotos');

    promisse.then((ret) => {
        $scope.fotos = ret.data;
    }).catch((error) => {
        console.log(error);
    });
    */

    //usando método success e error já preparado para retornar os dados
    $http.get('v1/fotos')
    .success((fotos) =>{
        $scope.fotos = fotos;
    })
    .error((error) =>{
        console.log(error);
    });

    $scope.remover = (foto) => {
        
        $http.delete('v1/fotos/'+foto._id)//chama metodo do back end para remoção da ffoto do id
        .success(() => {
            const indiceFoto = $scope.fotos.indexOf(foto);//pega o indice da foto
            $scope.fotos.splice(indiceFoto, 1);//remove a foto da lista
            $scope.mensagem = 'Foto '+foto.titulo+' Removida com sucesso!';
        })
        .error((error) => {
            console.log(error);
            $scope.mensagem = 'Erro ao remover a foto '+foto.titulo;
        });
    };

});