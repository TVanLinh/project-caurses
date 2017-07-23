import {Http, Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {AuthenService} from '../auth/authen.service';
@Injectable()
export class StorageDataRecipeBook {

  urlDataRecipe = 'https://ng-app-recipe-book.firebaseio.com/recipe-book.json';

  constructor(private  http: Http, private authen: AuthenService) {
  }

  saveData(recipe: Recipe[]) {
    const url = this.urlDataRecipe + '?auth=' + this.authen.getToken();
    return this.http.put(url, recipe);
  }

  getData(): Observable<Recipe[]> {
    const url = this.urlDataRecipe + '?auth=' + this.authen.getToken();

    return this.http.get(url).map((respone: Response) => {
      const data: Recipe[] = respone.json();
      for (const item of data) {
        if (!item['ingredients']) {
          item.ingredients = [];
        }
      }
      return data;
    });
  }
}
