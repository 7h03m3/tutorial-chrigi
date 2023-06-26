import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedingungenComponent } from './bedingungen/bedingungen.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SchleifenComponent } from './schleifen/schleifen.component';
import { RechnenComponent } from './rechnen/rechnen.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BedingungenComponent,
    IfElseComponent,
    SchleifenComponent,
    RechnenComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule, FormsModule],
})
export class TutorialModule {}
