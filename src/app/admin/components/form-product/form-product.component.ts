import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { AngularFireStorage } from '@angular/fire/storage'
import { ProductsService } from '../../../core/services/products/products.service'
import { MyValidators } from "../../../utils/Validators";
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators/";
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;
  constructor(
    private formBuilder : FormBuilder,
    private ProductsService : ProductsService,
    private router : Router,
    private storage : AngularFireStorage,
  ) {
    this.buildForm();
  }
  ngOnInit(): void {

  }
  uploadImage(event : any){
    const FILE = event.target.files[0];
    const NAME = FILE.name;
    const FILEREF = this.storage.ref(NAME);
    const TASK = this.storage.upload(NAME, FILE);

    TASK.snapshotChanges()
    .pipe(
      finalize(()=>{
        this.image$ = FILEREF.getDownloadURL();
        this.image$.subscribe(url=>{
          this.form.get('image')?.setValue(url);
        })
      })
    )
    .subscribe();
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
