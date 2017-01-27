import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterProperty',
    pure: false
})
export class FilterPropertyPipe implements PipeTransform {
    transform(value: any, query: string): any {
        return value.filter((item) => {
            query = query.trim().toUpperCase();
            if (query === "") {
                return value;
            } else {
                let s_type: string = item.type.type.toUpperCase();
                let s_state: string = item.state.state.toUpperCase();
                return query.split(" ").some(function(word) {
//                    console.log("Word:" + word);
                    return (
                        s_type.indexOf(word) >= 0 ||
                        s_state.indexOf(word) >= 0 ||
                        word.indexOf(s_type) >= 0 ||
                        word.indexOf(s_state) >= 0
                    ) ? true : false;
                });
            }
        });        
    }

}
