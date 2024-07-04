import images from './images';

const menuItems = {
  starter: [
    {
      itemName: "Shawarma",
      imageSrc: images.shawarma,
      description:
        "tender bits of skewered chicken, garlic puree and salad wrapped in pita",
      price: "$22",
    },
    {
      itemName: "Falafel",
      imageSrc: images.falafel,
      description:
        "Fried chickpeas with herbs, blended with parsley, coriander, and cumin seeds",
      price: "$12",
    },
    {
      itemName: "Kebab",
      imageSrc: images.kebab,
      description:
        "Skewers of meat and vegetables such as bell pepper and onion cooked on a grill.",
      price: "$26",
    },
    {
      itemName: "Hummus",
      imageSrc: images.hummus,
      description:
        "dip made from chickpeas, olive oil, lemon juice, garlic, and tahini",
      price: "$25",
    },
    {
      itemName: "Lentil Soup",
      imageSrc: images.soup,
      description:
        "Red or yellow lentils with cumin, garlic, and lemon juice",
      price: "$10",
    },
    {
      itemName: "Burger",
      imageSrc: images.burger,
      description:
        "A Patty of ground beef grilled placed between two halves of a bun with slices of raw onion, tomatoes, lettuce, cheese, mayonnaise",
      price: "$13",
    },
  ],
  salads: [
    {
      itemName: "Tabouleh",
      imageSrc: images.tabbouleh,
      description:
        "Magical combination of bulgur, parsley, mint, onion and tomatoes",
      price: "$10",
    },
    {
      itemName: "Fattoush",
      imageSrc: images.fattoush,
      description:
        "Crispy lettuce, crunchy fried squares of pita, diced tomatoes, cucumbers and onion, garlic, lemon, olive oil and mint make for a refreshing addiction",
      price: "$20",
    },
  ],
  special: [
    {
      itemName: "Dolma",
      imageSrc: images.dolma,
      description:
        "grape leaf wrapper filled with a mixture of fruit, rice, seafood, or minced meat",
      price: "$36",
    },
    {
      itemName: "Maqluba",
      imageSrc: images.maqluba,
      description:
        "Meat, rice, and fried vegetables placed in a pot which is flipped upside down when served",
      price: "$45",
    },
    {
      itemName: "Sumaghiyyeh",
      imageSrc: images.Sumaghiyyeh,
      description:
        "The ground & soakedsumac is mixed with Tahini (sesame seed paste). The mixture is then added to sautéed chopped chard, pieces of slow-stewed beef, and garbanzo beans, seasoned with dill seeds and chili peppers, fried with garlic in olive oil",
      price: "$65",
    },
    {
      itemName: "Musakhan",
      imageSrc: images.musakhan,
      description:
        "Roasted chicken baked with onions, sumac, allspice, saffron, and fried pine nuts served over taboon bread",
      price: "$55",
    },
  ],
  drinks: [
    {
      itemName: "Coffee",
      imageSrc: images.coffee,
      description:
        "served black, without sugar, and often flavored with cardamom",
      price: "$7",
    },
    {
      itemName: "Mint Tea",
      imageSrc: images.tea,
      description:
        "Steeping spearmint and green tea leaves in boiling water",
      price: "$9",
    },
  ],
  dessert: [
    {
      itemName: "Baklava",
      imageSrc: images.baklava,
      description:
        "Buttery filo pastry, chopped nuts, sweet syrup and honey dressing",
      price: "$15",
    },
    {
      itemName: "Kunafah",
      imageSrc: images.kunafah,
      description:
        "delicious cheesecake uses Nabusi cheese, orange blossom/rose water",
      price: "$19",
    },
  ],
};


export default { menuItems };
