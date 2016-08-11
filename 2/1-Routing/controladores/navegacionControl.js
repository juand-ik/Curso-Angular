app.controller('navegacionControl', function($scope, $location)/*laction, premite conocer la ruta actual*/
{
	$scope.esActivo = function(rutaActual)
	{
		return rutaActual === $location.path()
	}
});