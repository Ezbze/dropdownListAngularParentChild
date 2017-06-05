import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'equal',
    pure: false
})
export class EqualPipe implements PipeTransform {
    transform(items: any, filter: any): any {
        if (filter && Array.isArray(items)) {
           const filterKeys = Object.keys(filter);
                return items.filter((item: any) =>
                    filterKeys.reduce((memo, keyName) => {
                        return item[keyName] === filter[keyName]; }, true));
        } else {
            return items;
        }
    }
}
