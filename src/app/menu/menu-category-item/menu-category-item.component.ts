import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, OrderUpdate } from 'src/app/products';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/order.service';

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
  orderId:string;

  constructor(private orderService: OrderService) {
    this.orderService.clearOrder$.subscribe(()=>{
      this.amount=0;
      sessionStorage.removeItem(`${this.orderId}-${this.product.name}`)
    })
  }

  ngOnInit(){
    this.orderId = sessionStorage.getItem('current_order');

    const itemInStorage = sessionStorage.getItem(`${this.orderId}-${this.product.name}`) || '0';
    if (itemInStorage && !isNaN(Number(itemInStorage)) && Number(itemInStorage)) {
      this.amount = Number(itemInStorage);
    }
  }

  handleClick() {
    event.stopPropagation();
    if (this.amount < 1) { 
      this.amount = 1;
      this.emitAction("add");
    }
  }

  private emitAction(action: "add" | "remove") {
    sessionStorage.setItem(`${this.orderId}-${this.product.name}`, this.amount.toString())
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