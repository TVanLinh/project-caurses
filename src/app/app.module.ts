import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RecipeService} from './recipes/recipe.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StorageDataRecipeBook} from './shared/storedata.service';

import {AuthenService} from './auth/authen.service';
import {AuthenGuardService} from './auth/authen-guard.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingModule} from './shopping-list/shopping.module';
import {AuthenModule} from './auth/auth.module';

import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecipesModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    ShoppingModule,
    AuthenModule,
    CoreModule
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    StorageDataRecipeBook,
    AuthenService,
    AuthenGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
