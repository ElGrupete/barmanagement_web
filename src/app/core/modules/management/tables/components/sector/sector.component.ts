import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { SectorService } from './../../services/sector.service';
import { ResponseSector, Sector } from './../../models/sector.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {

  form: FormGroup;
  sectors: ResponseSector[] = [];
  
  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }

  constructor(private fb: FormBuilder,
              private router: Router,
              private sectorService: SectorService) { }

  ngOnInit(): void {
    this.formInit();
    this.getSectors();
  }

  formInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['']
    });
  }

  getSectors(): void {
    this.sectorService
        .getAll(API_ROUTES.config.sector)
        .pipe(
          map(allSectors => allSectors.Result.sectors)
        )
        .subscribe((sectors: ResponseSector[]) => {
          this.sectors = sectors;
        })
  }

  addSector(): void {
    let body: Sector = {
      name: this.name.value,
      description: this.description.value
    }

    this.sectorService
        .create(API_ROUTES.config.sector, body)
        .pipe(
          map(newSector => newSector.Result.sector)
          )
          .subscribe((sector: ResponseSector) => {
            this.getSectors();
        });
  }

  onBack(): void {
    this.router
        .navigate(['management', 'tables'])
  }

}
