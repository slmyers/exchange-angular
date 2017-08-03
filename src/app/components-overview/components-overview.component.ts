import { Component } from '@angular/core';

@Component({
  selector: 'app-components-overview',
  template: `
  <main>
    <app-side-nav></app-side-nav>
    <section class="content">
      <section class="code-block">
        <prism-block [code]="typescriptCode" [language]="'css'"></prism-block>
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
    }

    section.code-block {
      width: 75%;
      margin: 0 auto;
    }`
  ],
})
export class ComponentsOverviewComponent {
  typescriptCode =
`
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-overview',
  template: \`
    <main>
      <app-side-nav></app-side-nav>
      <section class="content">
        <section class="code-block">
          <prism-block [code]="typescriptCode" [language]="'css'"></prism-block>
        </section>
      </section>
    </main>
  \`,
  styles: [\`
      main {
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
    }

    section.code-block {
        width: 75%;
        margin: 0 auto;
    }\`
  ],
})
export class ComponentsOverviewComponent{ typescriptCode = \` ... \` }
`;
}
