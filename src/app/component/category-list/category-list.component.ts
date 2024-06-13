import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/categories');
  }
  ngOnInit(): void {
    this.loadData();
  }
  categories:any;
  loadData(){
    this.dataService.getItems().subscribe((data:any)=>{
      this.categories = data.sort((a: any, b: any) => a.id - b.id);
    })
  };
  deleteItem(id: any) {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
    this.dataService.deleteItem(id).subscribe(() => {
    this.loadData();
    });
    }
    }
}
