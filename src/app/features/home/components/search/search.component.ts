import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.template.html',
  imports: [FormsModule],
})
export class SearchComponent {
  search = model.required<string>();
}
