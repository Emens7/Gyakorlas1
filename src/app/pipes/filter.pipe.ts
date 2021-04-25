import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[] | null, keyWord: string): Product[] {
    if(value === null) {
        return [];
    }

    const keyWordLowerCase = keyWord.toLocaleString();

    return value.filter((product: Product) => {
      const productNameLowerCase = product.name.toLocaleLowerCase();
      return productNameLowerCase.includes(keyWordLowerCase);
    })
  }

}
