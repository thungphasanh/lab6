import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router,private route:ActivatedRoute){
    this.dataService.setApiUrl('http://localhost:3000/categories')
  }
  categories:any;
  id:any;
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.dataService.getItem(this.id).subscribe((data) => {
      this.categories = data;
      })
  }
  onSubmit(myForm: any) {
    if (myForm.valid) {
    this.dataService.updateItem(myForm.value, this.id).subscribe(() => {
    this.router.navigate(['categories']);
    })
    }
    }
}
