import { LoadingService } from './../../../shared/services/loading/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  title: string = 'bienvenid@ admin';

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
