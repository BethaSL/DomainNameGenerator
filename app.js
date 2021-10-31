let pronoun = ['the','our'];
let adj = ['great', 'big'];
let noun = ['jogger','racoon'];
let ext = ['.com', '.net', '.us', '.io']
let domain = [];

for (i=0; i<pronoun.length; i++){
    for (j=0; j<adj.length; j++){
        for (k=0; k<noun.length; k++){
            for (h=0; h<ext.length; h++){
                domain= pronoun[i] + adj[j] + noun[k] + ext[h];
                console.log(domain)
            }
        }
    }  
}

