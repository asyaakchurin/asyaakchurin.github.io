// TEACHER NOTE
// you would use this to look up the mood based on words the user entered
// by looping through the moods and seeing if any of the words are included
var moodData = {
	"happy": ['happy', 'amazing', 'great', 'good', 'cheerful', 'glad', 'carefree', 'perfect', 'bliss', 'joy', 'smile', 'smiling', 'laugh', 'fucking amazing'],
	"sad": ['sad', 'upset', 'alone', 'cry', 'gloomy', 'melancholy', 'miserable', 'i got fired', 'lost my job', 'homesick', 'depressed', 'crying', 'sad af'],
	"love": ['love', 'heart', 'perfect', 'cloud nine', 'romantic', 'adore', 'relationship', 'boyfriend', 'girlfriend', 'romance', 'kiss', 'lust', 'passion', 'worship', 'beautiful'],
	"angry": ['angry', 'mad', 'pissed', 'heated', 'furious', 'irritated', 'betrayed', 'livid', 'kill', 'fuming', 'annoyed', 'repulsed', 'disgusted', 'fed up', 'sick of'],
	"jealous": ['jealous', 'envious', 'envy', 'replaced', 'resent', 'possesive', 'suspicious', 'cheated', 'selfish'],
	"empty": ['reflective', 'nothing', 'empty', 'lost', 'confused', 'bleak', 'apathetic', 'lifeless'],
	"scared": ['nervous', 'scared', 'freaking out', 'terror', 'terrified', 'afraid'],
	"bored": ['nothing to do', 'blah', 'idk', 'i dont know', 'dull', 'tired', 'lethargic', 'drained', 'indifferent'],
	"excited": ['excited', 'energetic', 'want to dance', 'playful', 'cant wait', 'alive', 'hyper', 'bouncing', 'ecstasy', 'jumpy', 'eager', 'stoked', 'so much fun'],
	"sexy": ['sex', 'horny', 'wa wa we wa', 'aroused', 'oh baby', 'in the mood', 'play'],
	"lazy": ['lazy', 'urgh', 'i dont want to go to work'],
	"miss": ['i miss you', 'oleg come back to me'],
	"mirage": ['lets go to mirage'],
	"dancing": ['lets go dancing']
}


// TEACHER NOTE
// once you find the moods with the above data, you can loop through the songs and find
// the ones with matching moods (songs might have more than one mood in the future!, so we can use an array)
var songData = {
	"436056279": {
		"moods": ["happy"],
		"song_url": "https://soundcloud.com/u2/love-is-bigger-than-anything-2",
		"songID": "436056279"
	},

	// end song 1
	"323391979": {
		"moods": ["sad"],
		"song_url": "https://soundcloud.com/christianloeffler/zimmer-lost-your-mind-christian-loffler-remix?in=ayfmd/sets/long-drive",
		"songID": "323391979"
	},
	// end song
	"289301025": {
		"moods": ["angry"],
		"song_url": "https://soundcloud.com/janblomqvist/jan-blomqvist-back-in-the-taxi",
		"songID": "289301025"
	},
	// end song
	"1229071": {
		"moods": ["love"],
		"song_url": "https://soundcloud.com/victrs/donna-summer-i-feel-love-danny-howells-remix",
		"songID": "1229071"
	},
	// end song
	"206342673": {
		"moods": ["jealous"],
		"song_url": "https://soundcloud.com/joris-voorn/so-long-feat-kid-a-christian",
		"songID": "206342673"
	},
	// end song
	"333856659": {
		"moods": ["empty"],
		"song_url": "https://soundcloud.com/vledson/hans-zimmer-time-tale-of-us-edit",
		"songID": "333856659"
	},
	// end song
	"89300254": {
		"moods": ["scared"],
		"song_url": "https://soundcloud.com/andhim/hvob-always-like-this-andhim",
		"songID": "89300254"
	},
	// end song
	"461981028": {
		"moods": ["bored"],
		"song_url": "https://soundcloud.com/jameslaudamusic/searching-for-xinobi-james-lauda-edit-soundcloud-edition?in=ayfmd/sets/burning-man-warmup",
		"songID": "461981028"
	},
	// end song
	"211912018": {
		"moods": ["excited"],
		"song_url": "https://soundcloud.com/platform/bjarki-i-wanna-go-bang-boiler",
		"songID": "211912018"
	},
	// end song
	"68613791": {
		"moods": ["sexy"],
		"song_url": "https://soundcloud.com/kaytranada/modjo-lady-kaytranada-remix?in=ayfmd/sets/long-drive",
		"songID": "68613791"
	},
	// end song	
	"329624317": {
		"moods": ["miss"],
		"song_url": "https://soundcloud.com/crosstownrebels/serge-devant-thinking-of-you-serge-devants-floor-cut-2",
		"songID": "329624317"
	},
	// end song	
	"535724397": {
		"moods": ["lazy"],
		"song_url": "https://soundcloud.com/sojlnushko/hammali-navai-nachalnik-ne-khochu-rabotat",
		"songID": "535724397"
	},
	// end song
	"222332827": {
		"moods": ["mirage"],
		"song_url": "https://soundcloud.com/lane8music/maribou-state-wallflower-lane-8-remix",
		"songID": "222332827"
	},
	// end song	
	"226506906": {
		"moods": ["dancing"],
		"song_url": "https://soundcloud.com/bassbits/lets-go-dancing",
		"songID": "226506906"
	}
	// end song											
}



// var moodData = {
// 	"436056279": {
// 		"mood": "happy",
// 		"words":{
// 			"happy": true
// 			"amazing": true
// 			"great": true
// 			"good": true
// 			"cheerful": true
// 			"glad": true
// 			"carefree": true
// 			"perfect": true
// 			"bliss": true
// 			"joy": true
// 			"smile": true
// 			"smiling": true
// 			"laugh": true
// 		},
// 		"song_url": "https://soundcloud.com/u2/love-is-bigger-than-anything-2"
// 		"songID": "436056279"
// 	},
//
// 	// end song 1
// 	"323391979": {
// 		"mood": "happy",
// 		"words":{
// 			"sad": true
// 			"upset": true
// 			"alone": true
// 			"cry": true
// 			"gloomy": true
// 			"melancholy": true
// 			"miserable": true
// 			"got fired": true
// 			"lost my job": true
// 			"homesick": true
// 			"i miss": true
// 			"depressed": true
// 			"crying": true
// 		},
// 		"song_url": "https://soundcloud.com/christianloeffler/zimmer-lost-your-mind-christian-loffler-remix?in=ayfmd/sets/long-drive"
// 		"songID": "323391979"
// 	}
// 	// add comma before adding more songs and moods?
//
// }
