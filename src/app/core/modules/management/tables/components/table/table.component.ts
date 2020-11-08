import { AlertMessages } from 'src/app/shared/constants/alert-messages';
import { AlertService } from './../../../../../../shared/services/alert/alert.service';
import { map } from 'rxjs/operators';
import { API_ROUTES } from './../../../../../../shared/constants/api-routes';
import { TablesService } from './../../services/tables.service';
import { ResponseTable } from './../../models/table.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tables: ResponseTable[] = [];
  

  constructor(private tableService: TablesService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.getTables();
  }
  
  getTables(): void {
    this.tableService
        .getAll(API_ROUTES.management.table)
        .pipe(
          map(allTables => allTables.Result.tables)
        )
        .subscribe((tables: ResponseTable[]) => {
          if (tables.length == 0) {
            this.alertService
                .openOnError(AlertMessages.noData.noResults)
          } 
          this.tables = tables 
        })
  }

  addTable(): void {

  }


}
