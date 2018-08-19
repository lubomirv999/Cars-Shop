import { Component, OnInit } from '@angular/core';
import { PartsList } from '../models/part-list.model';
import { PartsService } from '../parts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parts-details',
  templateUrl: './parts-details.component.html',
  styleUrls: ['./parts-details.component.css']
})
export class PartsDetailsComponent implements OnInit {
  part: PartsList;
  id: string;

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
      })
  }
}
