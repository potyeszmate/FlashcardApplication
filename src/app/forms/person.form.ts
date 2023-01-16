import { FormArray, FormGroup, FormControl } from '@angular/forms';

import { getIdentifierForm } from './identifier.form';

export function getPersonForm(): FormGroup {
    return new FormGroup({

        active: new FormControl(),
        id: new FormControl(),

        identifier: new FormArray([
            getIdentifierForm('uid'),
            getIdentifierForm('email'),
        ]),


    });
}