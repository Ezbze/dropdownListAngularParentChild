import { Injectable } from '@angular/core';
import { FilterByItem } from './filter-by-items.type';
import { IFilterByItemService } from './filter-by-items.interface';

@Injectable()
export class FilterByItemsService implements IFilterByItemService {
    private filterByItems: Array<FilterByItem> = [];

    constructor() {
        this.createItems();
    }

    getFilterByItems(): Array<FilterByItem> {
        return this.filterByItems;
    }

    private createItems(): void {
        this.filterByItems.length = 0;
        this.filterByItems.push({
            name: 'Capital',
            subItems: [
                { label: 'Washington DC', checked: true }
            ]
        });
        this.filterByItems.push({
            name: 'Nebraska',
            subItems: [
                { label: 'Omaha'  , checked: true  },
                { label: 'Lincoln', checked: false }
            ]
        });
        this.filterByItems.push({
            name: 'Iowa',
            subItems: [
                { label: 'Des Moines'  , checked: true  },
                { label: 'Iowa City'   , checked: false }
            ]
        });

    }
}
