import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
//import 'rxjs/observable/from';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodosService;

 /* beforeEach( () => {
    service = new TodosService(null);
    component = new TodosComponent(service);

  });

  it('should set todos property with the items returned from the server', () =>   {
    let todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake( ()=> {
      return from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);

  });*/

});
