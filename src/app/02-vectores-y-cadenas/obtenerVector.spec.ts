import {obtenerVector} from './obtenerVector';


describe('obtenerVector' , () =>{
    it('Debe tener México el vector', () => {
        const resultado = obtenerVector();
        expect(obtenerVector()).toContain("México");
    });



    /*it('should increment the  input if it is positive  negative', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });*/



})