angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider) {// não funciona com arrow function

    //configuração de rotas
    //primeiro parâmetro é a rota indicada /#/fotos
    $routeProvider.when('/fotos', {//segundo parametro é um objeto
        templateUrl : 'partials/principal.html',//url do html que será monntado
        controller : 'FotosController'//controller que será associado
    });

});