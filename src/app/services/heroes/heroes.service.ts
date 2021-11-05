import { Injectable } from '@angular/core'

export interface Hero {
	name: string
	bio: string
	img: string
	first: string
	home: string
}

@Injectable({
	providedIn: 'root',
})
export class HeroesService {
	private heroes: Hero[] = [
		{
			name: 'Aquaman',
			bio: 'Aquaman´s most recognized power is the telepathic ability to communicate with marine life, which it can summon over great distances.',
			img: 'assets/img/aquaman.png',
			first: '1941-11-01',
			home: 'DC',
		},
		{
			name: 'Batman',
			bio: 'The main features of Batman are summarized in "physical prowess, deductive abilities and obsession." Most of the basic characteristics of the comics have varied by the different interpretations that have been given to the character.',
			img: 'assets/img/batman.png',
			first: '1939-05-01',
			home: 'DC',
		},
		{
			name: 'Daredevil',
			bio: 'Having lost his sight, Daredevil´s remaining four senses were heightened by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can "see" through a "sixth sense" that serves as a bat-like radar.',
			img: 'assets/img/daredevil.png',
			first: '1964-01-01',
			home: 'Marvel',
		},
		{
			name: 'Hulk',
			bio: 'His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).',
			img: 'assets/img/hulk.png',
			first: '1962-05-01',
			home: 'Marvel',
		},
		{
			name: 'Green Lantern',
			bio: 'Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is powered by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a manufacturer found of lamps named Chang).',
			img: 'assets/img/linterna-verde.png',
			first: '1940-06-01',
			home: 'DC',
		},
		{
			name: 'Spider-Man',
			bio: 'After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Man´s strength allows him to lift 10 tons or more. Thanks to this great strength, Spider-Man can perform incredible jumps. A "spider sense", which lets him know if a danger is looming over him, before it happens. Sometimes this can lead Spider-Man to the source of danger.',
			img: 'assets/img/spiderman.png',
			first: '1962-08-01',
			home: 'Marvel',
		},
		{
			name: 'Wolverine',
			bio: 'In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, no matter how deadly it may be, and that same power makes him immune to any disease existing on Earth and some aliens. He also has superhuman strength, which although it does not compare with that of other superheroes like the Hulk, it does exceed that of any human.',
			img: 'assets/img/wolverine.png',
			first: '1974-11-01',
			home: 'Marvel',
		},
	]

	constructor() {}

	getHeroes = (): Hero[] => this.heroes

	getHeroe = (id: number): Hero => this.heroes[id]

	searchHeroes = (name: string): Hero[] =>
		this.heroes.filter((hero) =>
			hero.name
				.toLowerCase()
				.includes(name.toLowerCase())
		)
}
