import nyord from 'nyord'
import buzz from './lists/buzz.mjs'
import namn from './lists/namn.mjs'
import akademiska from './lists/akademiska.mjs'
import { prefix, suffix, fonem, konjunktioner } from './lists/smådelar.mjs'

const rand = (min, max) => {
  ;[min, max] =
    max === undefined ?
      min === undefined ?
        [0, 2]
      : [0, +min]
    : [+min, +max]

  return Math.floor(Math.random() * (max - min)) + min
}

const sample = arr => arr[rand(arr.length)]

const times = (n, f) =>
  Array(n)
    .fill(0)
    .map((_, i) => f(i))

const capitalise = s => s[0].toUpperCase() + s.slice(1)

let neologismer = akademiska.prefix.flatMap(p =>
  akademiska.suffix.map(s => p + s),
)

let consonants = 'bdfghjklmnprstv'
let vowels = 'aouåeiyäö'
let lörem = 'Lörem ipsum '

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
  // add random syllables for variation
  let syllables = times(100, () => sample(consonants) + sample(vowels))

  // add fonem thrice so as not to sound too pompous.
  let pre = [
    ...prefix,
    ...syllables,
    ...vowels.split(''),
    ...fonem,
    ...fonem,
    ...fonem,
  ]

  let mid = [...fonem, ...syllables]

  useLörem = isName ? false : useLörem

  const getName = () =>
    `${rand() ? sample(namn.k) : sample(namn.m)} ${sample(namn.e)}`

  const getWord = () =>
    Math.random() < nyordFrequency ? sample(nyord)
    : Math.random() < neologismerFrequency ? sample(neologismer)
    : Math.random() < buzzFrequency ? sample(buzz)
    : Math.random() < namnFrequency ? getName()
    : sample(pre) +
      (rand(5) ? '' : sample(mid)) +
      (rand(10) ? '' : sample(mid)) +
      (rand(15) ? '' : sample(mid)) +
      (rand(25) ? '' : sample(mid)) +
      (rand(30) ? '' : sample(mid)) +
      sample(suffix)

  const maybeComma = (n, len) =>
    n > 0 && n < len - 1 && !rand(6) ?
      rand(8) ? ','
      : ':'
    : ''

  const maybeConjunction = (n, len) =>
    n > 0 && n < len - 1 && !rand(3) ? ` ${sample(konjunktioner)}` : ''

  // reduce probability of one word sentences (but not 0)
  const getLen = () => rand(minSentenceLength, maxSentenceLength + 1)
  const getSentenceLength = (len = getLen()) => (len < 2 ? getLen() : len)

  const getSentence = (len = getSentenceLength()) =>
    capitalise(
      times(
        len,
        n => getWord() + maybeComma(n, len) + maybeConjunction(n, len),
      ).join(' '),
    ) + (isHeadline ? '' : '.')

  const maybeWrapParagraph = p =>
    numberOfParagraphs > 1 || alwaysWrapParagraph ?
      paragraphStartWrap + p + paragraphEndWrap
    : p

  const maybeLörem = (isFirstP, s) =>
    useLörem && maxSentenceLength > 3 && isFirstP ?
      lörem + s[0].toLowerCase() + s.slice(1)
    : s

  const maybePunchline = () =>
    maxSentenceLength > 3 ?
      rand(15) ? ''
      : `${isHeadline ? '.' : ''} ${punchline}`
    : ''

  const getParagraph = n =>
    maybeWrapParagraph(
      isName ? getName() : (
        times(sentencesPerParagraph, _ => maybeLörem(!n, getSentence())).join(
          ' ',
        ) + maybePunchline()
      ),
    )

  const maybeWrapInDiv = s => (wrapInDiv ? `<div>${s}</div>` : s)

  return maybeWrapInDiv(times(numberOfParagraphs, getParagraph).join(''))
}

export default löremIpsum
