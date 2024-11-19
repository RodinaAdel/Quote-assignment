
const arrayOfQuotes = [
    {'author': 'Steve Maraboli', 
     'quote': 'When a new day begins, dare to smile gratefully.'
    },
    {'author': 'Roy T. Bennett,', 
     'quote': 'Start each day with a positive thought and a grateful heart.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Roy T. Bennett,', 
        'quote': 'Be brave to stand for what you believe in even if you stand alone.'
    },
    {'author': 'Oscar Wilde', 
     'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
    },
    {'author': 'Allen Saunders', 
     'quote': 'Life is what happens to us while we are making other plans'
    },
];

function makeQoute(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#outputQuote').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#outputAuthor').textContent = `--${arrayOfQuotes[random].author}`;
    
}