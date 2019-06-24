import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[mlShowHide]'
})
export class ShowHideDirective {

  constructor(private el: ElementRef) {
    this.setUp();
  }

  setUp() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = 'Show Password';
    span.classList.add("showHidePassword");
    let me = this;
    let toShow = false;
    span.addEventListener('click', (event) => {
      if (toShow) {
        me.el.nativeElement.type = 'text';
        span.innerHTML = 'Hide Password';
        toShow = false;
      } else {
        me.el.nativeElement.type = 'password';
        span.innerHTML = 'Show Password';
        toShow = true;
      }
    });
    parent.appendChild(span);
  }

}
