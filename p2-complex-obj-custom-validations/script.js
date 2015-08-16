/**
 * Created by nghi on 16.8.2015.
 */
/**
 * Created by nghi on 16.8.2015.
 */
var myApp = angular.module("myApp", []);

myApp.controller("searchCtrl", function($scope){

  // This is to hold the validation until we submit the form. - submitted is just a flag for this purpose

  $scope.submitSearch = function(){
    console.log("------------------------------------------------")
    console.log('searchForm.leaving_from.$invalid',$scope.searchForm.leaving_from.$invalid); // the validity of this field: formName.fieldName.$error is {} then this will be false
    console.log('searchForm.leaving_from.$error',$scope.searchForm.leaving_from.$error); // object has all references to all invalid rules for an specific field.
    console.log('searchForm.$error',$scope.searchForm.$error);                        // object has all references to all invalid rules for all fields inside the form
    console.log('searchForm.$error.required',$scope.searchForm.$error.required);
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

myApp.constant("dataSet", {
  months: ["1-Jan", "2-Feb", "3-Mar", "4-Apr", "5-May", "6-Jun", "7-Jul", "8-Aug", "9-Sep", "10-Oct", "11-Nov", "12-Dec"],
  years: _.range(new Date().getFullYear(), new Date().getFullYear() - 116, -1),
  days: _.range(1, 32)
});

myApp.directive("myValidateBirthDate", function(dataSet){
  //implementation left out intentionally
  isDateOfBirthComplete = function(dateOfBirth){
    console.log('isDateOfBirthComplete:dateOfBirth',dateOfBirth)
  };
  isDateOfBirthValid = function(dateOfBirth){
    console.log('isDateOfBirthValid:dateOfBirth',dateOfBirth)
  };
  isAdult = function(dateOfBirth) {
    console.log('isAdult:dateOfBirth',dateOfBirth)
  };

  return {
    restrict: 'A',
    require: 'ngModel',  // element must have ng-model attribute.
    link: function(scope, ele, attrs, ctrl){

      // set the validation to false until user actually changes the model. This equals required for all three elements of the object
      ctrl.$setValidity('incompleteDateOfBirth', false);

      // Constants to initialize where we get months, days and years
      angular.extend(scope, dataSet);

      // scope.search.dateOfBirth is created behind the scene when the user select

      // Watch if whole model has changed
      scope.$watch(attrs.ngModel, function(newVal){

        if(angular.isDefined(newVal)) {

          var dateOfBirth = newVal;
          var dateOfBirthComplete = isDateOfBirthComplete(dateOfBirth);

          // AC 1 and AC 2
          ctrl.$setValidity('incompleteDateOfBirth', dateOfBirthComplete);

          if(dateOfBirthComplete){
            ctrl.$setValidity("invalidDateOfBith", isDateOfBirthValid(dateOfBirth));
            ctrl.$setValidity("minorDateOfBirth", isAdult(dateOfBirth));
          }

        }


      }, true);
    }
  }
});