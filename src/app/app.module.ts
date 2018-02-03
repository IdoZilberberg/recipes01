import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {TabsPage} from "../pages/tabs/tabs";
import {RecipesPage} from "../pages/recipes/recipes";
import {RecipePage} from "../pages/recipe/recipe";
import {ShoppingListPage} from "../pages/shopping-list/shopping-list";
import {EditRecipePage} from "../pages/edit-recipe/edit-recipe";
import {ShoppingListService} from "../services/shopping-list.service";
import {RecipesService} from "../services/recipes.service";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    ShoppingListPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    ShoppingListPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // RecipesService,
    ShoppingListService
  ]
})
export class AppModule {
}
