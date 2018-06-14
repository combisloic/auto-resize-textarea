var app = angular.module('auto-resize-textarea', []);

app.directive("autoResizeTextarea", ['$compile', function($compile){


        var originalHeight = undefined;
        
        var updateHeight = function(scope,element){

            if(!originalHeight){
                originalHeight = element.height();
            }

            var content = element.val();

            var parsedContent = content.replace(/[\n\r]/g,"<br/>");

            parsedContent += "<br/>";

            var id = Math.random().toString(36).substr(2,9);

            var div = $compile("<div id=" + id + " style='display:none;overflow-wrap:break-word;white-space:pre-wrap;min-height:" + originalHeight + "px;width:" + element.width() + "px;font-size:" + element.css("font-size")+ "'>" + parsedContent + "</div>")(scope);

            var body = angular.element(document).find('body');

            body.append(div);

            element.height(Math.max(div.height(), originalHeight));

           	angular.element('#'+id).remove();
        };

        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller, transcludeFn) {

                element[0].style.overflow = "hidden";
                element[0].style.fontSize = "13px";

                element.bind('keyup', function(){
                   updateHeight(scope,element);
                });
                element.bind('focus', function(){
                   updateHeight(scope,element);
                });

            }
        };
    }]);
