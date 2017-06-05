import { FilterByItem } from './filter-by-items.type';

export interface IFilterByItemService {
    getFilterByItems(): Array<FilterByItem>;
}
