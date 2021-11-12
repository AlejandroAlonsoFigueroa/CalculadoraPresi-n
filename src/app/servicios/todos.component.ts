import { TodosService } from './todos.service'

export class TodosComponent {
  /*todos : any[] = [];
  message: any;*/

  //constructor(private service: TodosService)  {}

  /*ngOnInit() {
    this.service.getTodos().subscribe( (t: any[]) =>
       this.todos = t)
  }*/

  /*add () {
    var newTodo = { title: '...' };
    this.service.add(newTodo).subscribe(
        (t: any) => this.todos.push(t),
        (err: any) => this.message = err);

  }*/

  
  miObjeto: any;
  constructor(public json: TodosService){

    this.json.getJson("https://swapi.dev/api/people/1").subscribe(respuesta  => (this.miObjeto = respuesta));
  }



}
