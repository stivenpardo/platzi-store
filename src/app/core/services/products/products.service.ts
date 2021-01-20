import { Injectable } from '@angular/core';
import { IProduct } from '../../models/IProduct.model';
import { HttpClient } from '@angular/common/http';
import { environment  } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts(){
    let products = this.http.get<IProduct[]>(`${environment.url_api}/products`)
    return products;
  }
  getProduct(id: string ){
    let product = this.http.get<IProduct>(`${environment.url_api}/products/${id}`)
    return product;
  }
  createProduct(product: IProduct){
    let newProduct = this.http.post(`${environment.url_api}/products`, product);
    return newProduct;
  }
  updateProduct(id: string, changes: Partial<IProduct> ){
    let updateProduct = this.http.put(`${environment.url_api}/products/${id}`, changes);
    return updateProduct;
  }
  deleteProduct(id: string){
    let deleteProduct = this.http.delete(`${environment.url_api}/products/${id}`);
    return deleteProduct;
  }
}
