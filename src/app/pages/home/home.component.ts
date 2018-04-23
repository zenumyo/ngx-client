import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * 
   */
  navigateToProductPage() {
    this.router.navigate(['/pages/products'], { queryParams: { data: "Hello Shakil" } });
  }
}
