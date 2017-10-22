import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list.component';
import { SearchService } from'./services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
