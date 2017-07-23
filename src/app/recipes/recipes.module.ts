
import {NgModule} from '@angular/core';
import {RecepDetailComponent} from './recep-detail/recep-detail.component';
import {RecepListComponent} from './recep-list/recep-list.component';
import {RecipesComponent} from './recipes.component';
import {RecepItemComponent} from './recep-list/recep-item/recep-item.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipeRoutingModule} from './recipe-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  declarations: [
    RecipesComponent,
    RecepListComponent,
    RecepDetailComponent,
    RecepItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    FormsModule,
    RecipeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})



export  class RecipesModule {

}
