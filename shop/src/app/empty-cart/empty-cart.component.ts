import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.css']
})
export class EmptyCartComponent implements OnInit {

  @Input() title:string;
  @Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
