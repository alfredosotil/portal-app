import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStateProperty',
    pure: false
})
export class FilterStatePropertyPipe implements PipeTransform {

  transform(value: any, state: string): any {
        return value.filter((item) => {
            if (state === "") {
                return true;
            } else {
                return (item.state.state.toUpperCase().search(state.toUpperCase()) >= 0) ? true : false;
            }
        });
    }

}
