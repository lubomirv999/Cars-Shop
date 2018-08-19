import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { PartsService } from '../parts.service';
import { AuthService } from '../../auth/auth.service';

import { PartsList } from '../models/part-list.model';

@Component({
  selector: 'app-parts-start',
  templateUrl: './parts-start.component.html',
  styleUrls: ['./parts-start.component.css']
})
export class PartsStartComponent implements OnInit {
  parts: Observable<PartsList[]>
  ownerId: string;

  constructor(
    private partsService: PartsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.parts = this.partsService.getAllCars();
    this.ownerId = this.authService.getOwnerId();
  }

  delete(id: string) {
    this.partsService.deletePart(id)
      .subscribe((data) => {
        this.toastr.success('Part deleted!', 'Success!');
        this.router.navigate(['/parts']);
        this.parts = this.partsService.getAllCars();
      })
  }
}