const
	random = (min, max, float = false) => {
		// max can be omitted
		float = typeof max === 'boolean' ? max : float;
		[min, max] = max === undefined || typeof max === 'boolean'
			// with no parameters, defaults to 0 or 1
			? min === undefined ? [0, 2] : [0, +min]
			: [+min, +max]
		return float ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min)) + min;
	},

	nyord = [
		/*'2000-2013',*/
		"atomslöjd", "biovältare", "blandkostare", "cookie", "dagshandlare", "dogmafilm", "dra ett streck i sanden", "e-bio", "e-demokrati", "e-learning", "karriärcoach", "keltisk tiger", "kompetensväxling", "mervärdesmat", "mess", "messa", "nanoteknik", "den nya ekonomin", "plötslig vuxendöd", "portfoliometoden", "rocka fett", "sexslavhandel", "trafficking", "SMS-meddelande", "transperson", "vinstvarning", "öråd", "apfälla", "asymmetrisk krigföring", "betårta", "bin Ladin-rabatt", "bioterrorism", "fickla", "hembränd", "homoadoption", "Ikeamonarki", "julgranssyndrom", "koldioxidsänka", "kravallant", "kravallturism", "Lasse Berghagen-vin", "Maudeffekten", "mobilblottare", "napptermometer", "pensionärskuvös", "personlig", "pulverbrev", "reklejma", "resultatvarna", "skurkstat", "sprejgodis", "stafettläkare", "talibanisering", "taliban-tv", "terapeutisk kloning", "tok", /*"tok-",*/ "utsimningsbassäng", "viagra", "zebralagen", "24-timmarsmyndighet", "blixad", "bokstav", "distansbatong", "efterföljarskap", "frontbibliotekarie", "förnamn", "galna chips-sjukan", "göra en pudel", "hjulboja", "härgjord", "kemkastrering", "kis", "kostymrasist", "kuratera", "mms", "morbidturism", "nätdeklarant", "orostelefon", "pappografi", "ryggsäcksmodellen", "skimma", "snippa", "snurrmästare", "sprängbälte", "svenna sitt liv", "uckig", "valstuga", "vilopension", "vindvändare", "vinterkräksjuka", "vittneslitteratur", "anime", "attitydig", "babybio", "grönt elcertifikat", "finansfobi", "flitbonus", "närvaropeng", "förarstödjare", "förlåtande", "glokal", "googla", "halvpudel", "inbäddad journalist", "kameratelefon", "kreativ skolgång", "göra en labrador", "ljudöra", "lådvinsalkoholism", "lätthelg", "manga", "modemkapare", "pompekunskap", "promotiv", "sars", "social turism", "spår", "stalker", "svennekoloni", "svennefiera", "taikonaut", "talpenna", "temakonfirmation", "tidsfönster", "trekvartspudel", "tröskelboende", "äga frågan", "backflyt", "backslick", "biomal", "blingbling", "blogg", "bokstavsdrog", "brattig", "curlingförälder", "datalektiker", "fashionista", "flexitarian", "fronta", "förlåtandeintervall", "garanterad traditionell specialitet", "gångfartsgata", "gångpeng", "hbt", "hjärtstartare", "homokompetens", "instegsjobb", "kotlettfrilla", "krana", "kyrktrappsbröllop", "köttberg", "lokator", "luvunge", "mansskatt", "metrosexualitet", "mms:a", "mp3-spelare", "nånannanism", "polyamori", "romkom", "rugbyförälder", "rutavdrag", "röstsamtal", "servicebarn", "smygöppna", "soldusch", "spermatvätt", "studsmattesjuka", "topsa", "videosamtal", "vuxenvälling", "örådisera", "alkobom", "barriärvård", "blinga", "blogga", "bloggare", "blåljusyrke", "digitalbox", "digital-tv", "elgasbil", "estetisk kompetens", "flyttstajla", "gala in", "gardinhängarjobb", "glaskulefolket", "gonnabe", "hedersvåld", "hotelljournalist", "id-sprej", "industrisafari", "ip-tv", "kollektomat", "koscheria", "kreddig", "krisväska", "kungspudel", "miltonpengar", "mobilmobbning", "menskopp", "mobil klubb", "mobilvirus", "musikmobil", "nätfiske", "nätbingo", "nätpoker", "paltkoma", "pixlig", "platt-tv", "plusjobb", "plötslig sportbarnsdöd", "podda", "poddradio", "poddsändning", "pärlifiera", "smartball", "snackis", "snålsurfa", "spim", "stjärtfluss", "stödkorv", "sudoku", "sugrörsseende", "tjock-tv", "transponder", "trängselskatt", "tvillingshoppare", "vara på tårna", "vägg-tv", "andrafiering", "betalblogg", "blattesvenska", "bloggosfär", "bröllopskoordinator", "buda", "bötning", "curla", "cykelbox", "drevkultur", "FAR", "fjärrnyckel", "flexicurity", "flexidaritet", "friva", "fulbryt", "genuspedagog", "genuskänslig", "geocaching", "groma", "hejaklacksjournalistik", "helikoptermamma", "hemmadagis", "IVPA", "Kalle Anka-logistik", "klimatflykting", "latteliberal", "legga", "medborgarjournalistik", "miljonsvenska", "minnespinne", "minnesprick", "mobilstrumpa", "mobil-tv", "nystartsjobb", "Odellplatta", "prio", "receptmotionär", "regnbågsbarn", "regnbågskväll", "rondellhund", "safariforskning", "shoppingspion", "sopspanare", "sovbutik", "stadsspret", "stadsutglesning", "stadsutglesning", "sverka", "timellare", "tjejkött", "triage", "villamatta", "vårdotek", "vårdvisare", "äldrelots", "agflation", "ankarbarn", "barista", "betalvärd", "blåkort", "dampa", "entourage", "Foppatoffel", "förortare", "givomat", "vandrande skolbuss", "gåtåg", "halvtaktsjobb", "interaktiv skrivtavla", "jobbtorg", "klimathot", "klimatlarm", "klimatmat", "klimatneutral", "klimatsmart", "klimatsäkra", "klimatvänlig", "klimatångest", "koldioxidbanta", "kristofobi", "kubtest", "kulturkofta", "livspussel", "munhota", "nixa", "nyfriskjobb", "nyhetsbok", "näthat", "passivhus", "pimpa", "rallylydnad", "reinfeldtare", "skajpa", "smartboard", "transfett", "tävla ut", "wiki", "vintage", "zorra", "ADV", "ansiktsspårning", "bekymringssamtal", "bilmålvakt", "bloggbävning", "blåstråle", "bullerbysyndromet", "burkini", "celebritariat", "finanssmälta", "förväntningssamhälle", "gatustickning", "geotaggning", "kalsongbadare", "klimatism", "kosläpp", "kringmyndighet", "kroppsskanning", "kuddbok", "laddhybrid", "ljudaffisch", "mikroblogg", "minidator", "mobillångfilm", "plastis", "plutoid", "skynka", "svenskad", "säg", "ödleplåster", "alfanummer", "bilsurfa", "chefsnappning", "chippa", "fiskpedikyr", "frimester", "fröbomba", "fuldelning", "följare", "grindstad", "gågging", "hemester", "könskonträr", "laddstolpe", "mobilroman", "norsk karaoke", "oresebyrå", "prokotta", "sitskate", "slidkrans spikmatta", "sporta", "sprita", "stjärnfamilj", "stuprörspolitik", "svemester", "svininfluensa", "twittra", "yrkessåpa", "app", "askbränd", "askstoppad", "asktåg", "askänka", "bjästa", "bloppa", "bloppis", "bästsäljerism", "cykelbarometer", "danseoke", "facebooka", "Facebookfest", "filvärd", "grafen", "guldomat", "guldsot", "inaskad", "jobbstopparpolitik", "kaffeflicka", "kalkstenssångare", "kalsongbombare", "koldioxidneutralt vin", "kringtidskort", "kylkrage", "kärlekslås", "köttklister", "morotsaktivism", "morotsmobb", "näringslots", "ordningskonsult", "plånboksbröllop", "processturism", "rit-avdrag", "räddningskort", "sanningsbarometer", "serieskytt", "solflygteknik", "solhybrid", "spotifiera", "språkekonomi", "stupstockspolitik", "tobleronepolitik", "valpromenera", "wikiläcka", "vulkanresa", "vuvuzela", "väggord", "ångerrösta", "ac-förkylning", "airbaghjälm", "appa", "arabisk vår", "attitydinkontinens", "Bamseteorem", "brorsantrick", "brännskräp", "bröllopsklänning", "börsrobot", "dumpling", "döda vinkeln-varnare", "fastlans", "fixie", "flipperförälder", "foliehatt", "framåtlutad", "fulparkerare", "förlåtturné", "förväntis", "gps-väst", "jasminmöte", "jasminrevolution", "juholtare", "kapselbryggare", "kawaii", "knarkometer", "knytkonferens", "koka böcker", "loba", "lunchdisco", "lyssna in", "matkasse", "missmatchning", "mobildagis", "molekylärgastronomi", "möbelhund", "möpare", "novellix", "nysare", "ofast jobb", "otrohetsdejting", "padda", "plankning", "post-it-krig", "prehab", "restdejting", "retronym", "robothandel", "seismisk", "skräpbot", "skämsfilter", "slöjböter", "sms-livräddare", "surdegshotell", "säpojogg", "tasigförsamhet", "terja", "tjejsamla", "tonårsskrämma", "trollfilter", "trädmord", "uggling", "vattkoppsgodis", "vobba", "åsiktstaliban", "brony", "conversesjukan", "drinkorexi", "emoji", "eurobävning", "fysisk cd", "grexit", "hackathon", "henifiera", "hubot", "klämspärr", "kopimism", "kramtjuv", "köttrymden", "livslogga", "läshund", "matbil", "memil", "mjuk betalvägg", "mossgraffiti", "märk-dna", "nomofobi", "ogooglebar", "mobilvantar", "petabyte", "queerpolska", "robotdräkt", "robotfälla", "ryggplankning", "räckviddsångest", "spelifiera", "spårtjuv", "ståhjuling", "Tintingate", "tårtgate", "utvigning", "visukal", "zlatanera", "överklassafari", "5:2-diet", "betalskugga", "bjudkaffe", "brexit", "budgetstup", "carpa", "dygnis", "e-cigarett", "embrejsa", "enveckasförsvar", "e-sport", "funktionell dumhet", "fäbodifiering", "global hektar", "gubbploga", "hikikomori", "hypa", "hämndporr", "hästlasagne", "kjolprotest", "klicktivism", "köttskatt", "linjär tv", "läxrut", "löpsedelsteater", "mobilmissbruk", "nagelprotest", "nätvandra", "otrohetskontroll", "rutkod", "satsig", "selfie", "sextremism", "smartplåster", "snippgympa", "spökgarn", "torggängare", "tvåhandsbeslut", "twerka", "utsmarta",
		/*'2014',*/
		'attefallshus', 'blåbrun', 'cisperson', 'digital valuta', 'en', 'fotobomba', 'frisparkssprej', 'genusbudgetering', 'gurlesk', 'gäri', 'icke-binär', 'kippavandring', 'klickfiske', 'krislåda', 'kärrtorpa', 'köttnorm', 'matnationalism', 'mellanförskap', 'mobilzombie', 'nerväxt', 'nettokrati', 'normcore', 'parkera bussen', 'plastbanta', 'pultvätta', 'rasifierad', 'ryggprotest', 'rödgrönrosa', 'sekelsiffror', 'selfiepinne', 'sms-anställning', 'spoilervarning', 'trafikmaktordning', 'tvodd', 'tvåkönsnorm', 'usie', 'virtuell våldtäkt', 'yoloa', 'åsiktskorridor',
		/*'2015',*/
		'avinvestera', 'cosplay', 'delningsekonomi', 'douche', 'dumpstra', 'EU-migrant', 'faktaresistens', 'funkis', 'geoblockering', 'groupie', 'haffa', 'halmdocka', 'klickokrati', 'klittra', 'kulturell appropriering', 'mansplaining', 'naturvin', 'nyhetsundvikare', 'obror', 'plattfilm', 'rattsurfa', 'robotjournalistik', 'självradikalisering', 'skuldkvotstak', 'ståpaddling', 'svajpa', 'svischa', 'talepunkt', 'terrorresa', 'transitflykting', 'triggervarning', 'trollfabrik', 'vejpa', 'vithetsnorm', 'värdgraviditet', 'youtuber', 'ögonkramp',
		/*'2016',*/
		'annonsblockerare', 'blippbetalning', 'kontaktlös kortbetalning', 'blåljuspersonal', 'cirkulär ekonomi', 'det mörka nätet', 'Dylanman', 'egenanställningsföretag', 'ekodukt', 'enkortsdator', 'filterbubbla', 'fomo', 'fredsring', 'frågestrejka', 'förpackningsfri', 'förstärkt verklighet', 'ghosta', 'gigekonomi', 'grindsamhälle', 'influerare', 'kompetenstrappa', 'korsspråkande', 'kroppsaktivism', 'lånegarderob', 'läslov', 'matsvinnsbutik', 'medborgarforskning', 'mukbang', 'paddeltennis', 'pappafeminist', 'parasport', 'poke', 'pokenad', 'preppare', 'proteinskifte', 'samlarsyndrom', 'skamma', 'ställa frågor', 'trumpifiering', 'uberisering', 'utpressningsprogram', 'vuxenmålarbok', 'växtmjölk', 'äggkonto',
		/*'2017',*/
		'alternativa fakta', 'blockkedja', 'blorange', 'bonus malus', 'cringe', 'dabba', 'direktare', 'doxa', 'döstäda', 'expresskidnappning', 'fejkade nyheter', 'fidget spinner', 'framtidsfullmakt', 'funktionsrätt', 'grit', 'halalturism', 'hyberavdrag', 'inrymning', 'killgissa', 'klickfarm', 'knäprotest', 'kombucha', 'kompetensutvisning', '#metoo', 'omakase', 'pansexuell', 'plogga', 'poddtaxi', 'postfaktisk', 'rekoring', 'renovräkning', 'sekundärkränkt', 'serieotrohet', 'skogsbad', 'snubbelsten', 'spetspatient', 'veganisera', 'viralgranska',
		/*'2018',*/
		'aquafaba', 'beslutsblindhet', 'bokashi', 'cyberhygien', 'digifysisk', 'dm:a', 'e-krona', 'explainer', 'flossa', 'flygskam', 'förpappring', 'gal–tan–skala', 'gensax', 'incel', 'intryckssanera', 'lårskav', 'mandatpingis', 'menscertifiera', 'mikrootrohet', 'nollavfall', 'någonstansare ', 'varsomhelstare', 'nätläkare', 'pyramidmatta', 'självoptimering', 'språkplikt', 'spårpixel', 'stöddjur', 'swishjournalist', 'techlash', 'VAR', 'välfärdsbrott', 'whataboutism',
		/*'2019',*/
		'animoji', 'antivaxxare', 'artdöden', 'ASMR', 'aspludd', 'benim', 'beteendedesign', 'cybersoldat', 'deepfake', 'deplattformering', 'digital tvilling', 'dra åt helvete-kapital', 'eldost', 'fimpomat', 'Gretaeffekten', 'grönt körfält', 'hjärtslagslag', 'hundvissla', 'hybridkrig', 'ikigai', 'immersiv', 'klimatdiktatur', 'klimatnödläge', 'klimatstrejk', 'källtillit', 'lågaffektivt bemötande', 'menskonst', 'nattborgmästare', 'popcornhjärna', 'sharenting', 'smygflyga', 'syssna', 'tågskryta', 'växtbaserat kött', 'övervakningsekonomi',
		/* 2020 */
		'becknarväska', 'bolundare', 'boomer', 'cancelkultur', 'cirkulent', 'cli-fi', 'coronaanpassa', 'coronahälsning', 'covid-19', 'förnedringsrån', 'hobbyepidemiolog', 'hungerpandemi', 'hälsolitteracitet', 'immunitetspass', 'infodemi', 'intimitetskoordinator', 'kamikazetips', 'kanskeman', 'kemsex', 'klustersmitta', 'krympflation', 'lesserwisser', 'lockdown', 'mjuta', 'novent', 'platta till kurvan', 'R-tal', 'simp', 'självkarantän', 'social distansering', 'statyprotest', 'superspridare', 'turistkorridor', 'tvåmetersregeln', 'underturism', 'vårdskuld', 'växtblindhet', 'zombiebrand', 'Zoombombning',
	],

	buzz = [
		"Adwords", "app", "applikation", "avvisningsfrekvens", "branded content", "content manager, content editor", "content marketing", "content provider", "cookie", "feed", "flöde", "hashtag", "hootSuite", "inbound marketing", "konvertering", "likes", "gillamarkeringar", "linkedIn", "metataggar", "nyckelord", "outbound marketing", "Periscope", "Pinterest", "podda", "regramma", "retweeta", "SEM", "SEO", "SERP", "smarketing", "SMM", "Snapchat", "social selling", "storytelling", "unika besökare", "UX", "micro-moments", "omni-channel", "blockchain", "geofencing", "brand safety", "user-generated content", "smart content", "attribution", "SISP", "inkubator", "science park", "accelerator", "coworking space", "co-creation", "cirkulär ekonomi", "cirkulära affärsmodeller", "forskningsinstitut", "hackathon", "facilitera", "innovation", "innovatör", "innovationsprocess", "öppen innovation", "inbound innovation", "innovationsmiljö", "innovationsstödssystem", "innovationssystem", "innovationsekosystem", "innovationshöjd", "investering", "investeringsfrämjande", "innovationskontor", "kluster", "scale-up", "startup", "SME", "SMF", "soft landing", "talangattraktion", "testbädd", "tillväxtföretag", "triple helix", "uppfinnare", "multi helix", "artificiell intelligens", "AI", "GPT-3", "DALL·E", "athleisure", "augmented reality", "autonoma fordon", "B2B", "B2C", "metadata", "big data", "blockchain", "BOPIS", "bricks and clicks", "chatbots", "cirkulär handel", "click & collect", "conscious consumerism", "conversational commerce", "CX", "computer vison", "digitala assistenter", "disruptiv handel", "drop shipping", "endless aisles", "facial recognition", "friktionsfri handel", "fulfillment", "fygital handel", "gamification", "green retailing", "internet of things", "kassalösa butiker", "kuraterat", "last mile", "marknadsplatser", "maskininlärning", "mobile checkout", "micro fulfillment center", "new retail", "omniexperience", "personalisering", "prime now", "pure players", "retailtainment", "RFID", "robot retail", "ROPO", "same day delivery", "see now buy now", "sensorteknik", "skills", "transparens", "visual search", "voice commerce", "relaterade artiklar", "kreativ", "ansvarsfull", "analytisk", "positiv", "motiverad", "bred erfarenhet", "omfattande erfarenhet", "organisatorisk", "effektiv", "track record", "vertikal", "disruptive", "white label", "lean startup", "pivot", "USP", "growth hacking", "bootstrapping", "MVP", "exekvera", "unicorn",
	],

	löremIpsum = (
		{
			numberOfParagraphs = 1,
			sentencesPerParagraph = 10,
			maxSentenceLength = 10,
			minSentenceLength = 1,
			isHeadline = false,
			isName = false,
			nyordFrequency = .1,
			neologismerFrequency = .05,
			namnFrequency = 0,
			buzzFrequency = 0,
			useLörem = true,
			punchline = 'Du kan vara drabbad.',
			wrapInDiv = false,
			paragraphStartWrap = '<p>',
			paragraphEndWrap = '</p>',
			alwaysWrapParagraph = false
		} = {}
	) => {
		let
			k = 'bdfghjklmnprstv',
			v = 'aouåeiyäö',
			pre = [
				'a', 'a', 'a', 'ana', 'ante', 'anti', 'astro', 'auto', 'be', 'be', 'be', 'be', 'bi', 'bio', 'de', 'deka', 'deci', 'di', 'di', 'di', 'dia', 'ego', 'epi', 'euro', 'e', 'exo', 'eu', 'geo', 'giga', 'hemi', 'hetero', 'hexa', 'homo', 'hypo', 'i', 'infra', 'intra', 'ko', 'kontra', 'kro', 'kvasi', 'makro', 'ma', 'mega', 'mikro', 'mono', 'multi', 'o', 'o', 'o', 'o', 'o', 'o', 'para', 'pa', 'pe', 'poly', 'po', 'pre', 'pre', 'pre', 'pro', 'pseudo', 're', 'rea', 're', 'semi', 'steno', 'su', 'supra', 'sy', 'tele', 'tera', 'tetra', 'tra', 'tri', 'ultra',
			],
			mid = [
				'do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'ne', 'de', 'se', 'kro', 'pla', 'pre', 'tre', 'di', 'va', 'sa', 'po', 'ka', 'spe', 'vi', 'ni', 'be', 'te', 'ny',
			],
			suf = [
				'sa', 'na', 'ra', 'da', 'sat', 'nat', 'rat', 'dat', 'sade', 'nade', 'rade', 'dade', 't', 'ss', 's', 'ck', 'pp', 'n', 'n', 'n', 'n', 'n', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'd', 'ssa', 'tt', 'st', 'st', 'nt', 'ren', 'de', 'de', 'de', 'de', 'se', 'nera', 'ning', 'ning', 'sade', 'ssade', 'rade', 'rad', 'ktig', 'rtad', 'sm', 'ledes', 'skap', 'skapet', 'l', 'l', 'l', 'ns', 'ktig', 'ktigt', 'ktiga', 'll', 'ns', 'gon', 'gen', 'het', 'heten', 'bel', 'bel', 'belt', 'd', 'k', 'ng', 'ngen', 's', 's', 's', 'sk', 'sk', 'sk', 'ska', 'ska', 'skade', 'sm', 'v', 'v', 'v', 'ligen', 'logi', 'gisk', 'ment', 'sam', 'samma', 'vis', 'vis', 'vis', 'vis', 'gt', 'gt', 'gt', 'lig', 'lig', 'lig', 'liga', 'liga', 'ligt', 'ligt', 'ra', 'rar', 'rade', 'ras', 'rat', 'na', 'nar', 'nade', 'nas', 'nat', 'nde', 'nde', 'nde', 're', 're', 'ren', 'ling', 'lingar', 'ling', 'ng', 'ngar', 'ngen',
			],
			konj = [
				'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'och', 'och', 'och', 'och', 'och', 'och', 'och', 'och', 'och', 'och', 'att', 'att', 'att', 'att', 'det', 'en', 'på', 'är', 'som', 'för', 'med', 'har', 'av', 'till', 'den', 'inte', 'inte', 'inte', 'inte', 'de', 'om', 'ett', 'jag', 'men',

				'samt', 'såväl som', 'respektive', 'plus', 'inklusive', 'eller', 'men', 'fast', 'utan', 'utom', 'förutom', 'för', 'så', 'det vill säga', 'alltså', 'att', 'som', 'om', 'än', 'om', 'ifall', 'huruvida', 'än', 'liksom', 'såsom', 'eftersom', 'därför att', 'för att', 'då', 'emedan', 'fast', 'fastän', 'oaktat', 'om än', 'även om', 'för att', 'om', 'ifall', 'då', 'när', 'medan', 'sedan', 'innan', 'till', 'tills'
			],
			akademiska = {
				prefix: ['ab', 'agnosti', 'andro', 'ana', 'ambi', 'anti', 'antropo', 'apo', 'astro', 'bi', 'bio', 'cyn', 'de', 'des', 'demi', 'demo', 'dia', 'dys', 'eko', 'elektro', 'em', 'en', 'endo', 'epi', 'etno', 'filo', 'fono', 'foto', 'hetero', 'hyper', 'kom', 'kon', 'kontra', 'kvasi', 'logo', 'medel', 'mega', 'meta', 'metro', 'mikro', 'miso', 'mono', 'myto', 'neo', 'onto', 'opera', 'pan', 'para', 'per', 'pneuma', 'poli', 'poly', 'post', 'pre', 'prima', 'pro', 'pseudo', 'psyko', 'radio', 're', 'rea', 'semi', 'stereo', 'supra', 'syn', 'te', 'tele', 'tempo', 'tera', 'terra', 'teo', 'termo', 'trans', 'tri'],
				suffix: ['aktiv', 'bel', 'centrism', 'cism', 'ception', 'diktisk', 'faktisk', 'fas', 'fiering', 'fili', 'foni', 'form', 'gam', 'gen', 'graf', 'gram', 'gyn', 'ism', 'itet', 'kemi', 'krati', 'log', 'logi', 'mani', 'matisk', 'meter', 'modern', 'netik', 'nomi', 'osmos', 'patologi', 'plastisk', 'pod', 'pol', 'siv', 'sion', 'skop', 'social', 'sofi', 'stat', 'stik', 'tes', 'tet', 'tik', 'tion', 'tism', 'tiv', 'tologi', 'topi', 'tropi', 'tos', 'total', 'tris', 'typ', 'valens', 'vision']
			},
			namn = {
				k: ["Maria", "Anna", "Margareta", "Elisabeth", "Eva", "Kristina", "Birgitta", "Karin", "Marie", "Elisabet", "Ingrid", "Christina", "Sofia", "Linnéa", "Kerstin", "Lena", "Helena", "Marianne", "Emma", "Linnea", "Johanna", "Inger", "Sara", "Cecilia", "Elin", "Anita", "Louise", "Ida", "Linda", "Gunilla", "Ulla", "Susanne", "Hanna", "Viola", "Malin", "Katarina", "Jenny", "Carina", "Elsa", "Monica", "Astrid", "Irene", "Ulrika", "Alice", "Julia", "Annika", "Viktoria", "Barbro", "Åsa", "Amanda", "Matilda", "Therese", "Camilla", "Ann", "Siv", "Yvonne", "Lovisa", "Agneta", "Britt", "Caroline", "Lisa", "Ingegerd", "Charlotte", "Sandra", "Frida", "Sofie", "Anette", "Gun", "Emelie", "Margaretha", "Ebba", "Emilia", "Ellen", "Alexandra", "Berit", "Victoria", "Erika", "Charlotta", "Jessica", "Anneli", "Maja", "Inga", "Olivia", "Agnes", "Märta", "Pia", "Madeleine", "Ingeborg", "Mona", "Felicia", "Ella", "Gunnel", "Josefin", "Sonja", "Karolina", "Birgit", "Lina", "Magdalena", "Signe", "Helen"],

				m: ["Erik", "Lars", "Karl", "Anders", "Johan", "Per", "Nils", "Carl", "Mikael", "Jan", "Hans", "Peter", "Olof", "Lennart", "Gunnar", "Sven", "Fredrik", "Daniel", "Bengt", "Bo", "Alexander", "Gustav", "Göran", "Åke", "Magnus", "Martin", "Andreas", "Stefan", "John", "Mats", "Leif", "Ulf", "Thomas", "Björn", "Henrik", "Jonas", "Axel", "Christer", "Bertil", "Robert", "Arne", "David", "Emil", "Ingemar", "Håkan", "Kjell", "Stig", "Mattias", "Rolf", "William", "Oskar", "Tommy", "Roland", "Michael", "Patrik", "Simon", "Joakim", "Christian", "Oscar", "Marcus", "Sebastian", "Anton", "Roger", "Gustaf", "Ingvar", "Eric", "Tomas", "Olov", "Viktor", "Johannes", "Tobias", "Hugo", "Niklas", "Elias", "Kent", "Adam", "Ove", "Emanuel", "Robin", "Jörgen", "Filip", "Ali", "Rune", "Kenneth", "Gösta", "Wilhelm", "Linus", "Arvid", "Albin", "Jonathan", "Dan", "Sten", "Kurt", "Oliver", "Olle", "Rickard", "Alf", "Claes", "Vilhelm", "Henry"],

				e: ["Andersson", "Johansson", "Karlsson", "Nilsson", "Eriksson", "Larsson", "Olsson", "Persson", "Svensson", "Gustafsson", "Pettersson", "Jonsson", "Jansson", "Hansson", "Bengtsson", "Carlsson", "Jönsson", "Lindberg", "Petersson", "Magnusson", "Lindström", "Gustavsson", "Olofsson", "Lindgren", "Axelsson", "Bergström", "Lundberg", "Lundgren", "Berg", "Jakobsson", "Berglund", "Sandberg", "Fredriksson", "Mattsson", "Sjöberg", "Forsberg", "Henriksson", "Lindqvist", "Lind", "Engström", "Eklund", "Lundin", "Danielsson", "Ali", "Håkansson", "Holm", "Gunnarsson", "Bergman", "Samuelsson", "Fransson", "Nyström", "Lundqvist", "Björk", "Holmberg", "Wallin", "Johnsson", "Arvidsson", "Söderberg", "Nyberg", "Isaksson", "Nordström", "Mårtensson", "Lundström", "Björklund", "Eliasson", "Berggren", "Ahmed", "Sandström", "Nordin", "Ström", "Åberg", "Ekström", "Hermansson", "Holmgren", "Hedlund", "Sundberg", "Sjögren", "Dahlberg", "Mohamed", "Martinsson", "Öberg", "Hellström", "Strömberg", "Månsson", "Blom", "Ek", "Abrahamsson", "Falk", "Blomqvist", "Norberg", "Åkesson", "Lindholm", "Sundström", "Löfgren", "Åström", "Jonasson", "Dahl", "Söderström", "Jensen", "Andreasson"]
			},

			neologismer = (o => o.prefix.flatMap(p => o.suffix.map(s => p + s)))(akademiska),

			getName = () => `${random() ? namn.k[random(100)] : namn.m[random(100)]} ${namn.e[random(100)]}`,

			getWord = () => {
				return Math.random() < nyordFrequency ?
					nyord[random(nyord.length)] :
					Math.random() < neologismerFrequency ?
						neologismer[random(neologismer.length)] :
						Math.random() < buzzFrequency ?
							buzz[random(buzz.length)] :
							Math.random() < namnFrequency ?
								getName() :
								pre[random(pre.length)] +
								(random(5) ? '' : mid[random(mid.length)]) +
								(random(10) ? '' : mid[random(mid.length)]) +
								(random(15) ? '' : mid[random(mid.length)]) +
								suf[random(suf.length)];
			},

			getSentence = () => {
				let max = random(minSentenceLength, maxSentenceLength + 1),
					s = '';
				// reduce probability of one word sentences (but not 0)
				max = max < 2 ? random(minSentenceLength, maxSentenceLength + 1) : max;

				for (let n of Array(max)) {
					s += getWord();

					// add commas or colons
					s += n > 0 && n < max - 1 && !random(6) ? (random(8) ? ', ' : ': ') : ' ';

					// add conjunctions
					if (n > 0 && n < max - 1) s += random(3) ? '' : konj[random(konj.length)] + ' ';
				}

				// Make it a sentence
				return s.slice(0, 1).toUpperCase() + s.slice(1, -1) + (isHeadline ? '' : '. ');
			},

			getParagraph = () => {
				let p = '';

				if (isName) p += getName();
				else {
					for (let i of Array(sentencesPerParagraph))
						p += getSentence();

					// add punchline
					if (maxSentenceLength > 3)
						p += random(15) ? '' : (isHeadline ? '. ' + punchline + '' : punchline + ' ');
				}

				// wrap if more than one paragraphs
				return wrapWithP ? paragraphStartWrap + p + paragraphEndWrap : p;
			},

			wrapWithP = numberOfParagraphs > 1 || alwaysWrapParagraph,
			lörem = 'Lörem ipsum ',
			// add random syllables for variation
			syllables = Array(50).fill(0).map(() => k[random(k.length)] + v[random(v.length)]),
			s = '';

		if (isName) useLörem = false;

		// add mid thrice so as not to sound too pompous.
		pre = [...pre, ...syllables, ...v.split(''), ...mid, ...mid, ...mid];
		mid = [...mid, ...syllables];

		// get pragraphs
		for (let i of Array(numberOfParagraphs))
			s += getParagraph();

		// add lörem
		if (useLörem && maxSentenceLength > 3)
			s = wrapWithP ?
				s.slice(0, paragraphStartWrap.length) + lörem +
				s.slice(paragraphStartWrap.length, paragraphStartWrap.length + 1).toLowerCase() +
				s.slice(paragraphStartWrap.length + 1)
				:
				lörem + s.slice(0, 1).toLowerCase() + s.slice(1);

		// optional wrap
		return wrapInDiv ? '<div>' + s + '</div>' : s;
	}

export default löremIpsum;