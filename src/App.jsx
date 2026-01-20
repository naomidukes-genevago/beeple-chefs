import React, { useState, useMemo } from 'react';
import { 
  Search, ChevronLeft, Utensils, 
  Cookie, Salad, Flame, IceCream, 
  CookingPot, Camera, X
} from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // DATA INTEGRITY: Verified original content
  const [recipes] = useState([
    {
      id: 1,
      title: "Mushroom Risotto",
      author: "Athenais Sollami",
      category: "Mains",
      description: "The first time I ever had risotto was on vacation in Rome. It feels fancy, it's actually really easy, and the perfect way to use up whatever's leftover in your fridge!",
      image: "https://plus.unsplash.com/premium_photo-1695240028448-9a8bf3e164f5?q=80&w=687&auto=format&fit=crop",
      ingredients: [
        "1 ½ cups of Risotto rice", "1 onion, finely chopped", "1 million garlic cloves, minced", "400g mushrooms, sliced", "4 cups vegetable or chicken stock", "3 tablespoons olive oil or butter", "Grated Parmesan", "Salt & pepper, fresh herbs", "Toss in any leftovers you have, like cooked veggies, roasted meats, cheese (go wild!)"
      ],
      instructions: [
        "Heat oil or butter in a pot over medium heat.", "Add onion and cook until soft, about 3 to 5 minutes.", "Add garlic and mushrooms and cook until mushrooms are golden and reduced, about 8 minutes.", "Add the rice and toast for 2 to 3 minutes until the edges are translucent.", "Pour in the wine (if using) and stir until absorbed.", "Pour in the stock, but add it little by little. Keep stirring gently and let it absorb before adding more.", "Continue this for about 20 minutes, make sure the rice is creamy and tender.", "Leftovers! Add any cooked vegetables, meats, or cheese extras anywhere in the process, so they warm through.", "Season with salt and pepper, garnish with herbs.", "Buon appetito!"
      ]
    },
    {
      id: 2,
      title: "Fried Rice",
      author: "Damian Gonzalez",
      category: "Mains",
      description: "This is my own version, perfected over the years. It is the ultimate comfort food for two people and incredibly versatile.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1025&auto=format&fit=crop", 
      ingredients: [
        "250 grams of cooked rice, basmati or jasmine (up to 400 grams if not adding extra protein).", "2 or 3 eggs, depending on their size, beaten (up to 4 if not adding extra protein).", "6 cloves of garlic, minced (or as much as your heart desires).", "1 onion, finely chopped.", "1 carrot, finely diced.", "1 green onion, finely chopped.", "2 tablespoons soy sauce.", "Salt, pepper, and any herbs or spices to taste.", "Optional: 1-2 tablespoons teriyaki sauce."
      ],
      instructions: [
        "Prepare the rice one of two ways. You can cook it the night before, let it cool and save it in the fridge, or you can cook it before the rest of the dish, making sure it’s completely cool when you’re going to use it. It's better to spread it in a big dish or tray to cool it properly. And also, make sure to wash the rice before cooking it to remove all the starch it might have so it's not sticky later, rinse it in a pot and replace the water until you get it to be clear.", " Heat a pan (or a wok if you have one) with a bit of olive oil to medium or medium-high heat, add the beaten eggs and scramble them. When done, remove them from the pan.", " Add some more olive oil and add the garlic, the onion and the carrot. Stir fry them until they’re getting soft and some color on them, the time this takes depends on the cookware you use.", " Add the cool rice, mix and keep stir frying everything. Increase the temperature just a bit, and make sure the rice gets loose without any clumps.", "Add salt, pepper and the soy sauce (and the optional teriyaki sauce if you decide to use it). Mix it well with the rice and stir fry a bit more.", "Add the scrambled eggs and the green onion, and mix everything together.", "Add any extra protein you decide to use and mix everything once again, make sure the protein gets up to temperature if it wasn’t previously.", "Check the seasoning and add any extra herbs or spices you want, then serve!"
      ]
    },
    {
      id: 3,
      title: "Spicy Eggplant Stew with Whipped Feta",
      author: "Bas Keijzer",
      category: "Mains",
      description: "A velvety soft eggplant stew complemented by creamy whipped feta, sweet pomegranate seeds, and crunchy almonds.",
      image: "https://plus.unsplash.com/premium_photo-1664647841075-8d1e2e7732d8?q=80&w=687&auto=format&fit=crop",
      ingredients: [
        "1 red onion", "2 garlic cloves", "4 cm ginger", "2 red chilies", "2 tbsp tomato paste", "Spices: paprika, oregano, cumin", "2 eggplants", "400 g canned diced tomatoes", "300 ml water", "2 tbsp honey", "1 bay leaf", "300 g bulgur", "90 g feta cheese", "2 tbsp Greek yogurt", "Juice of half a lemon", "Pomegranate seeds, parsley, and flaked almonds"
      ],
      instructions: [
        "Sauté onion, garlic, ginger, and chili, then add tomato paste and spices.", "Add eggplant wedges and cook on high heat.", "Stir in tomatoes, water, honey, and bay leaf; simmer covered for 2 hours, then uncovered for 30 minutes.", "Prepare bulgur and whip the feta with yogurt and lemon juice.", "Serve stew over bulgur and top with whipped feta, pomegranate, parsley, and toasted almonds."
      ]
    },
    {
      id: 4,
      title: "Grilled Peach Salad with Burrata and Prosciutto",
      author: "Sam De Bock",
      category: "Starters",
      description: "A refreshing salad featuring grilled peaches, arugula, and a tangy vinaigrette.",
      image: "https://images.unsplash.com/photo-1608060853079-6696ca4af62b?q=80&w=885&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "2 nectarines or peaches, cut into wedges", "2 tbsp honey", "A few sprigs of fresh thyme", "Pepper and coarse salt, to taste", "A handful of arugula", "A handful of baby spinach", "1 ball of burrata (or more if you want", "4-6 slices of prosciutto", "4tbsp olive oil", "Juice of half a lime", "1 tbsp whole grain mustard", "2 tbsp honey", "Pepper and salt, to taste", "2 tablespoons balsamic vinegar", "Salt and pepper to taste"
      ],
      instructions: [
        "Grill the nectarines/peaches: Heat a grill pan over medium heat. Drizzle the wedges with honey, fresh thyme, pepper, and a bit of coarse salt. Grill for a few minutes on each side until nicely caramelized and grill-marked. Set aside.\nTip: If you don't have a grill pan, you can roast them in the oven instead.", "Prepare or serve the prosciutto (optional): You can crisp the prosciutto in a dry pan (for extra crunch) or serve it raw for a soft, salty touch.", "Make the dressing: In a small bowl, mix together the olive oil, lime juice, mustard, and honey. Whisk well until smooth. Season with salt and pepper to taste.", "Assemble the salad: Divide the arugula and baby spinach between plates. Arrange the grilled nectarines or peaches and prosciutto slices on top. Place a ball of burrata in the center. Spoon the dressing over the salad.", "Finish: Garnish with extra thyme, some freshly cracked pepper, and optionally some toasted pine nuts or other nuts.", "Tip: Serve with crusty bread to dip into the burrata and dressing!"
      ]
    },
    {
      id: 5,
      title: "Burrata Sandwich",
      author: "Sergii Prykhodko",
      category: "Snacks",
      description: "Simple, fresh, and full of flavour. This recipe is one my favourites.",
      image: "https://images.unsplash.com/photo-1690145482924-351234d8efcd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "Mini fresh baguette, ideally straight from the oven", "Cherry tomatoes", "A sprinkle of Italian seasoning (basil, oregano, rosemary, thyme, mint, marjoram)", "Fresh burrata", "Homemade pesto (see quick recipe)", "Fresh basil leaves", "Optional: thin slices of prosciutto for added protein"
      ],
      instructions: [
        "Roast the tomatoes", "Cut cherry tomatoes in halves, sprinkle with Italian seasoning, and roast in the oven for 15 minutes at 180°C. The goal is to intensify the flavor and soften the texture.", "Make the Pesto. Here is a quick guide for classic basil pesto: 2 cups fresh basil leaves (lightly packed, thick stems removed). ⅓ cup pine nuts, lightly toasted, ½ cup freshly grated Parmesan cheese. 2-3 garlic cloves, ½ cup extra virgin olive oil. Salt & black pepper to taste. Blend everything except the olive oil until finely chopped. Then slowly drizzle in the olive oil while blending, until smooth. If it’s too thick, you can add a little more oil or a splash of water.", "Check your burrata. This is the star ingredient, so choose wisely. A good burrata should have a smooth, shiny, intact outer skin, and a creamy, silky interior that oozes gently when cut.", "Assemble the sandwich: Slice your mini baguette in half lengthwise, spread the roasted tomatoes across the surface, place the burrata on top, cut it open so the creamy center spreads over the tomatoes, spoon some pesto on top, add a couple of fresh basil leaves, top with prosciuttio (optional), and serve!",
      ]
    },
    {
      id: 6,
      title: "Shakshuka",
      author: "Naomi Dukes",
      category: "Mains",
      description: "Shakshuka is a popular Middle Eastern dish that boasts hundreds of varied recipes. A huge chunk of my childhood was spent devouring shakshuka, so with the years, I developed my own recipe that I hope you will all love and keep in your go-to recipe book. Serve this dish by placing the pan/dish at the centre of the table with tahini sauce, some fresh bread, salads etc.",
      image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "3 capsicums of any colour (also known as bell pepper)", "1-2 chilis (optional)", "3 cloves of garlic", "3 tablespoons olive oil", "1-2 teaspoons tomato paste", "Can of crushed tomatoes", "2 teaspoons sweet paprika", "1 teaspoon ground cumin", "1 teaspoon ground coriander", "Salt and pepper to taste", "4-6 eggs", "Chopped parsley for garnish (optional)", "For the tahini sauce: 4 tablespoons tahini paste (sesame paste - likely available at your local supermarket or at any Middle Eastern supermarket), 1 lemon, salt to taste, 40 ml cold water"
      ],
      instructions: [
        "Heat up a large pan on medium-high heat, add the olive oil. This may seem like a lot of oil but it is really important for the development of flavour.", "While the pan heats, slice the capsicums, chilis, garlic.", "Add the capsicums and chilis to the pan and cook for a few minutes until slightly softened.", "Add the garlic and stir around so the garlic doesn't burn, until fragrant.", "Add the paprika, cumin, coriander, salt and pepper, to the pan and stir really well. The idea here is to cook the spices together with the oil so they 'activate' and release their magic. Don't let this burn! Turn the heat down if needed, or add a splash of water to the pan.", "Add the tomato paste, cook for 1 minute.", "Add the crushed tomatoes. Fill the empty can with a splash of water to use the remaining bits of crushed tomatoes, and add that to the pan too.", "Turn the heat down to low, cover, and simmer for 15 minutes or so. (Tip: a way to know that your sauce is ready is when you see the oil rising from the bottom).", "While the sauce simmers, make your yummy tahini sauce: Place the tahini paste, juice of the entire lemon, dash of salt and the cold water in a bowl. Start mixing everything together with a fork or small whisk. It will look like a giant mess and an absolute failure, but trust the process and keep mixing until you get a beautiful silky smooth sauce. Set aside for later.", "Once the sauce is ready and seasoned to your liking, break the eggs one by one directly into the sauce. Cover and cook on low heat until you're happy with the doneness of the eggs. If your pan is oven proof, you can put this in the oven for quicker results.", "Finish off by sprinkling the shakshuka with freshly chopped parsley. Serve the tahini sauce alongside."
      ]
    },
    {
      id: 7,
      title: "Tomato Orzo with Grilled Asparagus and Burrata",
      author: "Charlotte Loop",
      category: "Mains",
      description: "This beautiful dish can be made with aubergines as well. Please enjoy this delicious meal!",
      image: "https://plus.unsplash.com/premium_photo-1726138627013-b2c15eec0dd7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "250g orzo", "400g (cherry) diced tomatoes from a can", "Olive oil for frying", "1 onion", "2 garlic cloves", "1 tbsp tomato paste", "Optional: 1 red chili pepper", "1 tsp chili flakes", "2 tbsp capers", "1 tbsp white wine vinegar", "1 tsp maple syrup or honey", "Generous pinch of salt and pepper", "1 large ball of fresh burrata", "A bunch of green asparagus tips OR aubergine", "Pine nuts"
      ],
      instructions: [
        "Finely chop the onion and sauté it in a pan with 2 tablespoons of olive oil until translucent. Then add the finely chopped garlic, chili flakes, and chopped chili pepper (seeds removed).", "Fry for 2 minutes and add the tomato paste and diced tomatoes. Season with capers, pepper, salt, vinegar, and maple syrup / honey. Let the sauce simmer and reduce a little.", "Meanwhile, cook the orzo in boiling water with some broth (or salt and a bit of olive oil if you don't have broth) and stir it into the sauce.", "Grill the asparagus / aubergine separately in a pan with oil over high heat. Season with pepper and salt.", "Toast the pine nuts briefly in another pan and let them cool a bit.", "Garnish the orzo with burrata, asparagus, and the toasted pine nuts.",
      ]
    },
    {
      id: 8,
      title: "Hete Bliksem (Hot Lightning)",  
      author: "Robin Van Cleemput",
      category: "Mains",
      description: "A Sea Scout camp recipe that is being used for far longer than I have walked among us all.",
      image: "https://images.unsplash.com/photo-1708053569363-abb376fc2479?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "1/3 potatoes", "1/3 apple sauce", "1/3 ground beef"
      ],
      instructions: [
        "Start by cleaning the potatoes to make mashed potatoes. (Key spices: Salt, pepper, nutmeg).", "Now start cooking your ground beef so it's nice and browned. Use beef spices of your choice.", "When everything is done, heat up the apple sauce and mix it all together in one big cooking bowl.", "Enjoy!"
      ]
    },
    {
      id: 9,
      title: "Beef Nachos",  
      author: "Wouter Huybrighs",
      category: "Mains",
      description: "This nachos casserole is perfect “cinema food” - comfortable to eat on the couch while watching a good movie. It's based on a quick and easy chili topped with a bag of nachos, melted cheese, and fresh garnishes. Fast food at its finest!",
      image: "https://images.unsplash.com/photo-1572680443530-225d4e0d9894?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "400 g minced meat (mixed beef/pork or plain beef)", "240g red beans (chili style*)", "200g nacho chips (plain)", "100g cheddar cheese, grated", "2 tomatoes", "150g corn kernels", "1 onion", "1 garlic clove", "1 bunch spring onions", "2 tbsp sliced olives", "4 chilis", "200ml sour cream", "A few sprigs fresh coriander", "A splash of olive oil", "1 tbsp ground cumin", "1/2 tbsp chili powder", "1/2 tbsp paprika powder"
      ],
      instructions: [
        "Preheat your oven to 180°C. Finely chop the onion and garlic. Heat a splash of olive oil in a wok or large pan.", "Sauté the onion until translucent, then add garlic. Stir in cumin, chili powder, and paprika until fragrant.", "Add the minced meat and cook until it breaks up into fine bits.", "Rinse and drain the beans, then stir them into the meat.", "Add the sour cream and let everything simmer for a few minutes.", "Spread the nachos in an oven-proof dish.", "Spoon the chili mixture over the chips, then sprinkle grated cheddar on top.", "Bake for about 5 minutes, or until the cheese has melted.", "Finely slice the scallions, dice the tomatoes (remove seeds), drain the corn, slice olives, and chop the chili peppers.", "Remove the dish from the oven and top with tomatoes, corn, olives, scallions, chili, and fresh coriander. Optionally, add some diced avocado.", "Tips & variations: You can use pure beef mince or even vegetarian mince, instead of mixed. Adjust the spice level and types of chilis to your preference. Serve with additional sour cream, salsa, or guacamole on the side. Enjoy!"
      ]
    },
    {
      id: 10,
      title: "Boiled Yam with Egg Sauce",
      author: "Emmanuel Ahuno",
      category: "Mains",
      description: "Today's recipe is one of my favourites, boiled yam with egg sauce, served with some fresh avocado on the side which is optional. It's a classic in both Ghana and Nigeria, and the best part is how quick and easy the egg sauce is to make. Unlike many of our traditional meals that take a while, this one comes together in just a few minutes, simple, tasty, and satisfying!",
      image: "https://images.unsplash.com/photo-1757283961582-ab596b0ca595?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "1 tuber of yam (enough for about 8 slices)", "1 tsp salt, for the yam", "4-6 large eggs", "2 medium tomatoes, chopped", "1-2 scotch bonnet peppers, chopped (very spicy!)", "1 small onion, chopped", "1 red bell pepper, chopped", "1/2 cup vegetable oil", "1/2 tsp salt (for the stew)", "1 seasoning cube (bouillon)", "1/2 tsp curry powder", "1 tin mackarel in tomato sauce (optional)", "1-2 ripe avocados (optional)"
      ],
      instructions: [
        "Slice the yam into about 1-inch chunks and peel off the skin. Rinse thoroughly until the water runs clear.",
        "Place the yam in a pot, add enough water to cover, add salt, and cook on medium heat until soft (test with a fork). Drain the water and set aside.",
        "Prepare the egg sauce: crack the eggs into a bowl, whisk, and set aside. Heat oil in a frying pan over medium heat for 2-3 minutes.",
        "Add chopped onions, tomatoes, red bell pepper, and scotch bonnet. Fry for 4-5 minutes until the oil begins to separate from the sauce. Season with salt, curry powder, and seasoning cube. Stir well.",
        "Optional: add the mackarel, stir to combine, and let simmer for 1-2 minutes.",
        "Pour in whisked eggs, leave for about two minutes to set slightly, then stir gently to scramble into the sauce. Serve and enjoy!"
      ]
    },
    {
      id: 11,
      title: "Croque Nicky",
      author: "Berdien Van Thillo",
      category: "Snacks",
      description: "It is a Croque Monsieur, but instead of the ham you use tuna. I got this recipe from my mother, so in her honour, let's call it Croque Nicky.",
      image: "https://images.unsplash.com/photo-1659589967239-ac53f6f24c75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "2 slices of bread", "A few slices of cheese (cheddar is lovely)", "1 tin of tuna", "1 small tin of tomato paste", "Sauces of your choice"
      ],
      instructions: [
        "Mix the tuna and tomato paste in a bowl.",
        "Spread the tuna mix on a slice of bread.",
        "Add a slice or two of cheese.",
        "Take out your grill or pan and heat up.", "Add any sauce or veggies you might like.", "Place in the grill/pan/oven until nice and melted.", "Serve and enjoy!"
      ]
    },
    {
      id: 12,
      title: "Veggie Vol-Au-Vent",
      author: "Laetitia Verbeck",
      category: "Mains",
      description: "My dish for this week is a quick version of (veggie) vol-au-vent. Vol-au-vent is a classic Belgian dish. It's so popular that one of our most famous influencers has dedicated a whole series around it (merch, sandwich, must-watch-tiktok...). Normally it takes hours to make, but with little kids and a busy job, I go for the quick and easy version.",
      image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "400 gr small veggie/chicken balls", "400 gr (veggie) pulled chicken", "500 gr mushrooms", "1 liter broth", "2 tbsp flour", "Lemon juice", "100 ml cream", "Puff pastry shells", "Potato croquettes"
      ],
      instructions: [
        "Roast the meatballs and the pulled chicken in butter, and set aside.",
        "Cut the mushrooms in 4, roast them in plenty of butter, add the flour and stir until it has a cookie like smell. Don't worry if it's a little clumped, that will disappear.",
        "Add the broth to the mushroom/flour pot and keep adding and stirring until you get a smooth, thick sauce.",
        "Add the meatballs, the pulled chicken and the cream to the sauce.", "Season with pepper, salt, nutmeg and a few drops of lemon juice. Let it simmer for 10 minutes.", "In the meantime, fry the potato croquettes and heat up the pastry puff in the oven.", "Serve the vol-au-vent sauce in the pastry, alongside the potato croquettes, and a good 'kwakske' of mayonnaise on the side."
      ]
    },
    {
      id: 13,
      title: "Classic Beef Borscht",
      author: "Dmytro Shyshko",
      category: "Mains",
      description: "My recipe is a national Ukrainian dish that I eat very often and love very much.",
      image: "https://images.unsplash.com/photo-1648726445011-9fbf3a5ddb90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "1,5 liters water", "175 grams beef on the bone", "2 medium potatoes", "About 1/4 of a small white cabbage", "1 small beetroot", "Half a medium sized carrot", "1 small onion", "1 tbsp tomato paste", "1 garlic clove", "1-2 bay leaves", "1 tbsp vegetable oil", "Salt & black peppercorns (to taste)", "Fresh herbs like dill, parsley, and sour cream (for serving)"
      ],
      instructions: [
        "Place the beef in a pot and cover with cold water. Bring to a boil. Skim off any foam, reduce the heat, cover, and simmer for about 1-1.5 hours, until the beef is tender. Remove the cooked meat, let it cool slightly, cut it into cubes, and return it to the broth.",
        "While the broth is simmering, prepare the dressing. Finely dice the onion and grate the carrots and beetroot. Heat oil in a pan. Sauté the onion until translucent (3-4 min). Add the carrots and fry for another 3-4 minutes.",
        "Add the beetroot. Stir and simmer covered over low heat for 10-15 minutes until soft. Add the tomato paste, mix well, and cook for another 2-3 minutes. Remove from heat.",
        "Add the diced potatoes to the finished broth. Cook for 10 minutes. Add the shredded cabbage and cook for another 5-7 minutes. Stir in the prepared vegetable dressing. Add the bay leaf, peppercorns, and salt to taste. Let everything simmer together on low heat for another 5-7 minutes.",
        "Turn off the heat. Add the finely chopped garlic. Cover the pot and let the borscht steep for at least 30-40 minutes. This is crucial for the flavor to fully develop.", "Serve with a generous dollop of sour cream and a sprinkle of fresh herbs. Enjoy!"
      ]
    },
    {
      id: 14,
      title: "Chicken Vol-Au-Vent",
      author: "Joni Merckaert",
      category: "Mains",
      description: "Feeling inspired by the idea of “fast cooking,” here is another quick way to prepare vol-au-vent. Tip: you can buy a roasted chicken the day before. Trust me, it's much easier (and more enjoyable) to shred the meat when it's cold, rather than hot.",
      image: "https://images.unsplash.com/photo-1762631383471-41fca144ca64?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "1 roasted chicken (or about 550g of other poultry meat)", "300ml chicken stock", "350g minced meat", "Olive oil", "350g mushrooms", "Salt and pepper", "12-16 potato croquettes", "40g butter", "40g flour", "150ml cream", "1 handful of chopped parsley and a slice of lemon"
      ],
      instructions: [
        "Use the meat from a roasted chicken. Shred the meat. Simmer the carcass with the chicken stock to create a flavourful base.",
        "Roll the minced meat into small balls and brown them in a pan with olive oil. Remove from the pan and set aside.",
        "Quarter the mushrooms, sauté them in the same pan, season with salt and pepper, and set aside.",
        "Melt 40 g butter in the mushroom pan. Stir in the flour and cook briefly. Deglaze with the strained chicken stock and sauce from the chicken. Add the meatballs, mushrooms, and shredded chicken. Let simmer on low heat.",
        "Stir in the cream and keep warm. Season to taste.", "Fry the croquettes, and when ready, serve it all!"
      ]
    },
    {
      id: 15,
      title: "Tortilla de Patatas",
      author: "Arnaud Charvin",
      category: "Mains",
      description: "Traditionally, this dish is thick, rich, and a bit dense — but I wanted to make a version that “breathes”, with a soft, soufflé-like texture. The secret? Whipping the egg whites before mixing them in. And I have to say… thanks to my wife and her grandmother, who taught me all the secrets of a perfect tortilla, I've now become a bit of a tortilla master myself! ",
      image: "https://images.unsplash.com/photo-1639669794539-952631b44515?q=80&w=1521&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "6 medium potatoes", "1 large onion (optional but highly recommended)", "6 eggs (separate yolks and whites)", "Olive oil (plenty!)", "Salt and pepper"
      ],
      instructions: [
        "Peel and thinly slice the potatoes. Finely chop or slice the onion.",
        "In a large pan, heat a generous amount of olive oil over medium heat and slowly cook the potatoes and onions until tender (about 20 minutes). They should be soft but not crispy.",
        "Once cooked, transfer the potatoes and onions to a sieve to drain excess oil. Keep a bit of that delicious oil for later. Let them cool for a few minutes.",
        "In a large bowl, whisk the egg yolks with salt, pepper, and (optional) smoked paprika.",
        "In another bowl, beat the egg whites until soft peaks form. This is what will make the tortilla airy and “breathing.”",
        "Fold the potatoes and onions into the yolk mixture, then carefully fold in the whipped whites with a spatula — don’t overmix!",
        "Heat a bit of the reserved olive oil in a non-stick pan over medium heat.",
        "Pour in the mixture and cook for about 5-7 minutes until the bottom is golden and the center starts to set.",
        " Place a large plate on top, flip the tortilla carefully, and cook the other side for another 4-5 minutes.", "Let it rest for a few minutes before slicing. The inside should be moist, fluffy, and full of air bubbles."
      ]
    },
    {
      id: 16,
      title: "Mini Apple Puff Pastry Treats",
      author: "Britt Bierque",
      category: "Desserts",
      description: "My original plan was to make a Tikka Masala as a Beeple chef, but yesterday afternoon I got inspired by a friend of mine!",
      image: "https://plus.unsplash.com/premium_photo-1694425773033-56018d5258a4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "1 sheet of puff pastry", "2-3 apples, chopped into small cubes", "Sugar to taste (I used crystal sugar or kinnekessuiker/cassonade)", "Cinnamon powder", "1 egg yolk", "Butter or olive oil (for baking)"
      ],
      instructions: [
        "In a pan with a little bit of olive oil or butter, sauté the cubed apples.",
        "Add cinnamon and sugar to taste. Let cool slightly",
        "Roll out the puff pastry.",
        "Cut out shapes — Halloween-themed if you like! (I used a cup and knife).",
        "Place a spoonful of apple mix on half the shapes, then cover with matching top shapes.",
        "Seal edges gently with a fork and brush tops with egg yolk.",
        "Bake in a preheated oven at 220°C for +/-10 minutes. Enjoy it cool or warm. Add a little ice cream or whipped cream as a bonus!"
      ]
    },
    {
      id: 17,
      title: "The Pie That Stole My Heart",
      author: "Oleksii Maniatchenko",
      category: "Desserts",
      description: "A delicious, golden love story filled with cozy flavours and sweet nostalgia. One bite of this pie and you'll understand how it completely stole my heart.",
      image: "https://images.unsplash.com/photo-1598113344213-a7e0f4e4cdf2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "8-9 plums (you can use lingonberry or raspberries, 100g)", "3 eggs", "1 banana", "1-2 pears (fresh or baked)", "200g pumpkin (fresh or baked)", "Spices: cinnamon, ginger, nutmeg or masala", "3 tsp tahini (optional)", "1 orange", "1-2 apples, cut into the prepared dough", "A handful of walnuts roasted in a pan", "1/2 teaspoon of baking soda", "1/4 teaspoon of salt", "4-6 dates, pour boiling water over them for 5 minutes", "Any wholemeal flour (I used almond flour + green buckwheat flour, you can add ground flaxseed, sesame seeds, brown rice flour)", "2 tsp ghee butter"
      ],
      instructions: [
        "Zest the orange and squeeze the juice, add baking soda to the juice and blend all the ingredients (except flour and butter) in a blender.",
        "Pour the mixture into a bowl and mix with a bit of flour, add the melted ghee butter. Add more flour until the mixture reaches the consistency of thick sour cream. Pour into a baking tin lined with parchment paper greased with ghee butter.",
        "Top with plums, cut in half, or sprinkle generously with cranberries or raspberries.",
        "Bake at 180 degrees for 40-60 minutes.",
        "A rainbow of flavors is guaranteed!"
      ]
    },
    {
      id: 18,
      title: "Potato Croque",
      author: "Arnaud Verbeck",
      category: "Mains",
      description: "The Symphony of the Potato & The Architecture of the Croque. Today, I didn't just \"cook dinner\". I embarked on a spiritual journey into the heart of the carbohydrates. We are talking about the Holy Trinity of comfort food: The artisanal fry, the structurally perfect Croque, and the Sauce of improvisation. This is not fast food. This is slow art.",
      image: "https://images.unsplash.com/photo-1687573976446-6b3dcaeacae4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients: [
        "It started with the raw material. I didn't go to the supermarket to buy a bag of frozen, soulless sticks. No. I went to a local farmer. I looked these potatoes in the eyes. They were covered in honest mud. They had character.", "Oil for frying", "A pot of boiling water", "Spreadable butter", "Sliced bread", "Sliced good cheese", "Sliced ham", "1 shallot", "Mayonnaise", "Fresh salad"
      ],
      instructions: [
        "I hand-peeled the potatoes with the precision of a diamond cutter. Then, I sliced them. Not too thick, not too thin. Uniformity is key, but the slight imperfections remind us that a human hand was at work here. I rinsed them under cold water to wash away the excess starch—because nobody likes a sticky fry.",
        "Here is where the average chef stops, but a Beeple Chef begins. Blanching. I plunged the raw fries into boiling water. But I didn't just walk away. Oh no. I stood there with my pyrometer like a scientist in a nuclear lab. I waited for the temperature to drop and climb back to exactly 90°C. And then? I held the line. For 10 glorious minutes, I played with the stove dial, micromanaging the flame to keep that water exactly at 90 degrees. Not 89. Not 91. It was a high-stakes game of thermal chicken. This pre-cook ensures the inside is fluffy while the outside prepares for crunch.",
        "After letting the fries rest and cool for 30 minutes (patience is an ingredient!), it was time for the fryer. First Bath: 150°C for 5 minutes. This isn't about color yet; it's about structure. Then, another 30-minute rest. I let them cool down on paper towels, draining the excess fat, letting them contemplate their destiny. The Grand Finale: I cranked the heat to 180°C. I dropped them in one last time. I waited for that specific sound—you know the one. Not a sizzle, but a crisp 'TSSS' whisper that says, 'I am ready.' Golden. Crispy. Perfection.",
        "While the potatoes were resting, I turned my attention to the Croque. This is not just a grilled cheese; it is an architectural marvel. The Rules of Engagement: The Butter: I used spreadable butter on the outside of the bread. Just enough to coat, not enough to drown. And listen closely: NO BAKING BUTTER! We are civilized people. The Coverage: I sliced the cheese and ham with surgical precision. I laid the cheese down so that every single millimeter of bread was covered. No dry corners allowed. The Assembly: Cheese. Ham. Cheese. A double-layer containment strategy to ensure the ham is hugged by molten goodness on both sides. I grilled them until the outside was lightly crispy and the inside was a molten core of lava-like joy.",
        "Panic set in. I opened the fridge: No garlic sauce. A tragedy? No. An opportunity. I took a fresh shallot, minced it into oblivion, and folded it into high-quality mayonnaise. The result? A fresh, biting \"Ui-Mayonaise\" that honestly tastes better than anything out of a bottle.\nThe Result? Picture this: A plate piled high with golden, twice-fried potatoes, a crispy, melting Croque, a side of fresh lettuce (Veldsla) for health, and that homemade shallot-mayo. The Result? Picture this: A plate piled high with golden, twice-fried potatoes, a crispy, melting Croque, a side of fresh lettuce (Veldsla) for health, and that homemade shallot-mayo.",
        "Bon appétit, Beeple Chefs. The bar has been raised."
      ]
    }
  ]);

  const categories = [
    { name: "Snacks", icon: <Cookie className="w-8 h-8" />, color: "bg-amber-500/10 text-amber-500", borderColor: "border-amber-500/20" },
    { name: "Starters", icon: <Salad className="w-8 h-8" />, color: "bg-emerald-500/10 text-emerald-500", borderColor: "border-emerald-500/20" },
    { name: "Mains", icon: <Flame className="w-8 h-8" />, color: "bg-rose-500/10 text-rose-500", borderColor: "border-rose-500/20" },
    { name: "Desserts", icon: <IceCream className="w-8 h-8" />, color: "bg-purple-500/10 text-purple-500", borderColor: "border-purple-500/20" }
  ];

  const filteredRecipes = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return recipes.filter(r => r.title.toLowerCase().includes(q) || r.author.toLowerCase().includes(q));
  }, [searchQuery, recipes]);

  const navigateToCategory = (cat) => { setActiveCategory(cat); setCurrentView('category'); setSearchQuery(''); window.scrollTo(0, 0); };
  const navigateToRecipe = (r) => { setSelectedRecipe(r); setCurrentView('recipe'); window.scrollTo(0, 0); };
  const handleBack = () => {
    if (currentView === 'recipe') setCurrentView(activeCategory ? 'category' : 'dashboard');
    else { setCurrentView('dashboard'); setActiveCategory(null); }
  };

  const renderRecipeCard = (recipe) => (
    <div key={recipe.id} onClick={() => navigateToRecipe(recipe)} className="bg-slate-900 rounded-[2.5rem] p-8 border-2 border-slate-800 shadow-lg hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col">
      {recipe.image && (
        <div className="mb-6 rounded-2xl overflow-hidden h-40 w-full relative bg-slate-800">
          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        </div>
      )}
      <h4 className="text-2xl font-bold text-white mb-8 group-hover:text-emerald-400 leading-tight">{recipe.title}</h4>
      <div className="mt-auto pt-6 border-t border-slate-800/50">
          <span className="text-[10px] font-black text-slate-600 uppercase block">Contributor</span>
          <span className="text-sm font-bold text-slate-300">{recipe.author}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      <header className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-900 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => { setCurrentView('dashboard'); setSearchQuery(''); setActiveCategory(null); }}>
            <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20"><CookingPot className="text-slate-950 w-6 h-6" /></div>
            <h1 className="text-2xl font-black text-white">Beeple Chefs</h1>
          </div>
          <div className="relative flex-1 max-w-sm hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input 
                type="text" 
                placeholder="Search recipes or authors..." 
                className="w-full pl-12 pr-6 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-white outline-none focus:ring-2 focus:ring-emerald-500/20" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12 flex-grow w-full">
        {currentView === 'dashboard' && (
          <div className="animate-in fade-in duration-700">
            {searchQuery ? (
              <div>
                <div className="flex justify-between mb-8">
                    <h2 className="text-3xl font-black text-white">Search Results</h2>
                    <button onClick={() => setSearchQuery('')} className="text-slate-500 flex items-center gap-2"><X className="w-5 h-5" /> Clear</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredRecipes.map(renderRecipeCard)}
                </div>
              </div>
            ) : (
              <>
                <div className="mb-12 w-full">
                    <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
                        Welcome to the Beeple Chefs app! Here you will find a collection of beloved recipes, curated by each and one of us. We share a new recipe every week, so keep coming back to check out the latest recipes!
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {categories.map(cat => (
                    <button key={cat.name} onClick={() => navigateToCategory(cat.name)} className={`p-10 rounded-[2.5rem] bg-slate-900 border-2 ${cat.borderColor} hover:bg-slate-800 transition-all flex flex-col items-center`}>
                      <div className={`p-6 rounded-3xl mb-6 ${cat.color}`}>{cat.icon}</div>
                      <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                      <p className="text-sm text-slate-500 mt-2 font-bold tracking-widest uppercase">
                        {recipes.filter(r => r.category === cat.name).length} recipes
                      </p>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {currentView === 'category' && (
          <div className="animate-in slide-in-from-bottom-4">
            <button onClick={handleBack} className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 mb-10 font-bold group">
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> 
                Back to categories
            </button>
            <h2 className="text-5xl font-black text-white mb-12 border-b border-slate-800 pb-8">{activeCategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Search fix applied here */}
                {filteredRecipes.filter(r => r.category === activeCategory).map(renderRecipeCard)}
            </div>
          </div>
        )}

        {currentView === 'recipe' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 max-w-4xl mx-auto">
            <button onClick={handleBack} className="flex items-center gap-2 text-slate-400 mb-10 font-bold group">
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> 
                Back
            </button>
            <div className="bg-slate-900 rounded-[3rem] border-2 border-slate-800 overflow-hidden">
              <div className="p-12 md:p-16 text-center relative bg-slate-950/50">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">{selectedRecipe.title}</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 italic">"{selectedRecipe.description}"</p>
                <div className="flex justify-center gap-10 text-slate-400 font-bold">
                    <span>By {selectedRecipe.author}</span>
                    <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-emerald-500" />
                        <span>{selectedRecipe.category}</span>
                    </div>
                </div>
              </div>
              <div className="px-12 md:px-20 -mt-8 relative z-10">
                  <div className="w-full h-80 md:h-[400px] rounded-[2.5rem] overflow-hidden border-4 border-slate-900 shadow-2xl bg-slate-800 flex items-center justify-center">
                    <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-full object-cover" />
                  </div>
              </div>
              <div className="p-12 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-4">
                    <h3 className="text-emerald-500 font-black mb-10 uppercase tracking-widest">Ingredients</h3>
                    <ul className="space-y-6">
                        {selectedRecipe.ingredients.map((ing, i) => (
                            <li key={i} className="flex items-start gap-4 text-slate-300">
                                {/* Bullet size standardization fix */}
                                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-[0.6rem] flex-shrink-0" />
                                <span className="text-lg leading-relaxed font-medium">{ing}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-8">
                    <h3 className="text-emerald-500 font-black mb-10 uppercase tracking-widest">Method</h3>
                    <div className="space-y-12">
                        {selectedRecipe.instructions.map((step, i) => (
                            <div key={i} className="flex gap-8">
                                <span className="text-5xl font-black text-emerald-500 select-none">{(i + 1).toString().padStart(2, '0')}</span>
                                <p className="text-slate-300 text-xl font-medium leading-relaxed">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-6xl mx-auto w-full px-8 py-12 border-t border-slate-900 mt-auto">
        <div className="flex items-center justify-center gap-2 text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
          <span>Powered by Beeple</span>
          <span className="text-rose-500 animate-pulse text-sm">❤️</span>
        </div>
      </footer>
    </div>
  );
};

export default App;