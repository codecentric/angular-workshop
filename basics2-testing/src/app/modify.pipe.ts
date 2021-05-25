import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "modify"
})
export class ModifyPipe implements PipeTransform {

  transform(value: number): number {
    return value + 2;
  }

}
