import {Ingredient} from "../models/ingredient";

export class ShoppingListService  {

  private ingredients: Ingredient[] = [];

  addItem(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    console.log(this.ingredients);
    // return this.ingredients.splice();
  }

  addItems(items: Ingredient[]) {
    this.ingredients.push(...items); // spread op - es6
  }

  getItems()  {
    return this.ingredients.slice();
  }

  removeItem(index: number) {
    this.ingredients.splice(index, 1);
  }


}
