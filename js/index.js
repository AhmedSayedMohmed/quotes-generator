var array = [
    {
        'outher': '― Oscar Wilde',
        'Quote': '“Be yourself; everyone else is already taken.”'
    },
    {
        'outher': '― Marilyn Monroe',
        'Quote': '“Im selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”'
    },
    {
        'outher': '― Frank Zappa',
        'Quote': '“So many books, so little time.”'
    },
    {
        'outher': '― Albert Einstein',
        'Quote': '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”'
    },
    {
        'outher': '― Marcus Tullius Cicero',
        'Quote': '“A room without books is like a body without a soul.”'
    },
    {
        'outher': '― Mae West',
        'Quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {
        'outher': '― Mahatma Gandhi',
        'Quote': '“Be the change that you wish to see in the world.”'
    },
    {
        'outher': '― Robert Frost',
        'Quote': '“In three words I can sum up everything I have learned about life: it goes on.”'
    },
    {
        'outher': '― Mark Twain',
        'Quote': '“If you tell the truth, you do nott have to remember anything.”'
    },
    {
        'outher': '― Elbert Hubbard',
        'Quote': '“A friend is someone who knows all about you and still loves you.”'
    }

];
function generatQuote() {
    var repet = Number.parseInt(Math.random() * array.length );
    document.getElementById('theQuote').innerHTML = `${array[repet].Quote}`;
    document.getElementById('theOuther').innerHTML = `${array[repet].outher}`;

}