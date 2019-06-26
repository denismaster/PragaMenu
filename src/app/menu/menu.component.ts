import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductCategory, OrderUpdate } from '../products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
    @Input()
    menu: ProductCategory[] = []

    @Output()
    select = new EventEmitter<OrderUpdate>()
}