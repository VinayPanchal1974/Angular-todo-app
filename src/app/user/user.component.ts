import { Component, computed, Input, input } from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) name!: string;
  @Input({required:true}) avatar!: string;
  get userImage() {
    return '/assets/users/' + this.avatar
  }

  // // Signal Way
  // name = input.required<string>();
  // avatar = input<string>("default value");
  // userImage = computed(() => {
  //   return '/assets/users/' + this.avatar()
  // })

  onSelectUser = () => { }
}
