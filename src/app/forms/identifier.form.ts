import { FormGroup, FormControl } from '@angular/forms';


//Identifier form for users email, name, etc. (text type)
export function getIdentifierForm(typetext: string) : FormGroup{
    return new FormGroup({
    type: new FormGroup({ 
            text: new FormControl(typetext)
        }),
    value: new FormControl()
    });
}