import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { SectorService } from './../../services/sector.service';
import { Sector, ResponseSector } from './../../models/sector.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessages } from 'src/app/shared/constants/alert-messages';
import { AlertService } from './../../../../../../shared/services/alert/alert.service';
import { map } from 'rxjs/operators';
import { TablesService } from './../../services/tables.service';
import { ResponseTable, Table } from './../../models/table.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tables: ResponseTable[] = [];
  sectors: ResponseSector[] = [];
  form: FormGroup;

  get number() { return this.form.get('number'); }
  get capacity() { return this.form.get('capacity'); }
  get sector() { return this.form.get('sector'); }

  constructor(private tableService: TablesService,
              private sectorService: SectorService,
              private alertService: AlertService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.getTables();
    this.getSectors();
    this.formInit();
  }

  formInit(): void {
    this.form = this.fb.group({
      number: [0, [Validators.required, Validators.pattern(/^\d+$/)]],
      capacity: [2, [Validators.required, Validators.pattern(/^\d+$/)]],
      available: [true],
      booked: [false],
      sector: ['', [Validators.required]]
    })
  }

  patchInitialFormValues(number: number): void {
    this.number.patchValue(number);
  }

  setDefaultCapacity(): void {
    this.capacity.patchValue(2)
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
  
  getTables(): void {
    this.tableService
        .getAll(API_ROUTES.config.table)
        .pipe(
          map(allTables => allTables.Result.tables)
        )
        .subscribe((tables: ResponseTable[]) => {
          if (tables.length == 0) {
            this.patchInitialFormValues(tables.length + 1)
            this.alertService
                .openOnError(AlertMessages.noData.noResults)
          }
          this.patchInitialFormValues(tables.length + 1)
          this.tables = this.addTableInfo(tables);
        })
  }

  addTableInfo(tables: ResponseTable[]): ResponseTable[] {
    let tablesWithInfo: ResponseTable[] = [];
    tables.forEach(table => {
      tablesWithInfo.push({
        ...table,
        info: `Capacidad: ${table.people} personas. ` + 
              `Sector: ${table.sector != null ? table.sector.name + '.' : 'No pertenece a ningún sector.'} ` +
              `Mozo asignado: ${table.user != null ? table.user + '.' : 'No tiene asignado mozo.'}`
      });
    })
    return tablesWithInfo;
  }

  addTable(): void {
    let body: Table = {
      available: true,
      booked: false,
      number: this.number.value,
      people: this.capacity.value,
      sector: this.sector.value,
      // user: ''
    }    
    this.tableService
        .create(API_ROUTES.config.table, body)
        .pipe(
          map(newTable => newTable.Result.table)
          )
          .subscribe((table: ResponseTable) => {
            this.setDefaultCapacity();
            this.getTables();
        });
  }

  onBack(): void {
    this.router
        .navigate(['management', 'tables'])
  }

}
