import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedingungenComponent } from './tutorial/bedingungen/bedingungen.component';
import { IfElseComponent } from './tutorial/if-else/if-else.component';
import { SchleifenComponent } from './tutorial/schleifen/schleifen.component';
import { RechnenComponent } from './tutorial/rechnen/rechnen.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tutorial/bedingungen' },
  { path: 'tutorial/bedingungen', component: BedingungenComponent },
  { path: 'tutorial/rechnen', component: RechnenComponent },
  { path: 'tutorial/if-else', component: IfElseComponent },
  { path: 'tutorial/schleifen', component: SchleifenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
