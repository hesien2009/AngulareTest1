import { DbApiService } from './../services/db-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'my-category',
  templateUrl: './my-category.component.html',
  styleUrls: ['./my-category.component.css']
})
export class MyCategoryComponent {
  Categories: string[];
//Categories: string[]=['ANTIBIOTIC','COSMOTICS','CHEMICALS','OTHERS'];
constructor(dbApiService:DbApiService)
{
  this.Categories= dbApiService.GetAllCategories();
}

Category: any;
getcategoryName(Categoryname)
{
  this.Category=Categoryname;
}

}
