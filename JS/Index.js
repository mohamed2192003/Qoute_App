var qoutes = [
    {
        qoute: "“Be yourself; everyone else is already taken.”",
        authour: "--Oscar Wilde"
    },
    {
        qoute: "“So many books, so little time.”",
        authour: "--Frank Zappa"
    },
    {
        qoute: "“You only live once, but if you do it right, once is enough.”",
        authour: "--Mae West"
    },
    {
        qoute: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        authour: "--Mahatma Gandhi"
    },
    {
        qoute: "“Without music, life would be a mistake.”",
        authour: "--Friedrich Nietzsche"
    }
];

function displayQoutes() {
    var randomQoutesIndex = Math.floor(Math.random() * qoutes.length);

    var getQoute = qoutes[randomQoutesIndex].qoute;
    var getAuthour = qoutes[randomQoutesIndex].authour;

    document.getElementById("getQoute").textContent = getQoute;
    document.getElementById("getAuthour").textContent = getAuthour;
}
