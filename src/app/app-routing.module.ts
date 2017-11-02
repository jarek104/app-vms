import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VmListComponent } from './vm-list.component';
import { EditVmsComponent } from './edit-vms.component';

const routes: Routes = [
  { path: '', redirectTo: '/vms', pathMatch: 'full' },
  { path: 'vms', component: VmListComponent },
  { path: 'editVms', component: EditVmsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
