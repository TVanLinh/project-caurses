import {Ingredient} from '../shared/ingredient.module';
import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  // changedShoppingList = new EventEmitter<Ingredient[]>();
  changedShoppingList = new Subject<Ingredient[]>();
  editItemService = new  Subject<number>();
  private  ingredients: Ingredient[] = [ new Ingredient('apple', 5), new Ingredient('samsumg', 10)];
  getIngredient():  Ingredient[] {
    return  this.ingredients
  }

  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.changedShoppingList.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  deleteIngredients(index: number) {
    this.ingredients = this.ingredients.splice(index, 1);
  }
}
