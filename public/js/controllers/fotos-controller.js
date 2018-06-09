//usando modulo alurapic, criamos um controller com uma função, para prover o model a view
angular.module('alurapic').controller('FotosController', function($scope){//injeção de dependencia, pre requisito $scope para definição do escopo 

    $scope.fotos = [
        {
        titulo : 'Leão 1',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },{
        titulo : 'Leão 2',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },{
        titulo : 'Leão 3',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
        }
    ];
 
});