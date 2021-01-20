import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductsService } from '../../../core/services/products/products.service'
import { Router } from "@angular/router";
import { MyValidators } from "../../../utils/Validators";
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  product: any[] = []
  constructor(
    private formBuilder : FormBuilder,
    private ProductsService : ProductsService,
    private router : Router
  ) {
    this.buildForm();
  }
  ngOnInit(): void {

  }
  saveProduct (event: Event){
    event.preventDefault();
    const product = this.form.value
    this.form.valid
    ? this.ProductsService.createProduct(product)
    .subscribe(() => {
      this.router.navigate(['./admin/productList'])
    })
    : console.log('El formulario no es valido')
  }
  // first item of property in the array is initialization
  private buildForm(){
    this.form = this.formBuilder.group({
      id : ['', [Validators.required]],
      title: ['', [Validators.required]],
      price :[ 0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    })
  }

  get PriceField (){
    return this.form.get('price')
  }

}
