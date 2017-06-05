import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EqualPipe } from './filter/equal.pipe';
import { AppComponent } from './app.component';
import { AppChildComponent } from './child/appChild.component';
import { FilterByItemsService } from './services/filter-by-items.service';


@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    EqualPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilterByItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
