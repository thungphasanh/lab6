import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/categories');
  }
  onSubmit(myForm: any) {
    if (myForm.valid) {
      this.dataService.addItem(myForm.value).subscribe((res:any) => {
        console.log(res);        
        this.router.navigate(['/categories']);
      });
    } else {
      Object.keys(myForm.controls).forEach((field) => {
        const control = myForm.controls[field];
        control.markAsTouched();
      });
    }
  }
}
