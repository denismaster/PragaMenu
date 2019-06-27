import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { MENU, OrderUpdate } from '../products';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter } from 'rxjs/operators'
import * as firebase from 'firebase';
import { OrderService } from '../order.service';

export interface OrderItem { id:string, name: string; category: string, price: number }
export interface Order { dishes: OrderItem[] }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  menu = MENU;
  orderId: string;

  order$: Observable<Order>;

  dishes: OrderItem[] = [];

  constructor(activatedRoute: ActivatedRoute, router: Router, private afs: AngularFirestore,private orderService:OrderService) {
    const order = activatedRoute.snapshot.queryParams.order;

    if (!order) {
      const generatedId  = uuid();
      this.orderId = generatedId;
      sessionStorage.setItem('current_order', this.orderId)
      this.afs.collection("orders").doc<Order>(generatedId).set({ dishes: [] }).then(_=>{
        router.navigate(['/'], { queryParams: { 'order': generatedId } });
      })
      .catch(err=>{
        alert(err);
      })
      return;
    }

    this.orderId = order;
    sessionStorage.setItem('current_order', this.orderId)
  }

  ngOnInit() {
    const orderDoc = this.afs.doc<Order>(`orders/${this.orderId}`);
    this.order$ = orderDoc.valueChanges();
    this.order$.pipe(filter(order => !!order)).subscribe(order => {
      this.dishes = order.dishes;
    })
  }

  get categorizedDishes() {
    return this.dishes.reduce((prev, current) => {
      if (!prev[current.category]) {
        prev[current.category] = [{
          name: current.name,
          amount: 1
        }]
      }
      else {
        let productsInCategory: { name: string, amount: number }[] = prev[current.category];
        let currentDishIndex = productsInCategory.findIndex(p => p.name == current.name)
        if (currentDishIndex !== -1) {
          productsInCategory[currentDishIndex].amount++;
        }
        else {
          productsInCategory.push({
            name: current.name,
            amount: 1
          });
        }

      }
      return prev;
    }, {});
  }

  get dishCategories() {
    return Object.keys(this.categorizedDishes);
  }

  get totalPrice() {
    return this.dishes.reduce((p, c) => {
      return p + c.price
    }, 0)
  }

  updateOrder(update: OrderUpdate) {
    if (update.action == "add") {
      this.afs.doc<Order>(`orders/${this.orderId}`).update({
        dishes: <any>firebase.firestore.FieldValue.arrayUnion({
          id: uuid(),
          name: update.name,
          category: update.category,
          price: update.price
        })
      })
    }
    else {
      const dishIds = this.dishes.filter(d=>d.name==update.name).map(d=>d.id);
      const idToRemove = dishIds[0];
      if(!idToRemove) return;
      this.afs.doc<Order>(`orders/${this.orderId}`).update({
        dishes: <any>firebase.firestore.FieldValue.arrayRemove({
          id: idToRemove,
          name: update.name,
          category: update.category,
          price: update.price
        })
      })
    }
  }

  clearOrder(update: OrderUpdate) {
    this.afs.doc<Order>(`orders/${this.orderId}`).update({
      dishes: [] })
    this.orderService.clearOrder();
  }
}
