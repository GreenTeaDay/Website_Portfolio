// This program creates caveman quotes of prophetic nature.

let nouns =  "Actor Gold Painting Advertisement Grass Parrot Afternoon Greece Pencil Airport Guitar Piano Ambulance Hair Pillow Animal Hamburger Pizza Answer Helicopter Planet Apple Helmet Plastic Army Holiday Portugal Australia Honey Potato Balloon Horse Queen Banana Hospital Quill Battery House RainBeach Hydrogen Rainbow Beard Ice Raincoat Bed Insect Refrigerator Belgium Insurance Restaurant Boy Iron River Branch Island Rocket Breakfast Jackal RoomBrother Jelly RoseCamera Jewellery Russia Candle Jordan Sandwich Car Juice School Caravan Kangaroo Scooter Carpet King Shampoo Cartoon Kitchen Shoe China Kite Soccer Church Knife Spoon Crayon Lamp Stone Crowd Lawyer Sugar Daughter Leather Sweden Death Library Teacher Denmark Lighter Telephone Diamond Lion Television Dinner Lizard Tent Disease Lock Thailand Doctor London Tomato Dog Lunch Toothbrush Dream Machine Traffic Dress Magazine Train Easter Magician Truck Egg Manchester Uganda Eggplant Market Umbrella Egypt Match Van Elephant Microphone Vase Energy Monkey Vegetable Engine Morning Vulture England Motorcycle Wall Evening Nail Whale Eye Napkin Window Family Needle Wire Finland Nest Xylophone Fish Nigeria Yacht Flag Night YakFlower Notebook  Zebra Football Ocean Zoo Forest Oil Garden Fountain Orange Gas France Oxygen Girl Furniture Oyster Glass Garage Ghost";
let verbs = "Knew Believed Understand Doubt Think  Suppose Recognize Forget Remember Imagine Mean Agree Disagree Deny Promise Satisfy Realise Appear Astonish Please Impress Surprise Concern Have Own Possess Lack Consist Involve Include Contain Love Like Dislike Hate Adore Prefer Care for Mind Want Need Desire Wish Hope Appreciate Value Cost Measure Weigh Owe Seem Fit Depend Matter";
let pronouns = "I We You They";

let xpronounsArr = pronouns.split(" ");
let xnounsArr = nouns.split(" ");
let xverbsArr = verbs.split(" ");

let nounsArr = xnounsArr;
let pronounsArr = xpronounsArr;
let verbsArr = xverbsArr;

function cavepersonquoteMachine () {
  let x = 0;
  let y = 0;
  let z = 0;
       x = Math.floor(Math.random() * pronounsArr.length);
       y = Math.floor(Math.random() * verbsArr.length);
       z = Math.floor(Math.random() * nounsArr.length);
      return(`${pronounsArr[x]} ${verbsArr[y]} ${nounsArr[z]}.`);
      
};

console.log(cavepersonquoteMachine());


