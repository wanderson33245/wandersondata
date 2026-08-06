const SUBGENRE_WORDS = {
  heavy: ["babe", "gypsy", "london", "rock", "rocking", "dynamite", "bye", "ohh", "highway", "ow", "wow", "runaway", "roll", "leather", "woo", "neon", "shout", "balls", "wheels", "bun", "christmas", "slam", "tiger", "baby", "tough", "woman", "outlaw", "anytime", "doctor", "mama", "princess", "lady", "cos", "speed", "stomp", "hot", "rolling", "metal", "blues", "crazy", "rebel", "bang", "ain't", "engines", "rainbow", "cat", "boots", "knock", "candy", "madman"],
  thrash: ["mosh", "thrash", "thrashing", "beer", "aggression", "nuclear", "attitude", "brutal", "pit", "oppression", "technology", "sadistic", "submit", "cash", "scum", "senseless", "terror", "sentence", "violence", "police", "devastation", "victims", "society", "law", "justice", "execution", "genocide", "toxic", "brain", "rights", "priests", "violent", "attack", "bent", "command", "bombs", "torture", "tyrants", "brains", "total", "speed", "murder", "weapons", "smash", "tv", "crimes", "american", "hypocrisy", "abuse", "merciless"],
  death: ["cadaver", "butchery", "fluids", "innards", "organs", "butchered", "intestines", "torso", "chunks", "decomposing", "mutilate", "pus", "putrid", "dismembered", "rotted", "gore", "mangled", "entrails", "mutilated", "grotesque", "bowels", "slicing", "hack", "deformed", "carcass", "tissue", "defiled", "festering", "rancid", "macabre", "malignant", "maggots", "mutilation", "deceased", "stiff", "gruesome", "blasphemous", "infested", "rotting", "horrid", "internal", "corpse", "stench", "corpses", "rots", "beings", "abomination", "removed", "engulfed", "dormant"],
  black: ["inn", "nocturnal", "satanic", "thou", "satan", "northern", "frost", "horns", "mortals", "forest", "infernal", "beasts", "north", "thus", "pagan", "thy", "hordes", "vast", "lucifer", "fog", "storms", "woods", "realms", "thee", "blasphemy", "witches", "grim", "winds", "shall", "mist", "womb", "mountains", "forth", "rises", "wolves", "virgin", "soil", "glorious", "abyss", "wisdom", "art", "ancient", "serpent", "temple", "damnation", "legions", "nor", "howling", "winter", "funeral"],
  groove: ["test", "pick", "sick", "does", "shit", "told", "cut", "fuck", "walk", "hate", "self", "devil", "broken", "ride", "empty", "myself", "remember", "inside", "fucking", "hard", "what's", "break", "yourself", "wake", "kill", "care", "call", "face", "line", "rise", "that's", "war", "found", "better", "ain't", "nothing", "lies", "man", "eye", "comes", "lose", "dead", "hands", "always", "bleed", "think", "everything", "born", "life", "truth"],
  progressive: ["drifting", "view", "maze", "ocean", "cosmic", "ourselves", "build", "shelter", "glow", "quiet", "colors", "flight", "flow", "tide", "moment", "comfort", "space", "infinite", "memory", "energy", "design", "climb", "reaching", "somewhere", "lines", "journey", "further", "draw", "shore", "mountain", "memories", "waves", "somehow", "hours", "window", "distance", "distant", "simple", "unknown", "forward", "weight", "stare", "grow", "fears", "spinning", "water", "underneath", "trace", "void", "sand"],
  doom: ["lucifer", "doom", "arise", "beauty", "thee", "thy", "sea", "sun", "smoke", "sorrow", "moon", "clouds", "winter", "black", "kiss", "frozen", "dawn", "cast", "died", "great", "children", "stone", "arms", "eternal", "shadow", "void", "earth", "stars", "misery", "silent", "waves", "yet", "sleep", "dying", "knows", "lay", "each", "lord", "tears", "ancient", "falls", "child", "embrace", "beneath", "darkness", "longer", "shadows", "blue", "awake", "sweet"],
  power: ["pirate", "dominus", "sanctus", "dwarves", "rum", "defenders", "dragons", "wooden", "guardians", "knights", "guardian", "wizard", "legend", "forevermore", "riders", "dragon", "rome", "sail", "starlight", "quest", "heroes", "glorious", "rainbow", "legends", "treasure", "battlefield", "tale", "glory", "foes", "mystic", "sailing", "brave", "warrior", "seas", "twilight", "lands", "swords", "unite", "mighty", "shores", "sails", "warriors", "lion", "afar", "moonlight", "horizons", "eagle", "journey", "symphony", "guiding"],
  glam: ["blues", "boys", "girls", "mama", "baby", "honey", "c'mon", "hot", "rock", "trouble", "girl", "loving", "shake", "roll", "woman", "shout", "bang", "love", "street", "wild", "town", "alright", "ain't", "boy", "hungry", "lady", "crazy", "easy", "sweet", "young", "lonely", "shot", "money", "bad", "ya", "dirty", "tight", "doing", "good", "drive", "talking", "woah", "fun", "big", "dancing", "top", "little", "tonight", "city", "round"],
  nu: ["jah", "y'all", "mic", "rollin", "pogo", "i'ma", "check", "pop", "punk", "motherfucker", "hating", "freak", "okay", "style", "yo", "fucked", "motherfucking", "fuck", "shit", "shut", "jump", "bitch", "pushing", "stick", "boom", "ass", "kid", "quit", "everybody", "separate", "anybody", "babylon", "suck", "fake", "drop", "supposed", "push", "psycho", "toxic", "nobody", "fault", "hurt", "trip", "sick", "bang", "happens", "problems", "fix", "stuck", "because"],
  metalcore: ["honest", "lungs", "swear", "weight", "sink", "sinking", "mistakes", "thread", "pulling", "barely", "listening", "define", "ashamed", "chest", "gravity", "stuck", "person", "deserve", "ties", "admit", "dragging", "bury", "spent", "problems", "okay", "worth", "breathe", "numb", "underneath", "failure", "crashing", "pull", "pretend", "bottom", "pulled", "fault", "hoping", "worthless", "starting", "comfort", "wishing", "worst", "drown", "saving", "prove", "missed", "shallow", "watched", "letting", "enough"],
  alt: ["okay", "guess", "bit", "sorry", "everybody", "wouldn't", "thinking", "hurts", "wasn't", "hurt", "didn't", "somebody", "pretend", "stuck", "i'd", "maybe", "safe", "fake", "middle", "couldn't", "feels", "gets", "holding", "sick", "anymore", "needed", "rather", "belong", "anyone", "wanted", "fine", "letting", "wave", "scared", "drag", "trying", "miss", "suck", "wish", "push", "throw", "deserve", "nobody", "enough", "everyone", "you'd", "giving", "anything", "blame", "keeps"],
  gothic: ["thee", "thou", "thy", "beautiful", "moon", "tears", "desire", "afraid", "hearts", "dawn", "hurt", "cannot", "dreams", "lay", "skies", "misery", "stars", "deep", "falling", "wish", "dance", "heaven", "fallen", "sleep", "heart", "fade", "sorrow", "darkness", "breathe", "sea", "feels", "words", "cry", "shall", "free", "light", "fall", "stay", "years", "inside", "turn", "side", "voice", "sick", "storm", "rain", "save", "dream", "yet", "dark"],
  other: ["funk", "funky", "inn", "runes", "odin", "heathen", "cuz", "pig", "ma", "northern", "hall", "bar", "yo", "north", "woods", "sex", "met", "freak", "gore", "mama", "ya", "pick", "mountain", "meat", "ignite", "breed", "fix", "fame", "bit", "mountains", "swords", "brothers", "wolf", "pretty", "trees", "lands", "crush", "lot", "tale", "forest", "hair", "animal", "respect", "men", "luck", "green", "dirty", "snow", "naked", "till"],
};

