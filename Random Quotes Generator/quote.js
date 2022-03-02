var arrayQuotes = [
    {
      'author':'Napoleon Hill',
      'quotes' : 'Whatever the mind of man can conceive and believe, it can achieve.'
    },
    {
      'author':'Albert Einstein',
      'quotes' : 'Strive not to be a success, but rather to be of value.'
    },
    {
      'author':'Robert Frost',
      'quotes' : 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.'
    },
    {
      'author':'Florence Nightingale',
      'quotes' : 'I attribute my success to this: I never gave or took any excuse.'
    },
    {
      'author':'Wayne Gretzky',
      'quotes' : "You miss 100% of the shots you don't take."
    },
    {
      'author':'Amelia Earhart',
      'quotes' : 'The most difficult thing is the decision to act, the rest is merely tenacity. '
    },
    {
      'author':'Babe Ruth',
      'quotes' : 'Every strike brings me closer to the next home run.'
    },
    {
      'author':'Buddha',
      'quotes' : 'The mind is everything. What you think you become.'
    },
    {
      'author':'Socrates',
      'quotes' : 'An unexamined life is not worth living.'
    },
    {
      'author':'Woody Allen',
      'quotes' : 'Eighty percent of success is showing up.'
    },
    {
      'author':'Steve Jobs',
      'quotes' : "Your time is limited, so don't waste it living someone elses life."
    },
    {
      'author':'Vince Lombardi',
      'quotes' : "Winning isn't everything, but wanting to win is. "
  }
]

function randomSelector(array){
    return (Math.floor(Math.random() * array.length))
}

function generateQuote(){
    let randomNumber = randomSelector(arrayQuotes)

    document.getElementById('generateOutput').innerHTML = '" ' + arrayQuotes[randomNumber].quotes + '"';
    document.getElementById('authorOutput').innerHTML = '- ' + arrayQuotes[randomNumber].author ;
}
