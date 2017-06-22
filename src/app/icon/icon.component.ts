import { Component, OnInit, Input } from '@angular/core';
//import 'icons/sprite.svg'

@Component({
  selector: 'icon',
  template: `<svg class="icon">
      <use [attr.xlink:href]="hashedId" />
    </svg>`,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() id: string
  hashedId: string

  ngOnInit() {
    this.hashedId = `#${this.id}`
  }
}
