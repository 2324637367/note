import { Valied } from "./05";

export const numberRegxp=/^[0-9]+$/;
export class zipcode implements Valied{
    isAcceptable(s:string){
        return s.length===5&& numberRegxp.test(s)
    }
}
let code =new zipcode()
console.log(code.isAcceptable('12245')
)