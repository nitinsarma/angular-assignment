import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'retrivename'
})
export class RetrieveNamePipe implements PipeTransform{
transform(value: any){
    return value.substring(0, value.lastIndexOf("@"));
}
}