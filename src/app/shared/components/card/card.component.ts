import { Component, Input } from '@angular/core';
import { IconDefinition, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  trashIcon: IconDefinition = faTrash;
  @Input() title!: string;
  @Input() description!: string;
  @Input() priority!: string;
}