// Display names for each subgenre code.
const SUBGENRE_NAMES = {
  heavy: "Heavy Metal",
  thrash: "Thrash Metal",
  death: "Death Metal",
  black: "Black Metal",
  groove: "Groove Metal",
  progressive: "Progressive Metal",
  doom: "Doom Metal",
  power: "Power Metal",
  glam: "Glam Metal",
  nu: "Nu Metal",
  metalcore: "Metalcore",
  alt: "Alternative Metal",
  gothic: "Gothic Metal",
  other: "Other / Experimental",
};

// Difficulty tiers: which subgenres are in the answer pool, and how many
// options are shown per round (for "easy", a random subset of poolSize is
// drawn from the pool on every round).
const DIFFICULTIES = {
  easy: {
    label: "Easy",
    sublabel: "3 options from the 6 classic subgenres",
    pool: ["heavy", "thrash", "death", "black", "progressive", "doom"],
    optionCount: 3,
  },
  medium: {
    label: "Medium",
    sublabel: "6 options, the classic subgenres",
    pool: ["heavy", "thrash", "death", "black", "progressive", "doom"],
    optionCount: 6,
  },
  hard: {
    label: "Hard",
    sublabel: "10 options, the original subgenre system",
    pool: ["heavy", "thrash", "death", "black", "groove", "progressive", "doom", "power", "glam", "nu"],
    optionCount: 10,
  },
  admin: {
    label: "Metal Archives Admin",
    sublabel: "13 options, everything except Nu Metal",
    pool: ["heavy", "thrash", "death", "black", "groove", "progressive", "doom", "power", "glam", "metalcore", "alt", "gothic", "other"],
    optionCount: 13,
  },
};