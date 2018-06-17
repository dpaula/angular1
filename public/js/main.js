angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {// não funciona com arrow function

    //ativando o html5, para alterar a url base de acesso que por padrão é #
    $locationProvider.html5Mode(true);

    //configuração de rotas
    //primeiro parâmetro é a rota indicada /#/fotos
    $routeProvider.when('/fotos', {//segundo parametro é um objeto
        templateUrl : 'partials/principal.html',//url do html que será monntado
        controller : 'FotosController'//controller que será associado
    });
    
    $routeProvider.when('/fotos/minha-foto', {//segundo parametro é um objeto
        templateUrl : 'partials/minha-foto.html',//url do html que será monntado
        controller : 'FotosController'//controller que será associado
    });
    
    $routeProvider.when('/fotos/new', {
        templateUrl : 'partials/foto.html',
        controller : 'FotoController'//controller que será associado
    });
    
    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl : 'partials/foto.html',
        controller : 'FotoController'//controller que será associado
    });

    //caso use uma rota inválida, redireciona para fotos
    $routeProvider.otherwise({
        redirectTo : '/fotos'
    });

});