### Table of Contents
|  | [Links](https://github.com/sudheerj/angular-interview-questions#what-is-angular-framework)|
|---- | ---------
|1 | [JS Concept](#JS-Concept)|
|2 | [JS Tricks](#Tricks)|
|3 | [Ng Concepts](#Concepts)|
| |  [ng class  :: ](#ng-class ) [ng for  ::](#ng-for ) [ng model ](#ng-model )  |
| |  [Service](#Service) |
| |  [Observable](#Observable)|
| |  [Routing ](#Routing ) |
| |  [HttpClient ](#HttpClient ) |
| |  [Component Communication  ](#Component-Communication ) |

---

# JS Concept

```js
var fullname = 'tom';  
var obj = {
	fullname: 'hary',
    prop:{
    	fullname:'jack',
        getFullName: function(){
        	return this.fullname;
        }
    }
};
console.log(obj.prop.getFullName()) //jack
var test = obj.prop.getFullName
console.log(test()); //tom
```

```js
function test(){
	console.log(a);
    console.log(foo());
    
    var a=1;
    function foo(){
    	return 2;
    }
}
test();
//undefined
//2
```

```js
var Empl = {
	company: 'xyz'
}
var emp1 = Object.create(Empl);
delete emp1.company;
console.log(emp1.company); //xyz
var emp3 = Object.assign({}, Empl);
delete emp3.company
console.log(emp3.company);//undefined
```

```js
var x= {foo: 1};
var output = (function(){
	delete x.foo;
    return x.foo;
})();

console.log(output); //undefined
```
**[⬆ Back to Top](#table-of-contents)**

----
# Tricks
>embedding veriable to a string -> backticks ( ` )
```ts
this.messageService.add(`HeroService: fetched hero id=${id}`);
```

>get current month as short string..Nov,Jan..etc
```ts
new Date().toLocaleDateString('default',{ month: 'short'})
``` 
>finding one object from array of obj
```ts
//returns the object
HEROES.find(hero => hero.id === id)
//finding Index
let id:number = HEROES.findIndex(element => element==hero)
```
>finding max of something(id) in array of object 
```ts
Math.max(...heroes.map(hero => hero.id))
```
>map() method 

creates a new array with the results of calling a function for every array element
```ts
var persons = [
  {firstname : "Tanumon", lastname: "Bej"},
  {firstname : "Suman", lastname: "Bhowmick"}
];
var obj = { 'a': 2, 'b': 3, 'c': 5 };

persons.map(item=> 
    [item.firstname,item.lastname].join(" ")
    ).map(name=> '" '+ name +' "');    
//out:" Tanumon Bej "," Suman Bhowmick "
//on object
Object.keys(obj).map(
    (key, index)=> obj[key]= 
    Math.pow(obj[key],2)+1
    );
//console.log(obj): {"a":5,"b":10,"c":26}
```
>... Spread syntax

allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```ts
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
function print(t, u, v, w, x, y, z) 
{ return ">" + t + u + v + w + x + y + z}
print(-1, ...arr1, 2, ...[arr2[1],arr2[2]]);
//out: >-1012245 
print(...arr1,...arr2)
//out: >012345undefined 
```
**[⬆ Back to Top](#table-of-contents)**

-----
# Concepts
## ng class 
```html
    <div [ngClass]="popupComponent.PopupType === PopupType.CollimatorChange ||
    popupComponent.PopupType === PopupType.Estop ?
    'icon Error': 'icon Warning'">

    <div [ngClass]="{'selected':IsLower, 'disable':IsLowerDisabled}">

    <div [ngClass]="getExecutionControlButtonClass('leftButton')">

    <li [class.selected]="hero === selectedHero">

```
## ng for
```html
<div *ngFor='let message of messageService.messages'> {{message}} </div>
```
## ng model
```html
    <input [(ngModel)]="hero.name" placeholder="name"/>
```
need to import **Input** from '@angular/core';

**[⬆ Back to Top](#table-of-contents)**
## Service

The **@Injectable()** decorator accepts a metadata object for the service,
the same way the **@Component()** decorator did for your component classes.

This marks the class as one that participates in the *dependency injection system*.
The Service class is going to provide an injectable service,
and it can also have its own injected dependencies

Service must be available to the dependency injection system before Angular can inject it into the Component by registering a provider[Constractor inject]. A **provider** is something that can create or deliver a service;in this case, it instantiates the Service class to provide the service

**Injector** is the object that is responsible for choosing and injecting the provider where the app requires it

```ts
    //service
    import { Injectable } from '@angular/core';
    @Injectable({
        providedIn: 'root'
    })
    export class HeroService {}

    //component
    import { Component} from '@angular/core';
    @Component({
        selector: 'app-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.less']
    })
    export class HeroesComponent implements OnInit {}
```
When you provide the service at the *root* level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it,

**[⬆ Back to Top](#table-of-contents)**
## Observable
```ts
    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }

    // In component 
    this.heroService.getHeroes().subscribe(
        heroes => this.heroes = heroes);
```
of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

The subscribe() method passes the emitted array to the callback, which sets the component's heroes property when the response arrives,

**[⬆ Back to Top](#table-of-contents)**
## Routing

best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule

```ts
    ng generate module app-routing --flat --module=app
```
--flat puts the file in src/app instead of its own folder.

--module=app tells the CLI to register it in the imports array of the AppModule.

```ts
    const routes: Routes = [
        { path: 'heroes', component: HeroesComponent },
        //: in the path indicates that 
        //:id is a placeholder for a specific param
        { path: 'detail/:id', component: HeroDetailComponent },
        //redirects a URL that fully matches the empty path 
        //to the route whose path is '/dashboard'
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ];

    @NgModule({
        // RouterModule imports array and configures it with the
        // routes by calling RouterModule.forRoot():
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }
```
@NgModule metadata initializes the router and starts it listening for browser location changes.

>**@NgModule** metadata initializes the router and starts it listening for browser location changes.

The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL

AppRoutingModule exports RouterModule so it will be available throughout the app

A typical Angular Route has two properties:

- **path:** a string that matches the URL in the browser address bar.

- **component:** the component that the router should create when navigating to this route.

In AppComponent .htm

```html
<nav>
    <a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
```
The *RouterOutlet* is one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported **RouterModule**

routerLink attribute is set to "/heroes", the string that the router matches to the route to HeroesComponent. The routerLink is the selector for the RouterLink directive that turns user clicks into router navigations. It's another of the public directives in the **RouterModule**

onclick routing can be done as 
```html
routerLink="/detail/{{hero.id}}"
```

getting :id in the component 
```ts
//in hero-detail.component.ts
constructor(
  private route: ActivatedRoute,
  private location: Location
)
```

- **ActivatedRoute** holds information about the route to this instance of the HeroDetailComponent
- The **location** is an Angular service for interacting with the browser.  used to navigate back to the view that navigated here
```ts
this.location.back();
```

- To fetch from component on Init
```ts
//+ for number casting
//.get Return a single value for the given parameter name:
    const id = +this.route.snapshot.paramMap.get('id');
```
**[⬆ Back to Top](#table-of-contents)**
## HttpClient
 for communicating with a remote server over HTTP

 - http.get<T> returns Observable of type T
 - all HttpClient returns RxJS Observable of something.
 - HTTP is a request/response protocol. You make a request, it returns a single response.
 - HttpClient.get() returns the body of the response as an untyped JSON object by default
 - catchError() operator intercepts an Observable that failed. It passes the error to an error handler
 - RxJS tap() operator, which looks at the observable values, does something with those values, and passes them along. The tap() call back doesn't touch the values themselves
 ```ts
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    )
/**
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
*/
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
 ```
-  HttpClient.put() method takes three parameters:
    * the URL
    * the data to update (the modified hero in this case)
    * options
- .put()  expects a special header in HTTP save requests. That header is in the httpOptions constant

```ts

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
}
```

**[⬆ Back to Top](#table-of-contents)**
## Component Communication 
>1. @input

In child component .ts
```ts
import { Input } from '@angular/core';
 @Input() hero: Hero;
```
In parent component .htm

```html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```


>2. @output


>3. Service

