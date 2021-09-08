import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { AssociateAppComponent } from './forms/associate-app/associate-app.component';
import { CreateApplicationComponent } from './forms/create-application/create-application.component';
import { CreateCellComponent } from './forms/create-cell/create-cell.component';

const routes:Routes =[   
  {path:"",component:BodyComponent},
  {path:"createCell",component:CreateCellComponent},
  {path:"createApplication",component:CreateApplicationComponent},
  {path:"associateApp",component:AssociateAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
 export const routingComponents=[BodyComponent];
