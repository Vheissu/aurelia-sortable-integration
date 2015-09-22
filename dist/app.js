System.register([], function (_export) {
    'use strict';

    var App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            App = (function () {
                function App() {
                    _classCallCheck(this, App);
                }

                _createClass(App, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'Aurelia Starter';

                        config.map([{ route: [''], name: 'home', moduleId: 'dragdrop', nav: true, title: 'Home' }]);

                        this.router = router;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUNHLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDNUIsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7O0FBRWpDLDhCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1AsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQy9FLENBQUMsQ0FBQzs7QUFFSCw0QkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7cUJBQ3hCOzs7dUJBVFEsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xyXG4gICAgICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhIFN0YXJ0ZXInO1xyXG5cclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAgeyByb3V0ZTogWycnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ2RyYWdkcm9wJywgbmF2OiB0cnVlLCB0aXRsZTogJ0hvbWUnfVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=