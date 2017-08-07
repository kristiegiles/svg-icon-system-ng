import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core'
declare function require(string): string;

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements AfterViewInit {
  @Input() slug: string
  @Input() svgClassNames: string
  @ViewChild('svgPathData', {read: ElementRef}) svgPathData: ElementRef;

  ngAfterViewInit(): void {
      const mySvg = require(`./icons/${this.slug}.svg`)
      this.svgPathData.nativeElement.innerHTML = mySvg
  }
}
