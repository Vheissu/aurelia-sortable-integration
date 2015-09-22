import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

import sortable from 'sortable';

@inject(EventAggregator)
export class DragDrop {

    droppedItems = [];

    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }

    /**
     * Attached
     * Called when view is attached
     *
     */
    attached() {
        this.setupSource(document.getElementById('drag-source'), false, {
            name: 'catsAndDogs',
            pull: 'clone',
            put: false
        });

        this.setupTarget(document.getElementById('drag-target'), '.dragged-element', true, 'catsAndDogs');

        this.eventListeners();
    }

    /**
     * Event Listeners
     * This is where event listeners for drag/drop events are registered
     *
     */
    eventListeners() {

        // Event triggered when item is added
        this.eventAggregator.subscribe('dragTarget.onAdd', evt => {
            let src = evt.from;
            let dest = evt.to;
			let item = evt.item;

            // When actual dragged item is dropped, we remove it and handle
            // updating the array for our repeater ourselves
            evt.item.parentElement.removeChild(evt.item);

            // Dragging widget into new page
            if (item.dataset.type) {
                let animalType = item.dataset.type;

                let itemInstance = {};

                if (animalType === 'cat') {
                    itemInstance.type = 'cat';
                    itemInstance.src  = 'http://thecatapi.com/api/images/get?format=src&type=jpg';
                } else {
                    itemInstance.type = 'dog';
                    itemInstance.src  = 'http://loremflickr.com/640/480/dog';
                }

                this.droppedItems.splice(evt.newIndex - 1, 0, itemInstance);
            }
        });

        // Events for when sorting takes place, we need to update the array to let
        // Aurelia know that changes have taken place and our repeater is up-to-date
        this.eventAggregator.subscribe('dragTarget.onUpdate', evt => {
            // The item being dragged
            let el = evt.item;
			
			// Old index position of item
            let oldIndex = evt.oldIndex;

            // New index position of item
            let newIndex = evt.newIndex;

            // If item isn't being dropped into its original place
            if (newIndex != oldIndex) {
				swapArrayElements(this.droppedItems, newIndex, oldIndex);

                evt.item.parentElement.removeChild(evt.item);
            }
        });
    }

    /**
     * Setup Source
     * Handles setting the drag source
     *
     * @param el (string)
     * @param sort (boolean)
     * @param group (object)
     */
    setupSource(el, sort = false, group = {}) {
        new sortable(el, {
            sort: sort,
            group: group,
            onStart: evt => {
                this.eventAggregator.publish('dragSource.onStart', evt);
            },
            onEnd: evt => {
                this.eventAggregator.publish('dragSource.onEnd', evt);
            }
        });
    }

    /**
     * Setup Target
     * Handles setting the drag target destination for dragged items
     *
     * @param el (string)
     * @param draggable (string)
     * @param sort (boolean)
     * @param group (object)
     */
    setupTarget(el, draggable = '.element', sort = true, group = 'somegroup') {
        new sortable(el, {
            draggable: draggable,
            sort: sort,
            group: group,
            onAdd: evt => {
                this.eventAggregator.publish('dragTarget.onAdd', evt);
            },
            onUpdate: evt => {
                this.eventAggregator.publish('dragTarget.onUpdate', evt);
            }
        });
    }
}

function swapArrayElements(theArray, a, b) {
	var temp = theArray[a];
    theArray[a] = theArray[b];
    theArray[b] = temp;
}