import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthenGuardService} from '../auth/authen-guard.service';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesComponent} from './recipes.component';
import {RecepDetailComponent} from './recep-detail/recep-detail.component';
const recipRouting: Routes = [
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthenGuardService]},
      {path: ':id', component: RecepDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent,  canActivate: [AuthenGuardService]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipRouting)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {

}
