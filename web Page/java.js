let counter = 0;

const counterValue = document.getElementById('counter-value1');
const incrementBtn = document.getElementById('increment-btn1');
const decrementBtn = document.getElementById('decrement-btn1');


// To increment the value of counter
incrementBtn.addEventListener('click', () => {
	counter++;
	counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
	counter--;
	counterValue.innerHTML = counter;
});


const counterValue2 = document.getElementById('counter-value2');
const incrementBtn2 = document.getElementById('increment-btn2');
const decrementBtn2 = document.getElementById('decrement-btn2');


// To increment the value of counter
incrementBtn2.addEventListener('click', () => {
	counter++;
	counterValue2.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn2.addEventListener('click', () => {
	counter--;
	counterValue2.innerHTML = counter;
});

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});

function myFunction() {
    var element = document.getElementById("r");
    element.classList.remove("check");
  };
  window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });