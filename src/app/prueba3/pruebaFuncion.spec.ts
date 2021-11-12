import {funcion} from './funcion';


    

describe('funcion' , () =>{

    let miComponente: funcion = new funcion();

        beforeEach(() => {
            miComponente = new funcion();
        });
       
    it('Debe incrementar los votos', () => {


        // Arrange 
        


        // Act
        miComponente.upVote();

        //Acert 
        expect(miComponente.votosTotales).toBe(1);
        /*const resultado = obtenerVector();
        expect(obtenerVector()).toContain("México");*/
    });

    
   
        it('Debe decrementar los votos', () => {
    
    
            miComponente.downVote();

            expect(miComponente.votosTotales).toBe(-1);

            /*const resultado = obtenerVector();
            expect(obtenerVector()).toContain("México");*/
        });
    



    /*it('should increment the  input if it is positive  negative', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });*/


    
})