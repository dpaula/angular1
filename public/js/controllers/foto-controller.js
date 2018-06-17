angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) { //valida se veio o id
        $http.get('v1/fotos/' + $routeParams.fotoId) //da um get conforme a url montada com o id da foto
            .success((foto) => {
                $scope.foto = foto; //carrega a foto no scope
            })
            .error((error) => {
                console.log(error);
                $scope.mensagem = 'Não foi possível carregar a foto';
            });
    }

    $scope.submeter = () => { //método chamado na tag do formulário da foto

        if ($scope.foto._id) {
            $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(() => {
                    $scope.mensagem = 'Foto alterada com sucesso!';
                })
                .error((error) => {
                    console.log(error);
                    $scope.mensagem = 'Não foi possível alterar a foto';
                });
        } else {
            if (!$scope.formulario.$valid) { //valida se o formulário está valido antes de mandar para o backend
                return;
            } else {
                $http.post("v1/fotos", $scope.foto) //envia foto para backend
                    .success(() => {
                        $scope.foto = {}; //lima o scopo
                        $scope.mensagem = 'Foto cadastrada com sucesso!';
                    })
                    .error((error) => {
                        $scope.mensagem = 'Foto não cadastrada!';
                    });
            }
        }
    };
});