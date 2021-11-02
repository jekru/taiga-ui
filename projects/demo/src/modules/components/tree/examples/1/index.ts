import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tree-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTreeExample1 {}