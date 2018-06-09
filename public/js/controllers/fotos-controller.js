//usando modulo alurapic, criamos um controller com uma função, para prover o model a view
angular.module('alurapic').controller('FotosController', function($scope){//injeção de dependencia, pre requisito $scope para definição do escopo 

    $scope.foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };
    $scope.foto2 = {
        titulo : 'Leão 2',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };
    $scope.foto3 = {
        titulo : 'Leão 3',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});