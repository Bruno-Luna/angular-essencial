import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]',
})
export class ForDirective implements OnInit{
  @Input("myForEm") num: number[];


  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for(let number of this.num){
      this.container.createEmbeddedView(
        this.template, { $implicit : number });
    }
  }

}
