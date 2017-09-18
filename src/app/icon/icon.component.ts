import { Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core'

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements AfterViewInit {
  @Input() slug: string 
  @Input() svgClassNames: string = ""
  @ViewChild('svgChildNodes', {read: ElementRef}) svgChildNodes: ElementRef

  ngAfterViewInit(): void {
      const svgContent = require(`./icons/${this.slug}.svg`)
      this.svgChildNodes.nativeElement.innerHTML = svgContent
  }
}
