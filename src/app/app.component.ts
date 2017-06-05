import { Component , OnInit } from '@angular/core';
import { EqualPipe    } from './filter/equal.pipe';
import { FilterByItem } from './services/filter-by-items.type';
import { FilterByItemsService } from './services/filter-by-items.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private itemSubscriptions: Array<FilterByItem> = [];
  private filterService: FilterByItemsService;

  contructor(filterByItemsService: FilterByItemsService) {
        this.itemSubscriptions = [];
        this.filterService = filterByItemsService;
  }

  filterItemBtnClick(item: any) {
     item.checked = false;
  }

  ngOnInit() {
         this.itemSubscriptions = new FilterByItemsService().getFilterByItems();
         console.log(this.itemSubscriptions.length);
  }
}
