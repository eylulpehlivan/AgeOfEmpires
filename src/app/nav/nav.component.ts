import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    (function($){
      function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
          _m = $('.dropdown-menu', _d);
        setTimeout(function(){
          const shouldOpen = e.type !== 'click' && _d.is(':hover');
          _m.toggleClass('show', shouldOpen);
          _d.toggleClass('show', shouldOpen);
          $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
      }
      $('body')
      .on('mouseenter mouseleave','.dropdown',toggleDropdown)
      .on('click', '.dropdown-menu a', toggleDropdown);
    })(jQuery);

    


  }

}
