import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../category';

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.css']
})
export class CategoryBoxComponent {

  @Input() categories: Category[];
  @Output() categoryClicked = new EventEmitter<Category>();

  notificarCategoryClick(category: Category) {
    this.categoryClicked.emit(category);
  }
}
