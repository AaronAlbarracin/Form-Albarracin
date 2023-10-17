import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';




@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule { }
