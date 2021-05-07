import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  buildBreadCrumb(route: ActivatedRoute): BreadCrumb[] {
    const routePath = route.snapshot.pathFromRoot;

    // TODO: map the "routePath" to Breadcrumbs and filter them so that we return only Breadcrumbs that contain a label.
    //  Note that a method to get a resolvedUrl from a RouteSnapshot is already implemented below.
    return []
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
