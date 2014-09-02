var  appModule=angular.module("appModule",["ngRoute","ngAnimate","myControllerModule"]);



appModule.config(function($routeProvider){
	$routeProvider.when("/about",{
		controller:"aboutCtrl",
		templateUrl:"tpl/about.html"
	}).
	when("/product",{
		controller:"productCtrl",
		templateUrl:"tpl/product.html"
	}).
	when("/shop",{
	           controller:"carCtrl",
	            templateUrl:"tpl/shop.html"
	}).
	otherwise({redirectTo: '/about'});
})
