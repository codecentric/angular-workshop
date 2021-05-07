import {Component, OnInit} from '@angular/core';
import {BreadCrumb, BreadcrumbService} from "../../core/breadcrumb.service";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb: BreadCrumb[];

  get currentBreadcrumb() {
    if (!this.breadcrumb?.length) {
      return null;
    }
    return this.breadcrumb[this.breadcrumb.length - 1];
  }

  constructor(
    private readonly breadcrumbService: BreadcrumbService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.breadcrumb = this.breadcrumbService.buildBreadCrumb(this.activatedRoute);
  }
}
