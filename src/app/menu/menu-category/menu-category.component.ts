import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCategory, OrderUpdate } from 'src/app/products';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
})
export class MenuCategoryComponent {
    @Input()
    category: ProductCategory = undefined;

    @Output()
    select = new EventEmitter<OrderUpdate>()

    handleItemClick($event:OrderUpdate) {
      let el: OrderUpdate = { ...$event, category: this.category.name };
      this.select.emit(el)
    }
}
