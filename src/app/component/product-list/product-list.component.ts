import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
}) 
export class ProductListComponent implements OnInit {
  constructor(private dataService: DataService, private router:Router){
    this.dataService.setApiUrl('http://localhost:3000/products');
  }
  products:any
  ngOnInit(){
    this.dataService.getItems().subscribe((data:any)=>{
      this.products = data.sort((a: any, b: any) => a.id - b.id);
    })
  }
  
  deleteItem(id: any) {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
    this.dataService.deleteItem(id).subscribe(() => {
      this.dataService.getItems().subscribe((data:any)=>{
        this.products = data.sort((a: any, b: any) => a.id - b.id);
      })
    });
    }
    }
}
