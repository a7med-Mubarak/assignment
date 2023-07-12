const arrayOfQuotes = [
    {'one': 'Oscar Wilde', 
     'two': 'Be yourself; everyone else is already taken.'
    },
    {'one': ' Marilyn Monroe', 
     'two': 'Iam selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.'
    },
    {'one': 'Albert Einstein', 
     'two': 'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.'
    },
    {'one': ' Steve Jobs', 
     'two': 'Here s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They are not fond of rules. And they have no respect for the status quo. You can quoe them, disagree with them, glorify or vilify them. About the only thing you can t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do. .'
    },
    {'one': ' Autumn Leaves', 
     'two': ' It is better to be hated for what you are than to be loved for what you are not. Andre Gide.'
    },
    {'one': ' H. Jackson Brown Jr., P.S. I Love You', 
     'two': 'Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.'
    },
   {'one': '  Mahatma Gandhi', 
     'two': 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    }, 
];

function test(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#POutPut').textContent = `\"${arrayOfQuotes[random].two}\"`;
    document.querySelector('#NameOutPut').textContent = `--${arrayOfQuotes[random].one}`;
    
}
