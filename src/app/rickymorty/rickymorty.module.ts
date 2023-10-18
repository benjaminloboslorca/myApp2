import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickymortyPageRoutingModule } from './rickymorty-routing.module';
import { RickymortyPage } from './rickymorty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickymortyPageRoutingModule,
  ],
  declarations: [RickymortyPage],
})
export class RickymortyPageModule {}
