import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductsService } from '../../../core/services/products/products.service'
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MyValidators } from "../../../utils/Validators";
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id : string = '';
  constructor(
    private formBuilder : FormBuilder,
    private ProductsService : ProductsService,
    private router : Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params : Params)=>{
      this.id = params.id;
      this.ProductsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue({
          id : product.id,
          title: product.title,
          price : product.price,
          description: product.description,
        });
      });
    })
  }
  editProduct (event: Event){
    event.preventDefault();
    const product = this.form.value;
    this.form.valid
    ? this.ProductsService.updateProduct(this.id, product)
    .subscribe(() => {
      this.router.navigate(['./admin/productList'])
    })
    : console.log('El formulario no se actualizo')
  }
  // first item of property in the array is initialization
  private buildForm(){
    this.form = this.formBuilder.group({
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
