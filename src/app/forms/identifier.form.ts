import { FormGroup, FormControl } from '@angular/forms';

export function getIdentifierForm(typetext: string) : FormGroup{
    return new FormGroup({
    type: new FormGroup({ 
            text: new FormControl(typetext)
        }),
    value: new FormControl()
    });
}