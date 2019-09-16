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
    import { Injectable } from '@angular/core';
    @Injectable({
        providedIn: 'root'
    })

    import { Component} from '@angular/core';
    @Component({
        selector: 'app-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ['./heroes.component.less']
    })
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

