/**
 * Created by nghi on 16.8.2015.
 */
describe("birth date directives", function() {

    beforeEach( function(){
      module('myApp')
    });

    beforeEach(inject(function($compile, $rootScope){
      $scope = $rootScope;
      element = angular.element(
        '<form name="form"><div data-my-birth-date data-ng-model="dateOfBirth"></div></form>'
      );
      $scope.model = { dateOfBirth: null};
      $compile(element)($scope);
      $scope.$digest();
      form = $scope.form;
    }));

    beforeEach(function() {
      this.addMatchers({
        toContainSelectOptions: function(expected){
          var actualValues = [],
            difference = [];

          angular.forEach(this.actual.find('option'), function(option) {
            actualValues.push(option.text);
          });

          difference = _.difference(expected, actualValues);

          this.message = function() {
            return 'Expected ' + angular.toJson(actualValues) + ' to contain options ' + angular.toJson(difference) + '.';
          };

          return difference.length == 0;
        }
      });
    });

    describe("my-birth-date component", function(){

      it("should generate the birth date selects for day, month and year", function(){
        expect(element.find("select").length).toBe(3);
      });

      it("should contain the month options", function(){
        expect(element).toContainSelectOptions(["Month","1-Jan","2-Feb","3-Mar","4-Apr","5-May","6-Jun","7-Jul","8-Aug","9-Sep","10-Oct","11-Nov","12-Dec"]);
      });

      it("should contain the days options", function(){
        expect(element).toContainSelectOptions(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]);
      });

      it("should contain the year options", function(){
        expect(element).toContainSelectOptions(["Year", "2014", "2013", "1899"]);
      })

    });

  });

