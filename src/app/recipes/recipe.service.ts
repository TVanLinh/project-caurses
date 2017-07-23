import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.module";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  // recipeSelected =  new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Hambergar',
      'Very good',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [new Ingredient('Hambergar', 3), new Ingredient('Hambergar b', 4)]
    ),
    new Recipe('Breath',
      'Very much',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [new Ingredient('Breath', 3), new Ingredient('Breath b', 4)]
    )
  ];

  constructor(private shpService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes;
  }

  addIngredientsTopShoppingList(ingredients: Ingredient[]) {
    this.shpService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  deleteRecipe(index: number): Recipe[] {
    return this.recipes = this.recipes.splice(index, 1);
  }

  setRecipes(recipe: Recipe[]) {
    this.recipes = recipe;
  }
}
