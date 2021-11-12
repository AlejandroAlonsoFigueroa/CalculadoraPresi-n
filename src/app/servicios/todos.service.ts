import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({

  providedIn: "root"
})

export class TodosService { 
  constructor(private miHttp: HttpClient) { 
  }

  

  getJson(url: string){
    return this.miHttp.get(url);
}


  /*add(todo: any) {
    return this.http.post('...', todo).pipe(map(r => r as [] ));
  }

  getTodos() { 
    return this.http.get('...').pipe(map(r => r as number[] ));
  }

  delete(id: any) {
    return this.http.delete('...').pipe(map(r => r as [] ));
  }*/
}
