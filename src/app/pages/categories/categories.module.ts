import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

@NgModule({
  
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [CategoriesListComponent, CategoriesFormComponent]
})
export class CategoriesModule { }
