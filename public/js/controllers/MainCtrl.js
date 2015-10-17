angular.module('MainCtrl', []).controller('MainController', function($scope) {

  $scope.open = function($event) {
    $scope.status[$event].opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.format = 'dd-MMMM-yyyy'

  $scope.status = [
  {
    opened: false
  },
  {
    opened: false
  }
  ];

  
  $scope.submit = function() {
    var days = Math.ceil(Math.abs($scope.dFinish.getTime() - $scope.dStart.getTime()) / (1000 * 3600 * 24));
    var odoDifference = $scope.oFinish - $scope.oStart;

    var k = 0;
    var l = [];
    var sum = 0;
    do {
      var x = rnd($scope.avg)
      l[k] = {km : x};
      sum += x;
      k++
    } while (sum < $scope.km)

    var spread = days / l.length;
    var personal = odoDifference - $scope.km

    k = 0;
    sum = 0;
    var odo = +$scope.oStart;
    do {
      sum += rnd(spread)
      l[k].day = moment($scope.dStart).add(sum, 'days').format('DD MMM YYYY');
      l[k].oStart = odo;
      odo += l[k].km;
      l[k].oFinish = odo;
      odo += rnd(personal/(l.length - 1))
      k++
    } while (k < l.length)
    console.log(l)

    //Generate CSV File

    var csvContent = "data:text/csv;charset=utf-8,"
    var headers = ["Date", "Odometer Start", "Odometer Finish", "KMs"].join(",");
    csvContent += headers;
    csvContent += "\n";

    l.forEach(function(infoObject, index) {
      dataString = [infoObject.day, infoObject.oStart, infoObject.oFinish, infoObject.km].join(",");
      csvContent += dataString;
      csvContent += "\n";
    })

    //Popup download

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "logbook.csv");

    link.click();


  };

  function rnd(mean) {
      return Math.ceil(+mean + mean*((Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) - 3) / 3);
  }

});
