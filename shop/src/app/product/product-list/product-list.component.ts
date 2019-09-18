import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { IBook } from 'app/model/books';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sortByKey: string='_id';
  
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] =[];

  constructor(private productService:ProductService,
  ) { }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
		product.category.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleOption(book:IBook): void {
   
  }

  ngOnInit(): void {
   this.getBooks();
  }

  getBooks(){
    this.productService.getProductsList().subscribe((res)=>{
      this.products=res as Product[];
      this.filteredProducts=this.products;
    });
  }


  addToCart(product:Product){
    this.productService.addToCart(product);
  }

  

 

}
