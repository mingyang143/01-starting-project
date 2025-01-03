import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';
import { type User } from './user.model';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  //imagePath = computed(() => 'assets/users/' + this.avatar());
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output()
  select = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
