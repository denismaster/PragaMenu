import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, OrderUpdate } from 'src/app/products';

@Component({
  selector: 'app-menu-category-item',
  templateUrl: './menu-category-item.component.html',
})
export class MenuCategoryItemComponent {
  @Input()
  product: Product = undefined;

  @Output()
  click = new EventEmitter<OrderUpdate>();

  amount: number = 0;

  handleClick() {
    event.stopPropagation();
    if (this.amount < 1) {
      this.emitAction("add");
      this.amount = 1;
    } 
  }

  private emitAction(action: "add" | "remove") {
    this.click.emit({
      action,
      name: this.product.name,
      price: this.product.price || 0
    });
  }

  increaseAmount() {
    event.stopPropagation();
    this.amount = this.amount + 1;
    this.emitAction("add");
  }

  decreaseAmount() {
    event.stopPropagation();
    this.amount = Math.max(this.amount - 1, 0);
    this.emitAction("remove");
  }
}