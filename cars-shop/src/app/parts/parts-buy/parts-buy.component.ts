import { Component, OnInit } from '@angular/core';
import { PartsList } from '../models/part-list.model';
import { PartsService } from '../parts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parts-buy',
  templateUrl: './parts-buy.component.html',
  styleUrls: ['./parts-buy.component.css']
})
export class PartsBuyComponent implements OnInit {
  part: PartsList;
  id: string;
  deposit: number;

  constructor(
    private partsService: PartsService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.partsService.getById(this.id)
      .subscribe(data => {
        this.part = data;
        this.deposit = 0;
      })
  }

  buy(price: string) {
    if (this.deposit >= Number(price)) {
      this.router.navigate(['buy-success']);
    } else if (this.deposit < Number(price)) {
      this.router.navigate(['buy-failed']);
    }
  }
}
