import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTypeProperty',
    pure: false
})
export class FilterTypePropertyPipe implements PipeTransform {

    transform(value: any, type: string): any {
        return value.filter((item) => {
            if (type === "") {
                return true;
            } else {
                var arrayString: any = type.split(" ");
                console.log(arrayString);
                if (arrayString.length > 0)
                return (item.type.type.toUpperCase().search(type.toUpperCase()) >= 0) ? true : false;
            }
        });
    }

}
