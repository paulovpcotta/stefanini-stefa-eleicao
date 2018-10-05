/**
 * Created by Paulo on 28/08/2018.
 */
var azure = angular.module('azure',['ui.bootstrap', 'ngResource', 'ngRoute', 'ngCookies', 'ui.router', 'angularModalService',
	'ngAnimate', 'ngProgress', 'ngFileUpload']);

azure.config(['$stateProvider', '$urlRouterProvider', '$routeProvider', function($stateProvider, $urlRouterProvider, $routeProvider) {
	 
	$stateProvider.state('/', {
	   url: '/',
	   templateUrl : 'pages/face-group/add-face-group.html',
	   controller : 'addFaceGroupController',
	}).state('group', {
	   url: '/group',
	   templateUrl : 'pages/face-group/list-face-group.html',
	   controller : 'listFaceGroupLargeController',
	}).state('save', {
	   url: '/save',
	   templateUrl : 'pages/face-group/add-face-image.html',
	   controller : 'saveFaceGroupController',
	}).state('detect', {
	   url: '/detect',
	   templateUrl : 'pages/face-group/detect-face-group.html',
	   controller : 'detectFaceGroupLargeController',
	}).state('detect-face', {
	   url: '/detect-face',
	   templateUrl : 'pages/detect/detect.html',
	   controller : 'detectController',
	}).state('similary', {
	   url: '/similary',
	   templateUrl : 'pages/similary/similary.html',
	   controller : 'similaryController',
	});
	
   $urlRouterProvider.otherwise('/');
}]);