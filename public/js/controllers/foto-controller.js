angular.module('alurapic').controller('FotoController', function ($scope, $http) {

    $scope.foto = {};

    $scope.submeter = () => {//método chamado na tag do formulário da foto
        $http.post("v1/fotos", $scope.foto) //envia foto para backend
            .success(() => {
                alert("Foto cadastrada com sucesso!");
            })
            .error((error) => {
                console.log(error);
            });
    };

});