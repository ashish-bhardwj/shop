import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService:ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.productService.logout();
    this.router.navigate(['products']);

  }

}
