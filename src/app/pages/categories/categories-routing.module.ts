import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: ':id', component:CategoryFormComponent},
  { path: ':id/edit', component: CategoryFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

//nomesite.com/categories => list (master)
//nomesite.com/categories/new => form (detail)
//nomesite.com/categores/:id/edit => form (detail)