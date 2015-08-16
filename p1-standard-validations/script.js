/**
 * Created by nghi on 16.8.2015.
 */
var myApp = angular.module("myApp", []);

myApp.controller("searchCtrl", function($scope){

  // This is to hold the validation until we submit the form. - submitted is just a flag for this purpose

  $scope.submitSearch = function(){
    console.log("------------------------------------------------")
    console.log('formName.fieldName.$invalid',$scope.searchForm.leaving_from.$invalid); // the validity of this field: formName.fieldName.$error is {} then this will be false
    console.log('formName.fieldName.$error',$scope.searchForm.leaving_from.$error); // object has all references to all invalid rules for an specific field.
    console.log('formName.$error',$scope.searchForm.$error);                        // object has all references to all invalid rules for all fields inside the form

    if($scope.searchForm.$valid) {
      console.log("form sent");
    }else{
      // If for, is invalid, show errors
      $scope.searchForm.submitted = true;
    }
  }


  // This is to reset the search model and all errors from screen.
  $scope.reset = function(){
    $scope.search = {}
    $scope.searchForm.submitted = false;
  }

});