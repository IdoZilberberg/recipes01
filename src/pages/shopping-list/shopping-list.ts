import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Ingredient} from "../../models/ingredient";

// Using the "Template" approach for form creation

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  listItems: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  onAddItem(form: NgForm) {
    console.log(form);
    this.shoppingListService.addItem(form.value.ingredientName, form.value.amount);
    form.reset(); // empty the input fields and reset validation
    this.loadItems();

  }

  // every time entering this view
  ionViewWillEnter()  {
    this.loadItems();
  }


  private loadItems() {
    this.listItems = this.shoppingListService.getItems();
  }

  onRemoveItem(index: number) {
    this.shoppingListService.removeItem(index);
    this.loadItems();
  }
}
