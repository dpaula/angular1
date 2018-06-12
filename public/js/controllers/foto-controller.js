angular.module('alurapic').controller('FotoController', function($scope) {

    $scope.foto = {};

    $scope.submeter = () => {
        console.log($scope.foto);
    }

});