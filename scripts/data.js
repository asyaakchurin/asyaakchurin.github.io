// TEACHER NOTE
// you would use this to look up the mood based on words the user entered
// by looping through the moods and seeing if any of the words are included
var moodData = {
	"happy": ['happy', 'amazing', 'great', 'good', 'cheerful', 'glad', 'carefree', 'perfect', 'bliss', 'joy', 'smile', 'smiling', 'laugh'],
	"sad": ['sad', 'upset', 'alone', 'cry', 'gloomy', 'melancholy', 'miserable', 'got fired', 'lost my job', 'homesick', 'i miss', 'depressed', 'crying']
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
	}
	// add comma before adding more songs and moods?

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
