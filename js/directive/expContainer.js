app.directive("expContainer", function () {
    return {
        restrict: "E",
        scope: {
            info: "="
        },
        templateUrl: "js/directive/expContainer.html"
    };
});
