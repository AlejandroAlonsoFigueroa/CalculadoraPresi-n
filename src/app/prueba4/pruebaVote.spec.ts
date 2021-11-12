import {VoteComponent} from './VoteComponent';


    

describe('VoteComponent' , () =>{
    var miComponente : VoteComponent;

   beforeEach( () => {
        miComponente = new VoteComponent();


   });
       
    it('Debe incrementar los votos', () => {
        let misVotosTotales: number;
        misVotosTotales = 0;
        miComponente.votosCambiados.subscribe(tv => misVotosTotales = tv);

        miComponente.sumarVoto();

       // expect(votosTotales).not.toBeNull();

       expect(misVotosTotales).toBe(1);

    });

    
   
       



    
})