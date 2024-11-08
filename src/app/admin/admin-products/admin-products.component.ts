import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  editProduct(product: Product): void {
    // Logic for editing the product goes here
    console.log("Editing product:", product);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
    });
  }

  addNewProduct(): void {
    // Logic for adding a new product
    console.log("Adding new product");
  }
}
