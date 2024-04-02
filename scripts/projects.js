
const projects = [
  {
    title: 'Hebrew Calendar',
    imageClass: 'image-9',
    link: 'https://heb-calendar.onrender.com',
    description: 'hebrew\Gregorian calendar including jewish holidays, Shabbat candle lighting & Parashat Shavu\'a. also features annual reminders for hebrew & Gregorian dates',
    techs: ['<i class="fab fa-vuejs fa-3x"></i>', '<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>', '<i class="fab fa-node fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/heb-calendar',
  },
  {
    title: 'Beat Maker',
    imageClass: 'image-10',
    link: 'https://beatmaker.onrender.com',
    description: 'compose your own beat using my beatmaker! with a variety of instruments & ranging tempo. feel free to save compositions you feel proud of',
    techs: ['<i class="fab fa-react fa-3x"></i>', '<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>', '<i class="fab fa-node fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/beatmaker'
  },
  {
    title: 'MedVisor',
    imageClass: 'image-11',
    link: 'https://medvisor.onrender.com',
    description: 'medical organizer which can remind you which meds you need to take, and also gives you information on the medicine and lets you check drug interactions. data is scraped from the ministry of health\'s database. reminder via mail is currently off.',
    techs: ['<i class="fab fa-react fa-3x"></i>', '<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>', '<i class="fab fa-node fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/medvisor'
  },
  {
    title: 'carKnowledge',
    imageClass: 'image-6',
    link: 'https://car-me.netlify.app/',
    description: 'Find complaints, recalls, safety ratings & reviews on your next car. withdrawn from api, you can browse hundreds of cars by maker, model & year of manufacture',
    techs: ['<i class="fab fa-react fa-3x"></i>', '<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/car-me'
  },
  {
    title: 'Covid Tracker',
    imageClass: 'image-4',
    link: 'https://itai-rozen-covid-tracker.netlify.app/',
    description: 'live global covid tracker, provided by real-time api and presented with graphs from external library (charts.io)',
    techs: ['<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/covid-tracker'
  },
  {
    title: 'Mortal Dice Game',
    imageClass: 'image-5',
    link: 'https://itai-rozen-dice-game.netlify.app/',
    description: 'play the toughest dice game ever created with mortal combat II characters. roll dice to reach target score. rolled a double? all turn\'s points are lost and turn is over.',
    techs: ['<i class="fab fa-react fa-3x"></i>', '<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/dice-game'
  },
  {
    title: 'Tesla Mockup',
    imageClass: 'image-1',
    link: "https://tesla-mockup.netlify.app/",
    description: 'A pixel-perfect replica of tesla website\'s model 3 page',
    techs: ['<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/tesla-mockup'
  },
  {
    title: 'Apple Mockup',
    imageClass: 'image-2',
    link: 'https://apple-mockup.netlify.app/',
    description: 'A pixel-perfect replica of apple homepage',
    techs: ['<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/apple-mockup'
  },
  {
    title: 'Amazon Mockup',
    imageClass: 'image-12',
    link: 'https://mockup-amazon.netlify.app/',
    description: 'A pixel-perfect replica of amazon product page',
    techs: ['<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/Amazon-mockup'
  },
  {
    title: '2d Minecraft',
    imageClass: 'image-3',
    link: 'https://itai-rozen-minecraft.netlify.app/',
    description: 'mine & build on a randomly-generated world of 2d minecraft',
    techs: ['<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/mineCraft'
  },
  {
    title: 'Sudoku',
    imageClass: 'image-7',
    link: 'https://itai-rozen.github.io/sudoku/',
    description: 'randomly generated sudoku, with 3 difficulty levels for all of you brainiacs',
    techs: ['<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/sudoku'
  },
  {
    title: 'Minesweeper',
    imageClass: 'image-8',
    link: 'https://itai-rozen.github.io/minesweeper/',
    description: 'randomly generated minesweeper, with 3 difficulty levels for all of you brainiacs',
    techs: ['<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-html5 fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/minesweeper'
  },
  {
    title: 'Princess memory game',
    imageClass: 'image-13',
    link: 'https://main--rozen-memory-game.netlify.app/',
    description: 'small & simple memory card game with all your favorite disney princesses. Built using <strong>React Native</strong> over <strong>TypeScript</strong>',
    techs: ['<i class="fab fa-react fa-3x"></i>','<i class="fab fa-js-square fa-3x"></i>', '<i class="fab fa-css3-alt fa-3x"></i>'],
    repo: 'https://github.com/itai-rozen/memory-game'
  },
]

export default projects