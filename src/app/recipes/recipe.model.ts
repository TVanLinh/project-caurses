import {Ingredient} from '../shared/ingredient.module';
export class Recipe {
  public name: string;
  public descriptions: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, dsc: string, imgP: string, ingredients?: Ingredient[]) {
    this.name = name;
    this.descriptions = dsc;
    this.imagePath = imgP;
    this.ingredients = ingredients;
  }

  getRecipe(name: string, dsc: string, imgP): Recipe {
    return new Recipe(name, dsc, imgP);
  }

}
