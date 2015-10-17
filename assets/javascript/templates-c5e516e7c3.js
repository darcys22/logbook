angular.module("myApp").run(["$templateCache", function($templateCache) {$templateCache.put("partials/public/js/templates.js","");
$templateCache.put("partials/home.html","<div class=\"jumbotron text-center\">\n\n  <div class=\"container\">\n<div class=\"col-sm-6 col-sm-offset-3\">\n  \n  <form name=\"form\" id=\"sign-in-form\" ng-submit=\"submit()\" autocomplete=\"off\">\n\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n          <label>Business KM</label>\n          <input type=\"text\" class=\"form-control\" name=\"km\" ng-model=\"km\">\n      </div>\n      </div>\n  <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n          <label>Average Drive</label>\n          <input type=\"text\" class=\"form-control\" name=\"avg\" ng-model=\"avg\">\n      </div>\n      </div>\n      </div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label>Date Start</label>\n        <p class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" uib-datepicker-popup=\"{{format}}\" ng-model=\"dStart\" is-open=\"status[0].opened\" min-date=\"minDate\" max-date=\"dFinish\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"false\" close-text=\"Close\" />\n              <span class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default\" ng-click=\"open(0)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n            </span></p>\n      </div>\n  </div>\n  <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n          <label>Date Finish</label>\n        <p class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" uib-datepicker-popup=\"{{format}}\" ng-model=\"dFinish\" is-open=\"status[1].opened\" min-date=\"dStart\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"false\" close-text=\"Close\" />\n              <span class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default\" ng-click=\"open(1)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n            </span></p>\n      </div>\n      </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n          <label>Odometer Start</label>\n          <input type=\"text\" class=\"form-control\" name=\"odoStart\" ng-model=\"oStart\">\n      </div>\n    </div>\n  <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n          <label>Odometer Finish</label>\n          <input type=\"text\" class=\"form-control\" name=\"odoFin\" ng-model=\"oFinish\">\n      </div>\n      </div>\n</div>\n<div class=\"row\">\n      </div>\n\n      <!--<button ng-disabled=\"form.$invalid\" type=\"submit\" class=\"btn btn-warning btn-lg\">Generate</button>-->\n      <button type=\"submit\" class=\"btn btn-warning btn-lg\">Generate</button>\n    </form>\n\n    <hr>\n    <hr>\n    \n    <div class=\"text-center\">\n      <p>Note: the odometer end and the end date are soft finishes. It will probably generate some numbers past your given figures. This is mostly the fault of the randomiser. If this bothers you change it by hand.</p>\n    </div>\n\n\n\n</div>\n</div>\n</div>\n");}]);