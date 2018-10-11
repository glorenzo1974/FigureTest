(function () {
    'use strict';

    angular
        .module('app')
        .controller('figureController', figureController);

    figureController.$inject = [];

    function figureController() {
        var vm = this;

        vm.side1 = "";
        vm.side2 = "";
        vm.side3 = "";
        vm.side4 = "";
        vm.checkResult = "";

        function checkSquare(a, b, c, d) {
            if (a == b && a == c && a == d) {
                return true;
            }
            return false;
        }

        function checkRectangle(a, b, c, d) {
            if (a == c && b == d) {
                return true;
            }
            return false;
        }

        vm.clearInputs = function () {
            vm.side1 = "";
            vm.side2 = "";
            vm.side3 = "";
            vm.side4 = "";
            vm.checkResult = "";
        }

        vm.checkFigure = function () {
            if (vm.side1 == "" || vm.side2 == "" || vm.side3 == "" || vm.side4 == "") {
                return;
            }
            var whatFigure = ""
            if (checkSquare(vm.side1, vm.side2, vm.side3, vm.side4)) {
                whatFigure = "This is a square."
            }
            else if (checkRectangle(vm.side1, vm.side2, vm.side3, vm.side4)) {
                whatFigure = "This is a rectangle."
            }
            else {
                whatFigure = "Sorry, this is neither a Square nor a Rectangle."
            }
            vm.checkResult = whatFigure;
        }

    }


})();
