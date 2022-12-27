import nyord from './lists/nyord.mjs'
import buzz from './lists/buzz.mjs'
import namn from './lists/namn.mjs'
import akademiska from './lists/akademiska.mjs'

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
	},
	löremIpsum = ({
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
		let k = 'bdfghjklmnprstv',
			v = 'aouåeiyäö',
			pre = [
				'a',
				'a',
				'a',
				'ana',
				'ante',
				'anti',
				'astro',
				'auto',
				'be',
				'be',
				'be',
				'be',
				'bi',
				'bio',
				'de',
				'deka',
				'deci',
				'di',
				'di',
				'di',
				'dia',
				'ego',
				'epi',
				'euro',
				'e',
				'exo',
				'eu',
				'geo',
				'giga',
				'hemi',
				'hetero',
				'hexa',
				'homo',
				'hypo',
				'i',
				'infra',
				'intra',
				'ko',
				'kontra',
				'kro',
				'kvasi',
				'makro',
				'ma',
				'mega',
				'mikro',
				'mono',
				'multi',
				'o',
				'o',
				'o',
				'o',
				'o',
				'o',
				'para',
				'pa',
				'pe',
				'poly',
				'po',
				'pre',
				'pre',
				'pre',
				'pro',
				'pseudo',
				're',
				'rea',
				're',
				'semi',
				'steno',
				'su',
				'supra',
				'sy',
				'tele',
				'tera',
				'tetra',
				'tra',
				'tri',
				'ultra',
			],
			mid = [
				'do',
				're',
				'mi',
				'fa',
				'so',
				'la',
				'ti',
				'ne',
				'de',
				'se',
				'kro',
				'pla',
				'pre',
				'tre',
				'di',
				'va',
				'sa',
				'po',
				'ka',
				'spe',
				'vi',
				'ni',
				'be',
				'te',
				'ny',
			],
			suf = [
				'sa',
				'na',
				'ra',
				'da',
				'sat',
				'nat',
				'rat',
				'dat',
				'sade',
				'nade',
				'rade',
				'dade',
				't',
				'ss',
				's',
				'ck',
				'pp',
				'n',
				'n',
				'n',
				'n',
				'n',
				'r',
				'r',
				'r',
				'r',
				'r',
				'r',
				'r',
				'r',
				'r',
				'd',
				'ssa',
				'tt',
				'st',
				'st',
				'nt',
				'ren',
				'de',
				'de',
				'de',
				'de',
				'se',
				'nera',
				'ning',
				'ning',
				'sade',
				'ssade',
				'rade',
				'rad',
				'ktig',
				'rtad',
				'sm',
				'ledes',
				'skap',
				'skapet',
				'l',
				'l',
				'l',
				'ns',
				'ktig',
				'ktigt',
				'ktiga',
				'll',
				'ns',
				'gon',
				'gen',
				'het',
				'heten',
				'bel',
				'bel',
				'belt',
				'd',
				'k',
				'ng',
				'ngen',
				's',
				's',
				's',
				'sk',
				'sk',
				'sk',
				'ska',
				'ska',
				'skade',
				'sm',
				'v',
				'v',
				'v',
				'ligen',
				'logi',
				'gisk',
				'ment',
				'sam',
				'samma',
				'vis',
				'vis',
				'vis',
				'vis',
				'gt',
				'gt',
				'gt',
				'lig',
				'lig',
				'lig',
				'liga',
				'liga',
				'ligt',
				'ligt',
				'ra',
				'rar',
				'rade',
				'ras',
				'rat',
				'na',
				'nar',
				'nade',
				'nas',
				'nat',
				'nde',
				'nde',
				'nde',
				're',
				're',
				'ren',
				'ling',
				'lingar',
				'ling',
				'ng',
				'ngar',
				'ngen',
			],
			konj = [
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'i',
				'och',
				'och',
				'och',
				'och',
				'och',
				'och',
				'och',
				'och',
				'och',
				'och',
				'att',
				'att',
				'att',
				'att',
				'det',
				'en',
				'på',
				'är',
				'som',
				'för',
				'med',
				'har',
				'av',
				'till',
				'den',
				'inte',
				'inte',
				'inte',
				'inte',
				'de',
				'om',
				'ett',
				'jag',
				'men',

				'samt',
				'såväl som',
				'respektive',
				'plus',
				'inklusive',
				'eller',
				'men',
				'fast',
				'utan',
				'utom',
				'förutom',
				'för',
				'så',
				'det vill säga',
				'alltså',
				'att',
				'som',
				'om',
				'än',
				'om',
				'ifall',
				'huruvida',
				'än',
				'liksom',
				'såsom',
				'eftersom',
				'därför att',
				'för att',
				'då',
				'emedan',
				'fast',
				'fastän',
				'oaktat',
				'om än',
				'även om',
				'för att',
				'om',
				'ifall',
				'då',
				'när',
				'medan',
				'sedan',
				'innan',
				'till',
				'tills',
			],
			neologismer = (o =>
				o.prefix.flatMap(p => o.suffix.map(s => p + s)))(akademiska),
			getName = () =>
				`${random() ? namn.k[random(100)] : namn.m[random(100)]} ${
					namn.e[random(100)]
				}`,
			getWord = () => {
				return Math.random() < nyordFrequency
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
					  suf[random(suf.length)]
			},
			getSentence = () => {
				let max = random(minSentenceLength, maxSentenceLength + 1),
					s = ''
				// reduce probability of one word sentences (but not 0)
				max =
					max < 2
						? random(minSentenceLength, maxSentenceLength + 1)
						: max

				for (let n of Array(max)) {
					s += getWord()

					// add commas or colons
					s +=
						n > 0 && n < max - 1 && !random(6)
							? random(8)
								? ', '
								: ': '
							: ' '

					// add conjunctions
					if (n > 0 && n < max - 1)
						s += random(3) ? '' : konj[random(konj.length)] + ' '
				}

				// Make it a sentence
				return (
					s.slice(0, 1).toUpperCase() +
					s.slice(1, -1) +
					(isHeadline ? '' : '. ')
				)
			},
			getParagraph = () => {
				let p = ''

				if (isName) p += getName()
				else {
					for (let i of Array(sentencesPerParagraph))
						p += getSentence()

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
			},
			wrapWithP = numberOfParagraphs > 1 || alwaysWrapParagraph,
			lörem = 'Lörem ipsum ',
			// add random syllables for variation
			syllables = Array(50)
				.fill(0)
				.map(() => k[random(k.length)] + v[random(v.length)]),
			s = ''

		if (isName) useLörem = false

		// add mid thrice so as not to sound too pompous.
		pre = [...pre, ...syllables, ...v.split(''), ...mid, ...mid, ...mid]
		mid = [...mid, ...syllables]

		// get pragraphs
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
