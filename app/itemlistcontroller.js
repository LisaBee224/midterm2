
function itemListController ($scope){

$scope.new_item = {};
$scope. add_item_error = "";

$scope.items = [
			{imageurl: 'images/strawb.jpg', type: 'strawberry', name: 'Herbert Strawberry', occupation: 'dogwalker', superpower: 'power-C boost'},
			{imageurl: 'images/blueb.jpg', type: 'blueberry', name: 'Ulysses Blueberry', occupation: 'construction worker', superpower: 'super strength' },
			{imageurl: 'images/orange.jpg' , type: 'orange', name: 'Otto Sly Orange', occupation: 'ninja', superpower: 'serious defense' }
		];

	$scope.additem = function(item){
			$scope.items.push( item );
			$scope.adding_item = {};
		};
		console.log('scope', $scope);
	};

	


