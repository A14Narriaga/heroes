import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

// Services
import {
	HeroesService,
	Hero,
} from '../../services/heroes/heroes.service'

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.sass'],
})
export class HeroesComponent implements OnInit {
	heroes: Hero[]
	searchText: string
	constructor(
		private heroesService: HeroesService,
		private activatedRoute: ActivatedRoute
	) {
		this.heroes = []
		this.searchText = ''
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			if (params['name'] && params['name'] !== '') {
				this.searchText = params['name']
				this.heroes = this.heroesService.searchHeroes(
					params['name']
				)
			} else {
				this.heroes = this.heroesService.getHeroes()
				this.searchText = ''
			}
		})
	}
}
