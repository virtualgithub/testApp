import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonasPage } from './personas';

@NgModule({
  declarations: [
    PersonasPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonasPage),
  ],
  exports: [
    PersonasPage
  ]
})
export class PersonasPageModule {}
