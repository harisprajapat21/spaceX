import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
@Component({
  selector: 'app-loader-component',
  templateUrl: './loader-component.component.html',
  styleUrls: ['./loader-component.component.css']
})
export class LoaderComponentComponent implements OnInit {

  constructor(private loaderServ: LoaderService) { }

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderServ.isLoading;
  ngOnInit(): void {
  }

}