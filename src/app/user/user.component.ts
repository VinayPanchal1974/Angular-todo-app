import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

// ---------------------
// We can use type or interface  but type can store any data type value but interface are only for objects

// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

// OR

interface User {
  id: string,
  avatar: string,
  name: string
}
// -----------------------

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();       // it is the alternative of @Output but we don't use this very often because it belong the latest version of angular

  get userImage() {
    return '/assets/users/' + this.user.avatar
  }

  onSelectUser = () => {
    this.select.emit(this.user.id)
  }



  // // Signal Way
  // name = input.required<string>();
  // avatar = input<string>("default value");
  // userImage = computed(() => {
  //   return '/assets/users/' + this.avatar()
  // })
}
