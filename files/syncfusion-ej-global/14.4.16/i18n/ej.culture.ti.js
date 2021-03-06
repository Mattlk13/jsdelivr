ej.addCulture( "ti", {
	name: "ti",
	englishName: "Tigrinya",
	nativeName: "ትግርኛ",
	language: "ti",
	numberFormat: {
		decimals: 1,
		groupSizes: [3,0],
		"NaN": "NAN",
		percent: {
			pattern: ["-n%","n%"],
			decimals: 1,
			groupSizes: [3,0]
		},
		currency: {
			pattern: ["-$n","n$"],
			symbol: "ERN"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["ሰንበት","ሰኑይ","ሰሉስ","ሮቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
				namesAbbr: ["ሰንበት","ሰኑይ","ሰሉስ","ሮቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
				namesShort: ["ሰን","ሰኑ","ሰሉ","ሮቡ","ሓሙ","ዓር","ቀዳ"]
			},
			months: {
				names: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
				namesAbbr: ["ጥሪ","የካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""]
			},
			AM: ["ንጉሆ","ንጉሆ","ንጉሆ"],
			PM: ["ድሕሪ ቐትሪ","ድሕሪ ቐትሪ","ድሕሪ ቐትሪ"],
			patterns: {
				d: "d/M/yyyy",
				D: "dddd '፣' MMMM d 'መዓልቲ' yyyy",
				f: "dddd '፣' MMMM d 'መዓልቲ' yyyy h:mm tt",
				F: "dddd '፣' MMMM d 'መዓልቲ' yyyy h:mm:ss tt"
			}
		}
	}
});
