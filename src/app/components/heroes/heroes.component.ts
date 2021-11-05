import { Component, OnInit } from '@angular/core'

// Services
import { HeroesService, Hero } from '../../services/heroes/heroes.service'

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.sass'],
})
export class HeroesComponent implements OnInit {
	heroes: Hero[]
	constructor(
		private heroesService: HeroesService
	) {
		this.heroes = []
	}

	ngOnInit(): void {
		this.heroes = this.heroesService.getHeroes()
	}
}
