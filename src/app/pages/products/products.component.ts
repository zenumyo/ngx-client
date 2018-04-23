import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParamMap.toPromise()
      .then((success) => {
        debugger;
        console.log(success);
      })
      .catch(error => console.log(error));

  }

  ngOnInit() {
  }

}
