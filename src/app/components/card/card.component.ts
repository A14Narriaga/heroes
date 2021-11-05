import {
	Component,
	OnInit,
	Input,
} from '@angular/core'

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.sass'],
})
export class CardComponent
	implements OnInit
{
	@Input() hero: any
	@Input() index: number

	constructor() {
		this.hero = {}
		this.index = 0
	}

	ngOnInit(): void {}
}
