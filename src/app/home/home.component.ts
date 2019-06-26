import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { MENU } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  menu = MENU;
  orderId: string;

  constructor(activatedRoute: ActivatedRoute, router: Router) {
    const order = activatedRoute.snapshot.queryParams.order;

    if (!order) {
      const generatedId = uuid();
      router.navigate(['/'], { queryParams: { 'order': generatedId } });
    }

    this.orderId = order;
  }

  ngOnInit() { }
}
