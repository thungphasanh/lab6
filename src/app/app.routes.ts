import { Routes } from '@angular/router';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { CategoryEditComponent } from './component/category-edit/category-edit.component';
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductAddComponent } from './component/product-add/product-add.component';


export const routes: Routes = [
    {
        path: '',component:CategoryListComponent
    },
    {
        path: 'categories',component:CategoryListComponent
    },
    {
        path: 'categories-edit/:id',component:CategoryEditComponent
    },
    {
        path:'categories-add',component:CategoryAddComponent
    },
    {
        path: 'products', component:ProductListComponent
    },
    {
        path: 'product-edit/:id', component:ProductEditComponent
    },
    {
        path: 'product-add', component:ProductAddComponent
    }
    
];
