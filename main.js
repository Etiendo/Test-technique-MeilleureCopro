class Hoover {

    constructor() {

        this.y = 5;
        this.x = 5;
        this.card = 'N';
        this.angle = 0;
    }

    move(move) {
        switch (move) {
            case "D":
                this.angle = (this.angle - 90 + 360) % 360;
                break;
            case "G":
                this.angle = this.angle + 90 % 360;
                break;
            case "A":
                this.y += Math.round(Math.sin(this.angle)); // arrondi à un nombre entier
                this.x += Math.round(Math.cos(this.angle)); // arrondi à un nombre entier
                break;
            default:
                throw Error("Invalid command: " + move);
        }
    }
}

class Executor {

    // fonction de construction du hoover
    build() {

        // instanciation de la classe Hoover
        this.hoover = new Hoover();

        // création de l'élement DOM hoover
        var p = document.createElement("p");
        p.innerHTML = this.hoover.card;

        var y = this.hoover.y;
        var x = this.hoover.x;

        // initialisation du hoover sur la balise <td id = 5-5>
        document.getElementById(y + '-' + x).appendChild(p);
    }

    order(instructions) {

        // on boucle sur la suite d'instruction rentrée en paramètre
        for (var i in instructions) {

            var order = instructions[i];
            var y = this.hoover.y;
            var x = this.hoover.x;

            // on vide la case de son contenu représentant le hoover
            document.getElementById(y + '-' + x).innerHTML = '';

            // on lance la fonction move() de la classe Hoover qui calcule les nouvelles coordonnées x et y
            this.hoover.move(order);

            // les variables x et y stockent les nouvelles coordonnées
            var y = this.hoover.y;
            var x = this.hoover.x;
            var p = document.createElement("p");
            p.innerHTML = this.hoover.card;

            // on attache l'élement hoover à la balise <td id = y-x>
            document.getElementById(y + '-' + x).appendChild(p);
        }

        alert('The hoover is in position x : ' + this.hoover.x + ', y : ' + this.hoover.y + ' and oriented ' + this.hoover.card);
    }
}

var executor = new Executor();

executor.build();

setTimeout(function () {
    executor.order("DADADADAA");
}, 1000);