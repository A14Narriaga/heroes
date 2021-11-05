import { HeroesService } from './../../services/heroes/heroes.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.sass'],
})
export class HeroComponent implements OnInit {
	hero: any

	constructor(
		private activatedRoute: ActivatedRoute,
		private heroesService: HeroesService
	) {
		this.activatedRoute.params.subscribe((params) => {
			this.hero = heroesService.getHeroe(
				Number(params['id'])
			)
		})
	}

	ngOnInit(): void {}
}
