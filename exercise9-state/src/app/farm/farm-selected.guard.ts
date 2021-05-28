import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {FarmsService} from "../core/farms.service";

@Injectable()
export class FarmSelectedGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly farmsService: FarmsService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.farmsService.getSelectedFarm()?.name) {

      // else route them to a variation of the route
      this.router.navigateByUrl('/farm');

      return false
    }

    return true
  }
}
