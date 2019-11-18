# Tricks
>embedding veriable to a string -> backticks ( ` )
```ts
this.messageService.add(`HeroService: fetched hero id=${id}`);
```
>finding one object from array of obj
```ts
HEROES.find(hero => hero.id === id)
```
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

## service

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

