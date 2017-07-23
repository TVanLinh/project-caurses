import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list.component';
import {NgModule} from '@angular/core';
const shopRouting: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(shopRouting)],
  exports: [RouterModule]
})
export  class  ShoppingRoutingModule {}
