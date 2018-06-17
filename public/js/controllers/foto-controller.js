angular.module('alurapic').controller('FotoController', function ($scope, $http) {

    $scope.foto = {};

    $scope.submeter = () => { //método chamado na tag do formulário da foto
        if (!$scope.formulario.$valid) {//valida se o formulário está valido antes de mandar para o backend
            return;
        } else {
            $http.post("v1/fotos", $scope.foto) //envia foto para backend
                .success(() => {
                    $scope.foto = {}; //lima o scopo
                    alert("Foto cadastrada com sucesso!");
                })
                .error((error) => {
                    console.log(error);
                });
        }
    };

});