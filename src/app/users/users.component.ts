import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userName='';


users: User[] = [
  {
    id : 1,
    curso : 'Angular',
    nombre : 'Aaron',
    apellido : 'Alb',
    email: 'hola@ht',
  },
  {
    id : 2,
    curso : 'React JS',
    nombre : 'Alan',
    apellido : 'Alff',
    email: 'hola@htdd',
  }

]

  constructor(private matDialog: MatDialog) {}
  openUserDialog(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          console.log('valor:', v);
          if (!!v) {
            const lastId = this.users.length > 0 ? this.users[this.users.length - 1].id : 0;
            const newId = lastId + 1;
            this.users = [
              ...this.users,
              {
                ...v,
                id: newId,
              },
            ];
          }
        },
      });
  }
  onEditUser(user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    });
  }
  

  onDeleteUser(userId: number): void {
    if (confirm('¿Desea eliminar estos datos?')){
    this.users = this.users.filter((u) => u.id !== userId);}
  }
}  