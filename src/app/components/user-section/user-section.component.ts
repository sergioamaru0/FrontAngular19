import { Component, Input } from '@angular/core';
import { userModel } from '../../models/userModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-section',
  imports: [CommonModule],
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css'],
})
export class UserSectionComponent {
  @Input() user!: userModel;
}
