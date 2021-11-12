import {greet} from './greet';


describe('greet' , () =>{
    it('Debe incluir un nombre en el mensaje', () => {
        
        expect(greet('Alejandro')).toContain("Alejandro");
    });



    /*it('should increment the  input if it is positive  negative', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });*/



})