import { Product } from './../pages/product/product';
import { ApiService } from './../api-service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList {
  singleproduct:any;//declear an array
  constructor(private route:ActivatedRoute,private apiService: ApiService,private cdr:ChangeDetectorRef) {}//create constructor and intailize apiservice

  //create ngonit function(page load)
  ngOnInit(): void{
    // get id from URL
    const productid = this.route.snapshot.paramMap.get('titleid');
    if(productid){
      this.apiService.getsingleproduct(productid).subscribe(data=>{
          this.singleproduct=data;
          console.log(data)
          this.cdr.detectChanges()
      });
  }
}
}
