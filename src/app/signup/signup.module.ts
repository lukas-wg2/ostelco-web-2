import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup.page';
import { EmailStepComponent } from './email-step/email-step.component';
import { GetAppStepComponent } from './get-app-step/get-app-step.component';

const routes: Routes = [
  {
    path: '',
    component: SignupPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: EmailStepComponent
      },
      {
        path: 'get-app',
        component: GetAppStepComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupPage, EmailStepComponent, GetAppStepComponent]
})
export class SignupPageModule {}
