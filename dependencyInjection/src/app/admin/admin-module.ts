import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Admin } from './admin';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule],
  providers: [Admin]
})
export class AdminModule {}
