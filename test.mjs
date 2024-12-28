import lörem from './index.mjs'

console.log(
	lörem({
		numberOfParagraphs: 5,
		sentencesPerParagraph: 2,
		maxSentenceLength: 10,
		minSentenceLength: 1,
		isHeadline: false,
		isName: false,
		nyordFrequency: 0,
		neologismerFrequency: 0,
		namnFrequency: 0,
		buzzFrequency: 0,
		useLörem: true,
		punchline: 'Du kan vara drabbad.',
		wrapInDiv: false,
		paragraphStartWrap: '\n',
		paragraphEndWrap: '\n',
		alwaysWrapParagraph: false,
	}),
)
