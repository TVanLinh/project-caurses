import {NgModule} from '@angular/core';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ShoppingRoutingModule} from './shopping-routing.module';
@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ShoppingRoutingModule]
})
export class ShoppingModule {

}
