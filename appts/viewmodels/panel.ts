import { Component, Injectable, NgModule } from '@angular/core';
@Component({
    selector: 'panel-title',
    template: `
    <div class="panel-heading">
		<h3 class="panel-title">
			<ng-content></ng-content>
		</h3>
	</div>
    `
})
class PanelTitle { }

@Component({
    selector: 'panel-body',
    template: `
    	<div class="panel-body">
		<ng-content></ng-content>
	</div>
    `
})
class PanelBody { }

@Component({
    selector: 'panel',
    template: `
    <div class="panel panel-primary">
    <ng-content></ng-content>
    </div>
`
})
class Panel { }

@NgModule({
    declarations: [
        Panel,
        PanelTitle,
        PanelBody
    ],
    exports: [
        Panel,
        PanelTitle,
        PanelBody
    ]
})
export class PanelModule { }

