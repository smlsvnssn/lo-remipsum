import nyord from 'nyord'
import buzz from './lists/buzz.mjs'
import namn from './lists/namn.mjs'
import akademiska from './lists/akademiska.mjs'
import { prefix, suffix, fonem, konjunktioner } from './lists/smådelar.mjs'

const random = (min, max, float = false) => {
	// max can be omitted
	float = typeof max === 'boolean' ? max : float
	;[min, max] =
		max === undefined || typeof max === 'boolean'
			? // with no parameters, defaults to 0 or 1
			  min === undefined
				? [0, 2]
				: [0, +min]
			: [+min, +max]
	return float
		? Math.random() * (max - min) + min
		: Math.floor(Math.random() * (max - min)) + min
}

const neologismer = akademiska.prefix.flatMap(p =>
	akademiska.suffix.map(s => p + s),
)

const löremIpsum = ({
	numberOfParagraphs = 1,
	sentencesPerParagraph = 10,
	maxSentenceLength = 10,
	minSentenceLength = 1,
	isHeadline = false,
	isName = false,
	nyordFrequency = 0.1,
	neologismerFrequency = 0.05,
	namnFrequency = 0,
	buzzFrequency = 0,
	useLörem = true,
	punchline = 'Du kan vara drabbad.',
	wrapInDiv = false,
	paragraphStartWrap = '<p>',
	paragraphEndWrap = '</p>',
	alwaysWrapParagraph = false,
} = {}) => {
	const k = 'bdfghjklmnprstv',
		v = 'aouåeiyäö',
		lörem = 'Lörem ipsum '

	const getName = () =>
		`${random() ? namn.k[random(100)] : namn.m[random(100)]} ${
			namn.e[random(100)]
		}`

	const getWord = () =>
		Math.random() < nyordFrequency
			? nyord[random(nyord.length)]
			: Math.random() < neologismerFrequency
			? neologismer[random(neologismer.length)]
			: Math.random() < buzzFrequency
			? buzz[random(buzz.length)]
			: Math.random() < namnFrequency
			? getName()
			: pre[random(pre.length)] +
			  (random(5) ? '' : mid[random(mid.length)]) +
			  (random(10) ? '' : mid[random(mid.length)]) +
			  (random(15) ? '' : mid[random(mid.length)]) +
			  (random(25) ? '' : mid[random(mid.length)]) +
			  (random(30) ? '' : mid[random(mid.length)]) +
			  suffix[random(suffix.length)]

	const getSentence = () => {
		let max = random(minSentenceLength, maxSentenceLength + 1),
			s = ''
		// reduce probability of one word sentences (but not 0)
		max = max < 2 ? random(minSentenceLength, maxSentenceLength + 1) : max

		for (let n of Array(max).keys()) {
			s += getWord()
			// add commas or colons
			s +=
				n > 0 && n < max - 1 && !random(6)
					? random(8)
						? ', '
						: ': '
					: ' '
			// add conjunctions
			if (n > 0 && n < max - 1 && !random(3))
				s += konjunktioner[random(konjunktioner.length)] + ' '
		}
		// Make it a sentence
		return (
			s.slice(0, 1).toUpperCase() +
			s.slice(1, -1) +
			(isHeadline ? '' : '. ')
		)
	}

	const getParagraph = () => {
		let p = ''

		if (isName) p += getName()
		else {
			for (let i of Array(sentencesPerParagraph)) p += getSentence()

			// add punchline
			if (maxSentenceLength > 3)
				p += random(15)
					? ''
					: isHeadline
					? '. ' + punchline + ''
					: punchline + ' '
		}

		// wrap if more than one paragraphs
		return wrapWithP ? paragraphStartWrap + p + paragraphEndWrap : p
	}

	// add random syllables for variation
	let syllables = Array(100)
		.keys()
		.map(() => k[random(k.length)] + v[random(v.length)])

	let wrapWithP = numberOfParagraphs > 1 || alwaysWrapParagraph

	let pre = prefix,
		mid = fonem,
		s = ''

	if (isName) useLörem = false

	// add mid thrice so as not to sound too pompous.
	pre = [...pre, ...syllables, ...v.split(''), ...mid, ...mid, ...mid]
	mid = [...mid, ...syllables]

	// get paragraphs
	for (let i of Array(numberOfParagraphs)) s += getParagraph()

	// add lörem
	if (useLörem && maxSentenceLength > 3)
		s = wrapWithP
			? s.slice(0, paragraphStartWrap.length) +
			  lörem +
			  s
					.slice(
						paragraphStartWrap.length,
						paragraphStartWrap.length + 1,
					)
					.toLowerCase() +
			  s.slice(paragraphStartWrap.length + 1)
			: lörem + s.slice(0, 1).toLowerCase() + s.slice(1)

	// optional wrap
	return wrapInDiv ? '<div>' + s + '</div>' : s
}

export default löremIpsum
