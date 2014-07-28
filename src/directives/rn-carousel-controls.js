angular.module('angular-carousel').value("rnCarouselClick", false)

angular.module('angular-carousel')

.directive('rnCarouselControls', [function(rnCarouselClick) {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      items: '=',
      index: '='
    },
    link: function(scope, element, attrs) {
      scope.prev = function() {
        console.log("clicked previos", rnCarouselClick)
        scope.index--;
      };
      scope.next = function() {
        rnCarouselClick = rnCarouselClick!
        console.log("clicked next", rnCarouselClick)
        scope.index++;
      };
    },
    template: '<div class="rn-carousel-controls">' +
                '<span class="rn-carousel-control rn-carousel-control-prev" ng-click="prev()" ng-if="index > 0"></span>' +
                '<span class="rn-carousel-control rn-carousel-control-next" ng-click="next()" ng-if="index < items.length - 1"></span>' +
              '</div>'
  };
}]);
