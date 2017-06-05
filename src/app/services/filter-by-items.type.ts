interface IFilterByItem {
    name: string;
    subItems: Array<SubItem>;
}

export class SubItem {
    public label: string;
    public checked: boolean;
}

export class FilterByItem implements IFilterByItem {
    public name = '';
    public subItems: Array<SubItem> = [];
}
