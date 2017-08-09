import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core'
declare function require(string): string; // hack to make typescript happy

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements AfterViewInit {
  @Input() slug: string //must match filename of icon in 'icons' directory
  @Input() svgClassNames: string = "" //additional classes you want on the svg
  @ViewChild('svgPathData', {read: ElementRef}) svgPathData: ElementRef;

  ngAfterViewInit(): void {
      const mySvg = require(`./icons/${this.slug}.svg`)
      this.svgPathData.nativeElement.innerHTML = mySvg
  }
}
