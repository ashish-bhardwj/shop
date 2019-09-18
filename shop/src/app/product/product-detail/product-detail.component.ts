import { Component, OnInit } from '@angular/core';
import { IBook } from 'app/model/books';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getProduct(id);
    }
  }

  getProduct(id:string){
    this.productService.getBook(id).subscribe((res)=>{
      this.product=res as Product;
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }


  addToCart(product:Product){
    this.productService.addToCart(product);
  }




}
