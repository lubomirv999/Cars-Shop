import { Component, OnInit } from '@angular/core';
import { PartsService } from '../parts.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { PartCreate } from '../models/part-create.model';

@Component({
  selector: 'app-parts-create',
  templateUrl: './parts-create.component.html',
  styleUrls: ['./parts-create.component.css']
})
export class PartsCreateComponent implements OnInit {
  bindingModel: PartCreate;
  ownerId = firebase.auth().currentUser.uid;

  constructor(private partsService: PartsService,
    private toastr: ToastrService,
    private router: Router) {
    this.bindingModel = new PartCreate("", "", 0, "", "", firebase.auth().currentUser.uid);
  }

  ngOnInit() {
  }

  create() {
    this.partsService.createPart(
      this.bindingModel)
      .subscribe(() => {
        this.toastr.success('Part created!', 'Success');
        this.router.navigate(['/parts/start']);
      })
  }
}
