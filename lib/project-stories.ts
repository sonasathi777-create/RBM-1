export type ProjectStory = {
  headline: string;
  intro: string;
  directionTitle: string;
  direction: string;
  statement: string;
  accent: string;
  craft: { title: string; text: string }[];
};

export const projectStories: Record<string, ProjectStory> = {
  "1937": {
    headline: "Old Calcutta. A fresh place at the table.",
    intro: "1937 brings bakery, coffeehouse and cocktail bar stories together through the flavours and atmosphere of Calcutta. This collection pairs cabin classics, in-house desserts and coffee with the warmth of the dining room and films that bring its character to life.",
    directionTitle: "Give the city’s food memories a new expression.",
    direction: "Forest green, cream and terracotta connect editorial layouts with rich food photography. Stamp borders, newspaper-inspired compositions and expressive type carry stories of familiar dishes, while interior details and people give the collection a welcoming rhythm.",
    statement: "From Calcutta, with love. Made for a new generation.",
    accent: "#e8e1d5",
    craft: [
      { title: "Food with a story", text: "Cabin classics, pastries and coffee lead the imagery, connecting individual menu items with the wider story of the coffeehouse." },
      { title: "A familiar visual language", text: "Green, cream and terracotta unite vintage-inspired typography, stamp details and contemporary food compositions." },
      { title: "The coffeehouse in motion", text: "Films sit alongside dining-room details and social creatives, bringing people, atmosphere and food into the same collection." },
    ],
  },
  amber: {
    headline: "A legacy of flavour. A story in every frame.",
    intro: "Established in 1959, Amber brings food, cocktails and the art of gathering into one warm visual world. This collection moves from the atmosphere of its dining room to the detail of its dishes, drinks and the people behind them.",
    directionTitle: "Bring a familiar legacy into the feed.",
    direction: "Cream and gold meet rich food photography, expressive typography and the warmth of the restaurant. Menu stories, cocktail features and moments from the kitchen connect Amber’s heritage with an inviting social presence.",
    statement: "Where every plate carries the comfort of years.",
    accent: "#f2e7c8",
    craft: [
      { title: "Flavour in focus", text: "Close-ups of food and cocktails bring colour, texture and the details of each serving to the foreground." },
      { title: "Heritage in the details", text: "Amber’s established identity, warm palette and considered typography connect the creative across the collection." },
      { title: "The people behind the plate", text: "Kitchen portraits and dining moments give the menu a human story, alongside the dishes and drinks." },
    ],
  },
  "wow-china": {
    headline: "Big flavour. A world to explore.",
    intro: "Noodles, familiar favourites, and dishes from across Asia come together in this collection for Wow China. Bold food creatives sit alongside everyday dining moments and video stories.",
    directionTitle: "Give every craving a place in the feed.",
    direction: "A strong red palette connects playful headlines, food close-ups, and travel-inspired menu stories. Portraits of diners bring a different perspective, while video adds movement to the collection.",
    statement: "A little curiosity. A lot of flavour.", accent: "#e8453c",
    craft: [
      { title: "Food in focus", text: "Noodles, sides, and sharing plates lead the compositions, with texture and detail close to the camera." },
      { title: "A recognisable red", text: "Bold colour and expressive typography connect individual dishes with the wider brand." },
      { title: "Stories across Asia", text: "Postcards, landmarks, and menu features bring a sense of discovery to the food." },
    ],
  },
  anjohn: {
    headline: "Salon style. A signature of its own.",
    intro: "For A N John Salons & Academy, hair, beauty and education share one visual world. This collection brings together salon grids, academy stories, nail creatives and seasonal campaigns.",
    directionTitle: "Let the craft take centre stage.",
    direction: "Neutral tones and considered typography give hair and beauty imagery room to stand out. Editorial grids sit alongside playful reminders, while seasonal designs introduce softer colour and a more personal voice.",
    statement: "Every detail is part of the style.", accent: "#c9c3b9",
    craft: [
      { title: "Style across the grid", text: "Coordinated layouts connect salon imagery, products and everyday brand messages." },
      { title: "Beauty in the details", text: "Hair, nails and academy stories each have space within the wider brand identity." },
      { title: "Seasonal stories", text: "Occasion-led artwork brings a personal voice to the salon and academy brand." },
    ],
  },
  "flavours-of-india": {
    headline: "A feast for the eyes. A reason to stay.",
    intro: "Food has a story before the first bite. For Flavours of India, this collection brings dishes, drinks and festive moments into a visual world built around appetite and discovery.",
    directionTitle: "Let the food do the talking.",
    direction: "Rich close-ups, expressive typography and carefully layered compositions give each dish its own moment. Familiar flavours meet a fresh presentation, with seasonal stories sitting naturally alongside everyday menu favourites.",
    statement: "Before the first bite, there is a first look.", accent: "#e8dcc0",
    craft: [{ title: "Appetite in the frame", text: "Texture, colour and detail keep the food at the centre of each composition." }, { title: "A voice on the menu", text: "Headlines and layouts give individual dishes a personality of their own." }, { title: "Room for every occasion", text: "Seasonal creatives extend the same visual language across celebrations and everyday moments." }],
  },
  hideaway: {
    headline: "A little escape. A lot to come back for.",
    intro: "A café is as much about how it feels as what it serves. Hideaway’s creative collection moves between coffee, comfort food and the moments that make a place feel like yours.",
    directionTitle: "Bring the café feeling into the feed.",
    direction: "Warm tones, layered layouts and generous food imagery carry the atmosphere beyond the café. Menu stories and event creatives share a relaxed, welcoming character while giving each occasion a distinct expression.",
    statement: "More than a menu. A mood you can step into.", accent: "#f2e7c8",
    craft: [{ title: "Warmth by design", text: "Colour and composition create a comfortable backdrop for coffee and food stories." }, { title: "Everyday invitations", text: "Menu-led content gives small café moments a place in the brand’s communication." }, { title: "A changing rhythm", text: "Event announcements add a different tempo while keeping the brand recognisable." }],
  },
  kinkys: {
    headline: "Big flavour. Bigger personality.",
    intro: "Some food asks for a quiet introduction. Kinky’s calls for something louder. This collection pairs indulgent food imagery with an expressive visual voice that enjoys getting a little messy.",
    directionTitle: "Make room for a little attitude.",
    direction: "Bold colour, direct headlines and close-up food imagery set the tone. The layouts give each product space to be the hero, with playful details that carry the brand’s character from one creative to the next.",
    statement: "Good taste does not have to play it safe.", accent: "#ef4540",
    craft: [{ title: "Food up close", text: "Tight framing keeps texture and indulgence in full view." }, { title: "Words with bite", text: "Short, playful copy works with the imagery to express the brand’s personality." }, { title: "Unmissable colour", text: "A bold visual palette ties individual menu creatives into one recognisable world." }],
  },
  "the-paw-story": {
    headline: "Little paws. Plenty of personality.",
    intro: "The Paw Story’s world starts with the animals and the people who care for them. Portraits, grooming communication and playful details come together in a collection with affection at its centre.",
    directionTitle: "Put a little care into every detail.",
    direction: "Expressive pet photography leads the layouts, supported by approachable typography and light-hearted graphic elements. Care information and promotional messages stay clear without losing the warmth of the brand.",
    statement: "Every little face has a story of its own.", accent: "#f2b6ba",
    craft: [{ title: "Personality first", text: "Pet portraits give the creative its expression and emotional centre." }, { title: "Care, made clear", text: "Service information is organised into friendly, easy-to-read compositions." }, { title: "A playful thread", text: "Colour and illustration connect promotional messages with everyday brand content." }],
  },
  turtle: {
    headline: "Everyday style. A different point of view.",
    intro: "Clothing is part of how people move through the world. Turtle’s collection brings fashion imagery, collection stories and occasion-led communication into a cohesive visual presentation.",
    directionTitle: "Give the clothes space to speak.",
    direction: "The creative balances product detail with the wider feeling of a collection. Considered layouts, image-led storytelling and restrained typography let the fashion lead while keeping campaign and promotional information easy to follow.",
    statement: "Style lives in the details you choose to notice.", accent: "#cbd1c5",
    craft: [{ title: "The collection in focus", text: "Fashion imagery establishes the mood and keeps the clothing central." }, { title: "A consistent wardrobe", text: "Shared layout choices connect different looks and occasions." }, { title: "Clarity in the campaign", text: "Promotional details sit within the creative without overwhelming the visual story." }],
  },
  utsav: {
    headline: "A place to gather. A feeling to remember.",
    intro: "Hospitality brings together spaces, occasions and people. For Utsav Hotel & Banquet, the creative collection explores that connection through identity, festive communication and stories of celebration.",
    directionTitle: "Make every occasion feel considered.",
    direction: "Cultural cues, thoughtful typography and occasion-led compositions create a welcoming visual language. Identity explorations sit alongside festive creatives, connecting the character of the venue with the moments it hosts.",
    statement: "The best celebrations begin with a warm welcome.", accent: "#dbccac",
    craft: [{ title: "A sense of place", text: "Identity elements establish a visual foundation for the hotel and banquet experience." }, { title: "Culture in the details", text: "Festive themes connect the communication to the occasions being celebrated." }, { title: "An open invitation", text: "Clear, welcoming compositions bring venue stories and seasonal messages together." }],
  },
};
