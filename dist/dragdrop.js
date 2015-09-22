System.register(['aurelia-framework', 'aurelia-event-aggregator', 'sortable'], function (_export) {
    'use strict';

    var inject, EventAggregator, sortable, DragDrop;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function swapArrayElements(theArray, a, b) {
        var temp = theArray[a];
        theArray[a] = theArray[b];
        theArray[b] = temp;
    }
    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }, function (_sortable) {
            sortable = _sortable['default'];
        }],
        execute: function () {
            DragDrop = (function () {
                function DragDrop(eventAggregator) {
                    _classCallCheck(this, _DragDrop);

                    this.droppedItems = [];

                    this.eventAggregator = eventAggregator;
                }

                _createClass(DragDrop, [{
                    key: 'attached',
                    value: function attached() {
                        this.setupSource(document.getElementById('drag-source'), false, {
                            name: 'catsAndDogs',
                            pull: 'clone',
                            put: false
                        });

                        this.setupTarget(document.getElementById('drag-target'), '.dragged-element', true, 'catsAndDogs');

                        this.eventListeners();
                    }
                }, {
                    key: 'eventListeners',
                    value: function eventListeners() {
                        var _this = this;

                        this.eventAggregator.subscribe('dragTarget.onAdd', function (evt) {
                            var src = evt.from;
                            var dest = evt.to;
                            var item = evt.item;

                            evt.item.parentElement.removeChild(evt.item);

                            if (item.dataset.type) {
                                var animalType = item.dataset.type;

                                var itemInstance = {};

                                if (animalType === 'cat') {
                                    itemInstance.type = 'cat';
                                    itemInstance.src = 'http://thecatapi.com/api/images/get?format=src&type=jpg';
                                } else {
                                    itemInstance.type = 'dog';
                                    itemInstance.src = 'http://loremflickr.com/640/480/dog';
                                }

                                _this.droppedItems.splice(evt.newIndex - 1, 0, itemInstance);
                            }
                        });

                        this.eventAggregator.subscribe('dragTarget.onUpdate', function (evt) {
                            var el = evt.item;

                            var oldIndex = evt.oldIndex;

                            var newIndex = evt.newIndex;

                            if (newIndex != oldIndex) {
                                swapArrayElements(_this.droppedItems, newIndex, oldIndex);

                                evt.item.parentElement.removeChild(evt.item);
                            }
                        });
                    }
                }, {
                    key: 'setupSource',
                    value: function setupSource(el) {
                        var _this2 = this;

                        var sort = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
                        var group = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                        new sortable(el, {
                            sort: sort,
                            group: group,
                            onStart: function onStart(evt) {
                                _this2.eventAggregator.publish('dragSource.onStart', evt);
                            },
                            onEnd: function onEnd(evt) {
                                _this2.eventAggregator.publish('dragSource.onEnd', evt);
                            }
                        });
                    }
                }, {
                    key: 'setupTarget',
                    value: function setupTarget(el) {
                        var draggable = arguments.length <= 1 || arguments[1] === undefined ? '.element' : arguments[1];

                        var _this3 = this;

                        var sort = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
                        var group = arguments.length <= 3 || arguments[3] === undefined ? 'somegroup' : arguments[3];

                        new sortable(el, {
                            draggable: draggable,
                            sort: sort,
                            group: group,
                            onAdd: function onAdd(evt) {
                                _this3.eventAggregator.publish('dragTarget.onAdd', evt);
                            },
                            onUpdate: function onUpdate(evt) {
                                _this3.eventAggregator.publish('dragTarget.onUpdate', evt);
                            }
                        });
                    }
                }]);

                var _DragDrop = DragDrop;
                DragDrop = inject(EventAggregator)(DragDrop) || DragDrop;
                return DragDrop;
            })();

            _export('DragDrop', DragDrop);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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bGUiOiJkcmFnZHJvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3Age1xyXG5cclxuICAgIGRyb3BwZWRJdGVtcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoZWRcclxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgYXR0YWNoZWRcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0dXBTb3VyY2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYWctc291cmNlJyksIGZhbHNlLCB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdjYXRzQW5kRG9ncycsXHJcbiAgICAgICAgICAgIHB1bGw6ICdjbG9uZScsXHJcbiAgICAgICAgICAgIHB1dDogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFRhcmdldChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhZy10YXJnZXQnKSwgJy5kcmFnZ2VkLWVsZW1lbnQnLCB0cnVlLCAnY2F0c0FuZERvZ3MnKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgTGlzdGVuZXJzXHJcbiAgICAgKiBUaGlzIGlzIHdoZXJlIGV2ZW50IGxpc3RlbmVycyBmb3IgZHJhZy9kcm9wIGV2ZW50cyBhcmUgcmVnaXN0ZXJlZFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZXZlbnRMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50IHRyaWdnZXJlZCB3aGVuIGl0ZW0gaXMgYWRkZWRcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2RyYWdUYXJnZXQub25BZGQnLCBldnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3JjID0gZXZ0LmZyb207XHJcbiAgICAgICAgICAgIGxldCBkZXN0ID0gZXZ0LnRvO1xyXG5cdFx0XHRsZXQgaXRlbSA9IGV2dC5pdGVtO1xyXG5cclxuICAgICAgICAgICAgLy8gV2hlbiBhY3R1YWwgZHJhZ2dlZCBpdGVtIGlzIGRyb3BwZWQsIHdlIHJlbW92ZSBpdCBhbmQgaGFuZGxlXHJcbiAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBhcnJheSBmb3Igb3VyIHJlcGVhdGVyIG91cnNlbHZlc1xyXG4gICAgICAgICAgICBldnQuaXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGV2dC5pdGVtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERyYWdnaW5nIHdpZGdldCBpbnRvIG5ldyBwYWdlXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRhdGFzZXQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hbFR5cGUgPSBpdGVtLmRhdGFzZXQudHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUluc3RhbmNlID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hbFR5cGUgPT09ICdjYXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUluc3RhbmNlLnR5cGUgPSAnY2F0JztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtSW5zdGFuY2Uuc3JjICA9ICdodHRwOi8vdGhlY2F0YXBpLmNvbS9hcGkvaW1hZ2VzL2dldD9mb3JtYXQ9c3JjJnR5cGU9anBnJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUluc3RhbmNlLnR5cGUgPSAnZG9nJztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtSW5zdGFuY2Uuc3JjICA9ICdodHRwOi8vbG9yZW1mbGlja3IuY29tLzY0MC80ODAvZG9nJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3BwZWRJdGVtcy5zcGxpY2UoZXZ0Lm5ld0luZGV4IC0gMSwgMCwgaXRlbUluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBFdmVudHMgZm9yIHdoZW4gc29ydGluZyB0YWtlcyBwbGFjZSwgd2UgbmVlZCB0byB1cGRhdGUgdGhlIGFycmF5IHRvIGxldFxyXG4gICAgICAgIC8vIEF1cmVsaWEga25vdyB0aGF0IGNoYW5nZXMgaGF2ZSB0YWtlbiBwbGFjZSBhbmQgb3VyIHJlcGVhdGVyIGlzIHVwLXRvLWRhdGVcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2RyYWdUYXJnZXQub25VcGRhdGUnLCBldnQgPT4ge1xyXG4gICAgICAgICAgICAvLyBUaGUgaXRlbSBiZWluZyBkcmFnZ2VkXHJcbiAgICAgICAgICAgIGxldCBlbCA9IGV2dC5pdGVtO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gT2xkIGluZGV4IHBvc2l0aW9uIG9mIGl0ZW1cclxuICAgICAgICAgICAgbGV0IG9sZEluZGV4ID0gZXZ0Lm9sZEluZGV4O1xyXG5cclxuICAgICAgICAgICAgLy8gTmV3IGluZGV4IHBvc2l0aW9uIG9mIGl0ZW1cclxuICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gZXZ0Lm5ld0luZGV4O1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgaXRlbSBpc24ndCBiZWluZyBkcm9wcGVkIGludG8gaXRzIG9yaWdpbmFsIHBsYWNlXHJcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCAhPSBvbGRJbmRleCkge1xyXG5cdFx0XHRcdHN3YXBBcnJheUVsZW1lbnRzKHRoaXMuZHJvcHBlZEl0ZW1zLCBuZXdJbmRleCwgb2xkSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGV2dC5pdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZXZ0Lml0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR1cCBTb3VyY2VcclxuICAgICAqIEhhbmRsZXMgc2V0dGluZyB0aGUgZHJhZyBzb3VyY2VcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZWwgKHN0cmluZylcclxuICAgICAqIEBwYXJhbSBzb3J0IChib29sZWFuKVxyXG4gICAgICogQHBhcmFtIGdyb3VwIChvYmplY3QpXHJcbiAgICAgKi9cclxuICAgIHNldHVwU291cmNlKGVsLCBzb3J0ID0gZmFsc2UsIGdyb3VwID0ge30pIHtcclxuICAgICAgICBuZXcgc29ydGFibGUoZWwsIHtcclxuICAgICAgICAgICAgc29ydDogc29ydCxcclxuICAgICAgICAgICAgZ3JvdXA6IGdyb3VwLFxyXG4gICAgICAgICAgICBvblN0YXJ0OiBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnZHJhZ1NvdXJjZS5vblN0YXJ0JywgZXZ0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25FbmQ6IGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdkcmFnU291cmNlLm9uRW5kJywgZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dXAgVGFyZ2V0XHJcbiAgICAgKiBIYW5kbGVzIHNldHRpbmcgdGhlIGRyYWcgdGFyZ2V0IGRlc3RpbmF0aW9uIGZvciBkcmFnZ2VkIGl0ZW1zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVsIChzdHJpbmcpXHJcbiAgICAgKiBAcGFyYW0gZHJhZ2dhYmxlIChzdHJpbmcpXHJcbiAgICAgKiBAcGFyYW0gc29ydCAoYm9vbGVhbilcclxuICAgICAqIEBwYXJhbSBncm91cCAob2JqZWN0KVxyXG4gICAgICovXHJcbiAgICBzZXR1cFRhcmdldChlbCwgZHJhZ2dhYmxlID0gJy5lbGVtZW50Jywgc29ydCA9IHRydWUsIGdyb3VwID0gJ3NvbWVncm91cCcpIHtcclxuICAgICAgICBuZXcgc29ydGFibGUoZWwsIHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBkcmFnZ2FibGUsXHJcbiAgICAgICAgICAgIHNvcnQ6IHNvcnQsXHJcbiAgICAgICAgICAgIGdyb3VwOiBncm91cCxcclxuICAgICAgICAgICAgb25BZGQ6IGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdkcmFnVGFyZ2V0Lm9uQWRkJywgZXZ0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25VcGRhdGU6IGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdkcmFnVGFyZ2V0Lm9uVXBkYXRlJywgZXZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2FwQXJyYXlFbGVtZW50cyh0aGVBcnJheSwgYSwgYikge1xyXG5cdHZhciB0ZW1wID0gdGhlQXJyYXlbYV07XHJcbiAgICB0aGVBcnJheVthXSA9IHRoZUFycmF5W2JdO1xyXG4gICAgdGhlQXJyYXlbYl0gPSB0ZW1wO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9