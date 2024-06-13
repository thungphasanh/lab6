import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/products');
  }
  onSubmit(myForm: any) {
    if (myForm.valid) {
      this.dataService.addItem(myForm.value).subscribe((res:any) => {
        console.log(res);        
        this.router.navigate(['/products']);
      });
    } else {
      Object.keys(myForm.controls).forEach((field) => {
        const control = myForm.controls[field];
        control.markAsTouched();
      });
    }
  }
}
