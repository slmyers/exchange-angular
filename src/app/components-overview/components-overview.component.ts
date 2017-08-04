import { Component } from '@angular/core';

@Component({
  selector: 'app-components-overview',
  template: `
  <main>
    <app-side-nav>
      
    </app-side-nav>
    <section class="content">
      <app-arrow-navigation id="right"><i class="material-icons">keyboard_arrow_right</i></app-arrow-navigation>
      <app-arrow-navigation id="left"><i class="material-icons">keyboard_arrow_left</i></app-arrow-navigation>
      <section class="code-block">
        <prism-block [code]="typescriptCode" [language]="'typescript'"></prism-block>
        <app-hello-world></app-hello-world>
        <span style="margin-left: 2em;"> Hello world</span>
      </section>
      <hr/>
      
      <section class="bullet-points">
        <ul title="overview points">

          <li>
            @ stuff is a <a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank"> decorator </a>
            This applies the meta-data to the component. There are many
            <a href="https://angular.io/api/core/Component#metadata-overview" target="_blank">optional values.</a>
          </li>

          <li>
            Interpolated values do not require namspacing. Compare with Angular 1.x
            <a href="https://toddmotto.com/digging-into-angulars-controller-as-syntax/#controllers-as-classes" target="_blank">
              Controller As syntax
            </a>
          </li>

          <li>
            Angular has an optional
            <a href="https://angular.io/api/core/Component#encapsulation" target="_blank">view encapulation</a>
            that be default compiles the styles to a css shim. This means that component styles do not leak outside the component
            -- unless you wanted to.
          </li>

        </ul>
      </section>
      
    </section>
  </main>
  `,
  styles: [
    `main {
      width: 95vw;
      height: auto;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: transparent;
      display: flex;
      margin: 2rem auto;
    }

    section.content {
      margin-left: 2rem;
      background-color: rgb(245, 245, 245);
      width: 80vw;
      border-radius: 4px;
      position: relative;
    }
    
    app-arrow-navigation {
      position: absolute;
    }

    app-arrow-navigation#right {
      right: 1em;
      top: 5em;
    }

    app-arrow-navigation#left {
      left: 1em;
      top: 5em;
    }

    section.code-block {
      width: 75%;
      margin: 0 auto;
    }
    
    section.bullet-points {
      width: 75%;
      margin: 0 auto;
      border-left: 1px solid lightgrey;
      border-right: 1px solid lightgrey;
      padding: 2em;
      margin-top: 1em;
    }

    section > app-hello-world {
      margin: 100% 0;
    }
      
    li {
      line-height: 200%;
      font-size: 175%;
    }
      
    i.material-icons {
      font-size: 48px;
      color: darkorange;
      cursor: pointer;
    }
    `
  ],
})
export class ComponentsOverviewComponent {
  typescriptCode =
`import { Component } from '@angular/core';
@Component({
  selector: 'hello-world',
  template: '<span> Hello {{ message }} </span>',
  styles: ['span { color: purple; font-size: larger; font-weight: bolder; border: solid 2px red; padding: 1em; }']  
})
export class HelloworldComponent{ message = 'world'; }`;
}
