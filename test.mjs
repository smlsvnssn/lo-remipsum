import lörem from './index.mjs'

console.log(
	lörem({
		numberOfParagraphs: 1,
		sentencesPerParagraph: 10,
		maxSentenceLength: 10,
		minSentenceLength: 1,
		isHeadline: false,
		isName: false,
		nyordFrequency: 0.1,
		neologismerFrequency: 0.05,
		namnFrequency: 0,
		buzzFrequency: 0,
		useLörem: true,
		punchline: 'Du kan vara drabbad.',
		wrapInDiv: false,
		paragraphStartWrap: '<p>',
		paragraphEndWrap: '</p>',
		alwaysWrapParagraph: false,
	}),
)
