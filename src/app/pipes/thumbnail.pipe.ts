import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: any, size: string): any {
    let temp = '';
    let thumbName = '';
    switch (size) {
      case 'small':
        temp = value.split('.');
        thumbName = temp[0] + '-tn160.png';
        value = thumbName;
        break;
      case 'medium':
        temp = value.split('.');
        thumbName = temp[0] + '-tn320.png';
        value = thumbName;
        break;
      case 'large':
        temp = value.split('.');
        thumbName = temp[0] + '-tn640.png';
        value = thumbName;
        break;
      case 'screenshot':
        value = value;
        break;
    }
    return value;
  }

}
