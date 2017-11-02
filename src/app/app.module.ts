import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { VmListComponent } from './vm-list.component';
import { EditVmsComponent } from './edit-vms.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddNewVmComponent } from './add-vm.component';

@NgModule({
  declarations: [
    AppComponent,
    VmListComponent,
    EditVmsComponent,
    AddNewVmComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
