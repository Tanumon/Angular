# Concepts
* ng class 
```html
    <div [ngClass]="popupComponent.PopupType === PopupType.CollimatorChange ||
    popupComponent.PopupType === PopupType.Estop ?
    'icon Error': 'icon Warning'">

    <div [ngClass]="{'selected':IsLower, 'disable':IsLowerDisabled}">

    <div [ngClass]="getExecutionControlButtonClass('leftButton')">

    <li [class.selected]="hero === selectedHero">

```

* ng model
```html
    <input [(ngModel)]="hero.name" placeholder="name"/>
```

* service

The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for your component classes.
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

