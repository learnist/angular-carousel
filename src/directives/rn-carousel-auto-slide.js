angular.module('angular-carousel')

.directive('rnCarouselAutoSlide', ['$interval', 'rnCarouselClickReset', function($interval, rnCarouselClickReset) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var delay = Math.round(parseFloat(attrs.rnCarouselAutoSlide) * 1000);
      $interval(function(){
        if (rnCarouselClickReset.value) {
          rnCarouselClickReset.value = false;
        } else {
          if (scope.indicatorIndex < scope.carouselIndicatorArray.length -1) {
            scope.indicatorIndex++;
          } else {
            scope.indicatorIndex = 0;
          }
        }
      }, delay);
    }
  };
}]);
