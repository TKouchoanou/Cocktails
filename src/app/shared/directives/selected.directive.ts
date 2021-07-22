import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges{
   @Input() appSelected:boolean=false;
  /**
   * this fontWeight can be added to the selected class
   * @private
   */
   @HostBinding("style.fontWeight") private fontWeight!: string;
   @Input() @HostBinding("class.selected") private selected!: boolean;
   @Input()  @HostBinding("class.not-selected") private notselected!: boolean;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.appSelected);
    if(this.appSelected){
      this.selected=true;
      this.notselected=false;
      this.fontWeight = "500";
    }else {
     this.selected=false;
      this.notselected=true;
      this.fontWeight = "400";
    }
  }


}
