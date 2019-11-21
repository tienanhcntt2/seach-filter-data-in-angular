import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SearchComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
