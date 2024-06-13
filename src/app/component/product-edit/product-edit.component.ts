import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  constructor(private dataService: DataService, private router: Router,private route:ActivatedRoute){
    this.dataService.setApiUrl('http://localhost:3000/products')
  }
  product:any;
  id:any;
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.dataService.getItem(this.id).subscribe((data) => {
      this.product = data;
      })
  }
  onSubmit(myForm: any) {
    if (myForm.valid) {
    this.dataService.updateItem(myForm.value, this.id).subscribe(() => {
    this.router.navigate(['products']);
    })
    }
    }
}
