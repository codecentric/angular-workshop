import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  buildBreadCrumb(route: ActivatedRoute): BreadCrumb[] {
    const routePath = route.snapshot.pathFromRoot;
    return routePath
      .map(
        (snapshot) =>
          ({
            label: snapshot?.data?.breadcrumb,
            resolvedUrl: this.getResolvedUrl(snapshot),
          } as BreadCrumb)
      )
      .filter((breadcrumb) => breadcrumb.label);
  }

  /**
   * Returns the URL for a route and resolves route-parameters according to the currently activated route
   * @param route
   */
  private getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return (
      '/' +
      route.pathFromRoot
        .map((routeSnapshot) => routeSnapshot.url.map((segment) => segment.toString()).join('/'))
        .filter((url) => !!url)
        .join('/')
    );
  }
}

export interface BreadCrumb {
  label: string;
  resolvedUrl: string;
}
