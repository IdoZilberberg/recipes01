import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {Recipe} from "../../models/recipe";
import {RecipesService} from "../../services/recipes.service";
import {RecipePage} from "../recipe/recipe";

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  recipes: Recipe[] = [];

  constructor(private navCtrl: NavController, private recipesService: RecipesService) {
  }

  onNewRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'New'}) // push to the recipes tab's stack
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();

  }

  onLoadRecipe(recipe: Recipe, index: number) {
    this.navCtrl.push(RecipePage, {recipe, index});


  }
}
