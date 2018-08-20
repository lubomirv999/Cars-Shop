import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PartsService } from '../parts.service';
import { PartCreate } from '../models/part-create.model';

@Component({
  selector: 'app-parts-edit',
  templateUrl: './parts-edit.component.html',
  styleUrls: ['./parts-edit.component.css']
})
export class PartsEditComponent implements OnInit {
  id: string;
  bindingModel: PartCreate;

  constructor(
    private partsService: PartsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.partsService.getById(this.id)
      .subscribe((data) => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      [this.id]: this.bindingModel
    }

    this.partsService.editPart(body)
      .subscribe((data) => {
        this.toastr.success('Part edited!', 'Success!');
        this.router.navigate(['/parts/start']);
      })
  }
}
