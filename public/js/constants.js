var QUIZ_LENGTH = 25;

var DIFFICULTY_RANKINGS = {
	"easy": 0,
	"medium": 1,
	"hard": 2,
	"expert": 3
};

var QUESTIONS = [
	{
		"question_id": 0,
		"question_text": "When was Nick Redmond born?",
		"difficulty": "medium",
		"possible_answers": [
			"January 20, 1994 @ 6:55 P.M. Arizona Time",
			"February 20, 1994 @ 6:55 P.M. Arizona Time",
			"February 20, 1994 @ 1:32 A.M. Arizona Time",
			"Febuary 22, 1994 @ 1:32 A.M. Arizona Time"
		]
	},
	{
		"question_id": 1,
		"question_text": "What is the maiden name of Nick Redmond's biological mother?",
		"difficulty": "medium",
		"possible_answers": [
			"Linda Lou Diggins",
			"Linda Lou Diggs",
			"Linda Leanne Diggins",
			"Linda Leanne Diggs"
		]
	},
	{
		"question_id": 2,
		"question_text": "How many U.S. states has Nick Redmond visited?",
		"difficulty": "hard",
		"possible_answers": [
			"5",
			"25",
			"39",
			"All 50"
		]
	},
	{
		"question_id": 3,
		"question_text": "How many full days did Nick Redmond spend at Colorado River Regional Youth Services?",
		"difficulty": "expert",
		"possible_answers": [
			"27",
			"45",
			"62",
			"90"
		]
	},
	{
		"question_id": 4,
		"question_text": "When did Nick Redmond graduate from college?",
		"difficulty": "hard",
		"possible_answers": [
			"April 30, 2016",
			"March 22, 2016",
			"March 25, 2015",
			"March 18, 2015"
		]
	},
	{
		"question_id": 5,
		"question_text": "What is Nick Redmond's favorite food?",
		"difficulty": "medium",
		"possible_answers": [
			"Burgers",
			"Pizza",
			"Spaghetti",
			"All of the above"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 6,
		"question_text": "What is Nick Redmond's dream job?",
		"difficulty": "medium",
		"possible_answers": [
			"Software Architect",
			"Politician",
			"Public Service Employee",
			"Lawyer"
		],
		"correct_answer_index": 2
	},
	{
		"question_id": 7,
		"question_text": "In which Arizona cities has Nick Redmond lived?",
		"difficulty": "hard",
		"possible_answers": [
			"Phoenix, Prescott, Kingman",
			"Phoenix, Tempe, Chandler, Prescott, Kingman",
			"Phoenix, Tempe, Chandler, Prescott, Kingman, Lake Havasu City",
			"Phoenix, Tempe, Chandler, Prescott, Kingman, Bullhead City"
		],
		"correct_answer_index": 2
	},
	{
		"question_id": 8,
		"question_text": "In which Utah cities has Nick Redmond lived?",
		"difficulty": "hard",
		"possible_answers": [
			"South Jordan, Salt Lake City, West Point",
			"South Jordan, Salt Lake City, Orem, West Valley City, West Point",
			"South Jordan, Salt Lake City, West Valley City, West Point",
			"South Jordan, Salt Lake City, Provo, West Valley City, West Point"
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 9,
		"question_text": "In which California cities has Nick Redmond lived?",
		"difficulty": "expert",
		"possible_answers": [
			"Escondido, Wildomar",
			"Wildomar",
			"Del Mar, Los Angeles",
			"Escondido, Los Angeles"
		],
		"correct_answer_index": 0
	},
	{
		"question_id": 10,
		"question_text": "What is [truly] Nick Redmond's favorite song?",
		"difficulty": "hard",
		"possible_answers": [
			"\"Let's Go\" by Trick Daddy because Nick just can't help but \"get real wit' it\", sometimes",
			"\"Footloose\" by Kenny Loggins because the song inspired Nick's passion for dancing",
			"\"Should've Been a Cowboy\" by Toby Keith because Nick can empathize with the longing for rodeos",
			"\"Dancing Queen\" by Abba because Nick's mom caught him dancing to it while playing outfield"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 11,
		"question_text": "Which sports has Nick Redmond played, as part of a team?",
		"difficulty": "medium",
		"possible_answers": [
			"Basketball, Football, Wrestling",
			"Baseball, Wrestling",
			"Hockey, Football, Wrestling",
			"Baseball, Football, Wrestling"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 12,
		"question_text": "What are Nick Redmond's favorite pastimes?",
		"difficulty": "easy",
		"possible_answers": [
			"Snowboarding, Skydiving",
			"Snowboarding, Playing Guitar, Helping Others",
			"Snowboarding, Playing Guitar, Table Tennis, Eating, Helping Others",
			"Drinking Beer, Barbeques, Making Fun of People, Watching Republican News"
		],
		"correct_answer_index": 2
	},
	{
		"question_id": 13,
		"question_text": "Who was Nick Redmond's first-grade teacher?",
		"difficulty": "medium",
		"possible_answers": [
			"Mrs. Jonovich",
			"Ms. Newman",
			"Mr. DeWees",
			"Mr. Tyree"
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 14,
		"question_text": "Which one of these awards did Nick Redmond actually win?",
		"difficulty": "hard",
		"possible_answers": [
			"2nd Place, 2015 League of Legends Championship Series",
			"2nd Place, 2014 Salt Lake County Debate Championship",
			"1st Place, Yavapai County Science Fair",
			"1st Place, Mohave Regional Mental Math Competition"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 15,
		"question_text": "Which religions has Nick Redmond formally adopted, in the past or now?",
		"difficulty": "hard",
		"possible_answers": [
			"Baptism, Methodism, Agnosticism",
			"Baptism, Protestantism, Agnosticism",
			"Methodism, Lutheranism",
			"Catholicism, Agnosticism, Mormonism"
		],
		"correct_answer_index": 0
	},
	{
		"question_id": 16,
		"question_text": "Where has Nick Redmond been backpacking, before?",
		"difficulty": "hard",
		"possible_answers": [
			"Glen Canyon, Yosemite Nat'l Park",
			"Hassayampa River, Grand Canyon Nat'l Park, Yellowstone Nat'l Park",
			"Grand Canyon Nat'l Park, Arches Nat'l Park, Yellowstone Nat'l Park",
			"Grand Canyon Nat'l Park, Yosemite Nat'l Park"
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 17,
		"question_text": "How many full-time, paid positions has Nick Redmond held?",
		"difficulty": "medium",
		"possible_answers": [
			"3",
			"4",
			"6",
			"7"
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 18,
		"question_text": "Who is Nick Redmond's Goo?",
		"difficulty": "hard",
		"possible_answers": [
			"Dunbar",
			"Santiago",
			"Legolas",
			"Blue"
		],
		"correct_answer_index": 0
	},
	{
		"question_id": 19,
		"question_text": "What are the names of Nick's childhood pets?",
		"difficulty": "medium",
		"possible_answers": [
			"Sanchez, Dumbledore",
			"Beauty, Sanchez, Crystal, Umi",
			"Crystal, Umi",
			"Beauty, Crystal, Umi"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 20,
		"question_text": "What is Nick Redmond's favorite animal?",
		"difficulty": "hard",
		"possible_answers": [
			"Koala Bear",
			"Fire-Bellied Newt",
			"Grizzly Bear",
			"Bald Eagle"
		],
		"correct_answer_index": 0
	},
	{
		"question_id": 21,
		"question_text": "What score did Nick Redmond receive on the ACT?",
		"difficulty": "hard",
		"possible_answers": [
			"22",
			"30",
			"36",
			"Nick Redmond did not take the ACT"
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 22,
		"question_text": "What score did Nick Redmond receive on the SAT?",
		"difficulty": "hard",
		"possible_answers": [
			"1080",
			"1250",
			"1600",
			"Nick Redmond did not take the SAT"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 23,
		"question_text": "What is Nick Redmond's favorite brand of tobacco (until he quits)?",
		"difficulty": "easy",
		"possible_answers": [
			"Marlboro Reds Short",
			"Marlboro Reds 100",
			"Camel Crush Menthol",
			"American Spirits"
		],
		"correct_answer_index": 0
	},
	{
		"question_id": 24,
		"question_text": "What is Nick Redmond's favorite color?",
		"difficulty": "easy",
		"possible_answers": [
			"Red",
			"Orange",
			"Green",
			"Blue"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 25,
		"question_text": "Who is Nick Redmond's favorite U.S. president?",
		"difficulty": "medium",
		"possible_answers": [
			"George Washington",
			"Donald Trump",
			"Franklin Delano Roosevelt",
			"Theodore Roosevelt"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 26,
		"question_text": "Where did Nick Redmond attend high school?",
		"difficulty": "easy",
		"possible_answers": [
			"Bradshaw Mountain High School",
			"Northpoint High School",
			"Prescott High School",
			"West High School"
		],
		"correct_answer_index": 2
	},
	{
		"question_id": 27,
		"question_text": "What is Nick Redmond's middle name?",
		"difficulty": "easy",
		"possible_answers": [
			"John",
			"Lee",
			"Patrick",
			"Jeffrey"
		],
		"correct_answer_index": 0
	},
	{
		"question_id": 28,
		"question_text": "What is the most embarrassing word Nick Redmond has ever learned?",
		"difficulty": "expert",
		"possible_answers": [
			"Amsterdam",
			"Tooter",
			"Quelsh",
			"Bufu"
		],
		"correct_answer_index": 3 
	},
	{
		"question_id": 29,
		"question_text": "Which musical instruments has Nick Redmond learned to play?",
		"difficulty": "medium",
		"possible_answers": [
			"Guitar, Trombone",
			"Guitar, Clarinet",
			"Trumpet, Clarinet",
			"Trumpet, Flute"
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 30,
		"question_text": "What project did Nick Redmond complete for his undergraduate thesis?",
		"difficulty": "medium",
		"possible_answers": [
			"Microsoft XNA Game - \"CorkyDorkz\"",
			"Optical Character Recognition - \"Text4Less\"",
			"State Machine Chatterbot - \"Professor Winston\"",
			"Angular Web App - \"Nicotine's Kryptonite\""
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 31,
		"question_text": "Which of these desserts does Nick Redmond often consider to be his favorite?",
		"difficulty": "easy",
		"possible_answers": [
			"Cookies",
			"Licorice",
			"Pie",
			"Peanut Brittle"
		],
		"correct_answer_index": 2
	},
	{
		"question_id": 32,
		"question_text": "How tall is Nick Redmond?",
		"difficulty": "easy",
		"possible_answers": [
			"4'10\"",
			"5'2\"",
			"5'6\"",
			"5'11\""
		],
		"correct_answer_index": 2
	},
	{
		"question_id": 33,
		"question_text": "What T.V. show did Nick Redmond and his best friend \"binge watch\" in high school?",
		"difficulty": "medium",
		"possible_answers": [
			"Glee",
			"Family Matters",
			"Seinfeld",
			"Lost"
		],
		"correct_answer_index": 3
	},
	{
		"question_id": 34,
		"question_text": "What is Nick Redmond's favorite game show?",
		"difficulty": "medium",
		"possible_answers": [
			"Family Feud",
			"Jeopardy",
			"Wheel of Fortune",
			"Who Wants to Be a Millionaire"
		],
		"correct_answer_index": 0 
	},
	{
		"question_id": 35,
		"question_text": "Which one of these high school courses did Nick Redmond actually complete?",
		"difficulty": "easy",
		"possible_answers": [
			"AP Calculus",
			"AP English",
			"AP Physics",
			"AP History"
		],
		"correct_answer_index": 0
	},
	{
		"question_id": 36,
		"question_text": "Which of these high school teachers scared Nick Redmond into doing his homework?",
		"difficulty": "easy",
		"possible_answers": [
			"Mr. Benson",
			"Mr. Van Guse",
			"Mr. Halladay",
			"Mrs. Dodson"
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 37,
		"question_text": "Which of these sets of video games has Nick Redmond played to a fault?",
		"difficulty": "hard",
		"possible_answers": [
			"Star Wars Battlefront, League of Legends",
			"Star Wars: Galatctic Battlegrounds II, Call of Duty: Modern Warfare 2, Minecraft, League of Legends",
			"Medal of Honor, Dead Space 2, World of Warcraft, Minecraft",
			"Tetris, Brick Breaker, World of Warcraft, Final Fantasy XV"
		],
		"correct_answer_index": 1
	},
	{
		"question_id": 38,
		"question_text": "What is Nick Redmond's favorite video game character?",
		"difficulty": "expert",
		"possible_answers": [
			"Link",
			"Ms. Pac-Man",
			"Heimerdinger",
			"Bowser"
		]
	},
	{
		"question_id": 39,
		"question_text": "Which video game consoles has Nick Redmond owned?",
		"difficulty": "expert",
		"possible_answers": [
			"Gameboy Advance SP, Nintendo Wii, Xbox 360, NES",
			"Gameboy Advance SP, Nintendo Wii, Xbox 360, Xbox One, NES",
			"Nintendo 64, Nintendo Wii, Playstation 3, Playstation 4",
			"Nick Redmond has never owned a video game console"
		]
	},
	{
		"question_id": 40,
		"question_text": "What is Nick Redmond's favorite T.V. show?",
		"difficulty": "medium",
		"possible_answers": [
			"The Office",
			"Tie between The Office and House",
			"Modern Family",
			"Glee"
		]
	},
	{
		"question_id": 41,
		"question_text": "In which class debate did Nick Redmond take first place?",
		"difficulty": "expert",
		"possible_answers": [
			"Batman v. Superman",
			"Agnosticism v. Christianity",
			"Utilitarianism v. Kantianism",
			"Brad Pitt v. Angelina Jolie"
		]
	},
	{
		"question_id": 42,
		"question_text": "Which bone has Nick Redmond fractured?",
		"difficulty": "expert",
		"possible_answers": [
			"Left Scaphoid",
			"Right Scaphoid",
			"Left Scapula",
			"Right Scapula"
		]
	},
	{
		"question_id": 43,
		"question_text": "From which school did Nick Redmond graduate with an undergraduate degree?",
		"difficulty": "easy",
		"possible_answers": [
			"Neumont University",
			"Arizona State University",
			"Northern Arizona University",
			"Brigham Young University"
		]
	},
	{
		"question_id": 44,
		"question_text": "easy",
		"difficulty": "What is Nick Redmond's average typing speed, in words per minute (wpm)?",
		"possible_answers": [
			"71 wpm",
			"35 wpm",
			"122 wpm",
			"Over 9000 wpm"
		]
	},
	{
		"question_id": 45,
		"question_text": "easy",
		"difficulty": "What is Nick Redmond's favorite fantasy?",
		"possible_answers": [
			"Playing Linebacker for the Dallas Cowboys",
			"Traveling Into a Black Hole",
			"Becoming Immortal",
			"Becoming a King"
		]
	},
	{
		"question_id": 46,
		"question_text": "What was Nick Redmond's major in college?",
		"difficulty": "easy",
		"possible_answers": [
			"B.S. in Criminal Justice",
			"A.S. in Criminal Justice",
			"B.S. in Computer Science",
			"A.S. in Computer Science"
		]
	},
	{
		"question_id": 47,
		"question_text": "Which theme parks has Nick Redmond visited AND ridden roller coasters (including water coasters)?",
		"difficulty": "easy",
		"possible_answers": [
			"Six Flags Magic Mtn. (Valencia), Disneyland (Anaheim), Lagoon (Farmington)",
			"Wet 'n' Wild (Phoenix), Disneyland (Anaheim), Lagoon (Farmington)",
			"Wet 'n' Wild (Phoenix), Knott's Berry Farm (Buena Park), Disneyland (Anaheim), Lagoon (Farmington)",
			"Wet 'n' Wild (Phoenix), Universal Studios Escape (Orlando)"
		]
	},
	{
		"question_id": 48,
		"question_text": "What was the name of Nick Redmond's elementary school?",
		"difficulty": "easy",
		"possible_answers": [
			"Wildomar Elementary School",
			"Taylor Hicks Elementary School",
			"Miller Valley Elementary School",
			"Abia Judd Elementary School"
		]
	},
	{
		"question_id": 49,
		"question_text": "What was Nick Redmond's best record at a single wrestling tournament?",
		"difficulty": "easy",
		"possible_answers": [
			"6-0 (5 pins)",
			"4-1 (3 pins)",
			"2-0 (2 pins)",
			"1-2 (1 pin)"
		]
	},
	{
		"question_id": 50,
		"question_text": "What was the name of Nick Redmond's grade school in kindergarten?",
		"difficulty": "expert",
		"possible_answers": [
			"Eerie Elementary School",
			"Rover Elementary School",
			"Wildomar Elementary School",
			"St. Mary-Basha Catholic School"
		]
	}
];
