import { Component, Input} from '@angular/core';
import { FilterByItem } from '../services/filter-by-items.type';

@Component({
    selector: 'app-child',
    templateUrl: 'appChild.component.html',
    styles: ['appChild.component.css']
})
export class AppChildComponent  {
    private items: Array<FilterByItem> = [];
    public isOpen = false;
    public dropDownListHeader = 'Select ';
    public dropDownListApplyButton = 'Close';
    @Input()
    set childItems(childItems: Array<FilterByItem>){
        this.items = childItems;
    }
    get childItems(): Array<FilterByItem> {
        return this.items;
    }

    constructor() {}

    toggleSelect() {
        this.isOpen = !this.isOpen;
    }

    menuSelectClick() {
        this.isOpen = !this.isOpen;
    }
}
