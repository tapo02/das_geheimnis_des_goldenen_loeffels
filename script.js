// Spielstatus
let gameState = {
    currentInteraction: 1,
    points: 0,
    discoveredWords: []
};

    
// Phase 1: Vokabel (& Interaktionen) definieren (--> nicht mehr anfassen: es funktioniert so!)
const vocab = [
    {
        word: "Kasten",
        meaning: "Schrank",
        example: "Ich habe all meine Winterjacken im Kasten verstaut.",
        linguisticMap: "images/13_1c_Schrank.jpg",
        sourceMap: "https://www.atlas-alltagssprache.de/r13-f1c/?child=runde",
        interaction: 1,
        storyText: "<p>Nach einer holprigen Fahrt mit dem Bus bist du endlich im Rathaus der Stadt angekommen. Gegenüber der Eingangstür siehst du eine alte Dame sitzen, die, gerade noch in ihre Arbeit vertieft, gehört hat, wie du das Haus betrittst und zu dir aufsieht. Du trittst an sie heran:</p><p>„Entschuldigen Sie, ich bin auf der Suche nach Hinweisen zu einem alten Zettel, den ich letztens zufällig gefunden habe. Ich habe darauf den Stadtstempel von Hohenberg gefunden, deshalb dachte ich, Sie könnten mir eventuell weiterhelfen.“</p><p>Du hältst ihr den Zettel mit dem Stempel hin.</p><p>„Hm, lassen Sie mal sehen.“ Die Dame nimmt den Zettel in die Hand.</p><p>„Ja, hier steht eindeutig ‚Hohenberg‘, aber diesen Stempel habe ich noch nie gesehen. Vielleicht handelt es sich ja um einen alten Stadtstempel. Schauen Sie am besten mal in den alten Stadtakten nach. Viele gibt es zwar nicht mehr, aber vielleicht werden Sie ja trotzdem fündig. Sie befinden sich dort vorne im grünen Kasten, ganz hinten bei der Wand.“</p><p>Du gehst in die Richtung, in die die Dame gedeutet hat. Dort siehst du zwei grüne Gegenstände: eine grüne Truhe und einen grünen Schrank.</p>",
        storyEnd: "<p>Die Dame sagte ja, dass sich die Akten im ‚Kasten‘ befinden. Wo schaust du nach?</p>",
        choices: [
            {
                text: "<p>Wahrscheinlich meint sie die grüne Truhe – das sieht für mich nach einem ‚Kasten‘ aus.</p>",
                isCorrect: false,
                reaction: "<p>Du hebst den Deckel der Truhe und wirbelst eine kleine Staubwolke auf. Alte Ordner? Fehlanzeige. Nur ein paar vertrocknete Putzlappen und eine alte Weihnachtsgirlande.</p><p>Die Stimme der Dame ertönt von hinten:</p><p>„Mein Gott, in die Kiste haben wir seit den 80ern nicht mehr hineingeschaut. Wenn ich ‚Kasten‘ sage, dann mein ich natürlich den Schrank. Was soll ich denn sonst sagen? ‘Schrank’? Das ist was für die Möbelhaus-Kataloge!“</p><p>Daraufhin öffnest du die Tür des grünen Schranks – oder besser gesagt: Kastens – und findest ein kleines Sammelsurium alter Akten, feinsäuberlich beschriftet in blassgrauer Handschrift. Eine davon trägt das Wappen der Stadt Hohenberg – und darunter ein kleines Siegel mit einem stilisierten Löffel.</p><p>Du drehst dich um, aber die alte Dame ist bereits wieder in ihre Unterlagen vertieft.</p><p>Du nimmst die Akte vorsichtig heraus und beginnst zu lesen.</p>"
            },
            {
                text: "<p>Sie wird wohl den grünen Schrank gemeint haben – das ist hier sicher ein ‚Kasten‘.</p>",
                isCorrect: true,
                reaction: "<p>Du öffnest die Tür des grünen Schranks – oder besser gesagt: Kastens – und findest ein kleines Sammelsurium alter Akten, feinsäuberlich beschriftet in blassgrauer Handschrift. Eine davon trägt das Wappen der Stadt Hohenberg – und darunter ein kleines Siegel mit einem stilisierten Löffel.</p><p>Du drehst dich um, aber die alte Dame ist bereits wieder in ihre Unterlagen vertieft.</p><p>Du nimmst die Akte vorsichtig heraus und beginnst zu lesen.</p>"
            }
        ]
    }
    ,
    {
        word: "Bim",
        meaning: "Straßenbahn",
        example: "Die Bim fährt über die Schienen auf der Straße von A nach B.",
        linguisticMap: "images/12_6f_Strassenbahn.jpg",
        sourceMap: "https://www.atlas-alltagssprache.de/r12-f6f/?child=runde",
        interaction: 2,
        storyText: "<p>Zwischen einer Notiz über eine abgesagte Gemeinderatssitzung und einem vergilbten Stadtplan findest du ein loses Blatt, handbeschrieben mit einer ungewöhnlich ordentlichen Schrift:</p><p>„Erster Vermerk: Löffelzeichen erstmals aufgetaucht bei der Renovierung der Pfarrkirche St. Jakob in Grauenstein – 1962. Zugang über Sakristei, Untergeschoss, dann rechter Flur. Verbleib unklar.“</p><p>Darunter in anderer Handschrift:</p><p>„Nachfragen bei Familie Moser. Tochter soll noch etwas wissen.“</p><p>Du schließt die Akte wieder und gehst zurück zum Schreibtisch der Dame.</p><p>„Entschuldigen Sie, wissen Sie zufällig, wie ich nach Grauenstein komme? Ich glaube, dort gibt es eine Spur.“</p><p>Die Dame schaut kurz auf.</p><p>„Grauenstein? Da würd ich die Bim empfehlen. Dauert etwa dreißig Minuten, dann sind Sie dort.“</p><p>Du runzelst leicht die Stirn. „Die… Bim?“</p><p>Sie lächelt flüchtig, als hätte sie gar nicht bemerkt, dass dir das Wort fremd ist, und beugt sich gleich wieder über ihre Papiere.</p>",
        storyEnd: "<p>Du bleibst noch einen Moment stehen, grübelnd.</p>",
        choices: [
            {
                text: "<p>‚Bim‘… das klingt wie ‚bimmeln‘. Vielleicht meint sie damit eine Fahrradklingel? Dann müsste ich wohl mit dem Rad los.</p>",
                isCorrect: false,
                reaction: "<p>„Entschuldigen Sie noch mal ganz kurz, wie komm ich denn hier am besten an ein Fahrrad heran?“</p><p>Sie hebt die Augenbrauen und lächelt schief.</p><p>„Fahrrad? Sie sind wohl ein ganz ein Sportlicher, ha? Nein, also das Rad würd ich Ihnen wirklich nicht empfehlen, um damit nach Grauenstein zu fahren. Die Straßen wurden schon seit Jahrzehnten nicht mehr präpariert. Und es geht fast die ganze Strecke bergauf. Glauben Sie mir: Nehmen Sie die Bim – pardon, die Straßenbahn. Die bringt Sie wesentlich entspannter ans Ziel.“</p><p>„Ah, das ist also eine ‚Bim‘! Wo bekomme ich denn am besten ein Ticket her?“</p><p>„Normalerweise gibt’s die direkt beim Automaten bei der Haltestelle, aber der Automat ist schon seit Wochen kaputt. Seither gibt’s keine Möglichkeit mehr, die Fahrscheine direkt hier im Ort zu kaufen.“</p>"
            },
            {
                text: "<p>Ich hab vorhin Schienen auf der Straße gesehen… und ‚bimmeln‘ tun Straßenbahnen ja auch. Vielleicht ist mit ‚Bim‘ einfach die Straßenbahn gemeint?</p>",
                isCorrect: true,
                reaction: "<p>„Entschuldigen Sie nochmal ganz kurz – wo krieg ich denn am besten ein Ticket für die Straßenbahn her?“</p><p>„Normalerweise gibt’s die direkt beim Automaten bei der Haltestelle, aber der Automat ist schon seit Wochen kaputt. Seither gibt’s keine Möglichkeit mehr, die Fahrscheine direkt hier im Ort zu kaufen“</p>"
            }
        ]

    }, 
    {
        word: "Beisl",
        meaning: "Kneipe, traditionelles, gemütliches österreichisches Gasthaus, das oft typische Gerichte und Getränke zu moderaten Preisen anbietet",
        example: "Am Abend trifft sich der Stammtisch oft im Beisl, um bei einem Glas Bier die Neuigkeiten zu besprechen und ein traditionelles Wiener Schnitzel zu genießen.",
        linguisticMap: "images/4_7_Kneipe.jpg",
        sourceMap: "https://www.atlas-alltagssprache.de/runde-4/f07/",
        interaction: 3,
        storyText: "<p>Enttäuscht drehst du dich um und machst dich auf den Weg aus dem Rathaus hinaus. Da hörst du, wie sich die Dame räuspert. Du drehst dich um und siehst, wie dir die Dame deutet, dass du nochmal kurz zu ihr zurückkommen sollst. Als du vor ihr stehst, beugt sie sich zu dir vor und flüstert fast verschwörerisch: „Aber wenn’s dringend ist, dann schauen Sie am besten mal beim Sepp im Beisl vorbei. Gleich da vorne an der Ecke. Der hat meistens noch ein paar Fahrscheine übrig. Und übrigens auch super Essen.“</p><p>Du grinst, bedankst dich und gehst aus dem Rathaus raus.</p><p>Auf der Straße bleibst du kurz stehen. In deinem Kopf klingt das letzte Wort der Rathaus­dame nach: „Beisl.“</p><p>Du runzelst die Stirn.</p><p>Ein Beisl?</p><p>Du wirfst einen Blick die Straße entlang. An der Ecke siehst du zwei Geschäfte: Einen Kiosk und eine Kneipe.</p>",
        storyEnd: "<p>Wo gehst du hinein?</p>",
        choices: [
            {
                text: "<p>Das klingt wie ein Laden oder Kiosk. Wenn dort Tickets verkauft werden, wird es wohl so etwas wie ein kleiner Zeitungsladen sein.</p>",
                isCorrect: false,
                reaction: "<p>Du öffnest die quietschende Glastür des kleinen Kiosks. Drinnen riecht es nach Zeitungspapier. Hinter dem Tresen sitzt ein junger Mann mit schulterlangem Haar, der gerade Kreuzworträtsel löst. „Guten Tag“, sagst du vorsichtig, „verkaufen Sie auch Straßenbahntickets?“ Der Mann schaut kurz auf, blinzelt und schüttelt dann den Kopf. „Nein, tut mir leid. Wir hatten mal welche, aber seit dem neuen Vertrag oder was auch immer dürfen wir hier nix mehr verkaufen. Fahrscheine kriegen Sie, äh…“ Er zuckt mit den Schultern. „…wahrscheinlich irgendwo anders.“ „Wissen Sie, wo genau?“ „Nein“, sagt er knapp. „Ich fahr nie mit der Bim. Ich geh lieber zu Fuß.“</p><p>Du bedankst dich, gehst wieder hinaus und schließt die Tür hinter dir. Draußen blinzelt die Sonne durch ein schiefes Werbeschild. Du bleibst stehen und atmest tief durch.</p><p>Während du dich noch fragst, wie du nun an ein Ticket kommen sollst, fällt dein Blick auf das Nebenhaus. In der Tür pickt ein handgeschriebener Zettel: „Bim-Fahrscheine auf Nachfrage (solang der Vorrat reicht).“ Darunter: „Tagesmenü: Erdäpfelgulasch mit reschem Gebäck“.</p><p>Du grinst. Beisl, hat die Dame gesagt. Super Essen.</p><p>Ein zufriedenes Grinsen huscht dir übers Gesicht. Dann ist ein ‚Beisl‘ wohl wirklich eine Art Kneipe.</p>",
            },
            {
                text: "<p>Wenn sie sagt, er hat auch gutes Essen, dann ist das bestimmt so etwas wie eine kleine Kneipe oder ein Wirtshaus.</p>",
                isCorrect: true,
                reaction: "<p>Während du mit der Hand schon zur Klinke der schweren Holztür der Kneipe greifst, siehst du einen handgeschriebenen Zettel, der innen auf die Tür gepickt wurde: „Bim-Fahrscheine auf Nachfrage (solang der Vorrat reicht).“ Darunter: „Tagesmenü: Erdäpfelgulasch mit Gebäck“.</p><p>Du grinst. Beisl, hat die Dame gesagt. Super Essen.</p><p>Ein zufriedenes Grinsen huscht dir übers Gesicht. Dann ist ein ‚Beisl‘ wohl wirklich eine Art Kneipe.</p>",
            }
        ]
    },
    {
        word: "Erdapfel",
        meaning: "Kartoffel",
        example: "Die Erdäpfel für die Pommes sollten vor dem Frittieren gut gewaschen und geschält werden.",
        linguisticMap: "images/9_1e_Kartoffel.jpg",
        sourceMap: "https://www.atlas-alltagssprache.de/kartoffeln/?child=runde",
        interaction: 4,
        storyText: "<p>Du öffnest die schwere Holztür des Beisls. Sofort schlägt dir der Duft von Hausmannskost und Bier entgegen. Drinnen ist es dämmrig, aber gemütlich. Ein paar ältere Herren spielen Karten am Fenster, ein Radio dudelt leise im Hintergrund.</p><p>Hinter dem Tresen steht ein kräftiger Mann mit graumelierten Haaren und einem verschmitzten Lächeln.</p><p>„Guten Tag! Sepp, nehme ich an?“</p><p>Er wischt sich die Hände an einem Küchentuch ab, das an seinem Gürtel hängt, und nickt. „Der bin ich. Und was kann ich für dich tun?“</p><p>„Mir wurde gesagt, Sie hätten vielleicht noch ein Straßenbahnticket?“</p><p>Ein breites Grinsen breitet sich auf seinem Gesicht aus. „Aha. Die Erna vom Rathaus, was? Typisch, dass sie wieder Leute schickt.“ Er schüttelt amüsiert den Kopf. „Ja, hab ich noch ein paar. Aber ich geb sie nur noch an Gäste raus – sonst wär ich die in zwei Tagen los gewesen. Also: erst was bestellen, dann gibt’s den Fahrschein. Was meinst du?“</p><p>Er zwinkert, lehnt sich entspannt auf den Tresen und deutet mit dem Daumen auf die kleine Kreidetafel hinter sich.</p>",
        storyEnd: "<p>„Ich hab aber nur noch das Erdäpfelgulasch, alles andere ist aus. Also?“</p>",
        choices: [
            {
                text: "<p>Oh, ich vertrage leider keinen Fruchtzucker. Kann ich nicht doch was anderes haben?</p>",
                isCorrect: false,
                reaction: "<p>Sepp starrt dich für einen Moment an, dann zieht er eine Augenbraue hoch. „Also was anderes kriegst du nicht“, knurrt er, während er sich das Küchentuch tiefer in den Gürtel schiebt. „Wie ich gesagt hab: Alles andere ist aus – ich hab echt nix anderes mehr im Angebot. Und abgesehen davon... Fruchtzucker?“ Er lacht leise in sich hinein, schüttelt den Kopf und geht zur Schublade unter der Theke.</p><p>„Also, hör mal zu: Ein Erdapfel ist eine Kartoffel. Hat nix mit ’nem Apfel zu tun – schon gar nicht mit einer Frucht. Das Gulasch ist herzhaft, deftig, und garantiert obstfrei.“</p><p>Er holt das Ticket hervor und legt es vor dich auf den Tresen.</p><p>„Aber weißt du was? Ich hab heut gute Laune. Du kriegst den Fahrschein auch so. Aber nur, weil du so nett gefragt hast – und weil ich Lust hab, später jemandem davon zu erzählen.“</p><p>Er zwinkert und schiebt dir das Ticket zu.</p>",
            },
            {
                text: "<p>Oh, ich vertrage leider keine Stärke. Kann ich nicht doch was anderes haben?</p>",
                isCorrect: true,
                reaction: "<p>Sepp starrt dich für einen Moment an, dann zieht er eine Augenbraue hoch. „Also was anderes kriegst du nicht“, knurrt er, während er sich das Küchentuch tiefer in den Gürtel schiebt. „Wie ich gesagt hab: Alles andere ist aus – ich hab echt nix anderes mehr im Angebot. Und abgesehen davon... keine Stärke? Na, dann wird das mit dem Erdäpfelgulasch natürlich problematisch.“</p><p>Er brummt.</p><p>„‚Stärkefreie Erdäpfel‘ hab ich keine auf der Karte. Falls es sowas überhaupt schon gibt. Bei mir auf jeden Fall nicht.“</p><p>Er öffnet eine kleine Holzlade unter der Kasse, kramt kurz darin herum und zieht ein einzelnes, leicht zerknittertes Ticket hervor.</p><p>„Ich wollt eigentlich nix mehr rausgeben, ohne dass wer was bestellt. Aber gut – heute ist eh nicht viel los.“</p><p>Er legt das Ticket auf den Tresen.</p><p>„Hier. Und wenn du irgendwann wieder mal in der Gegend bist, dann kommst zurück und isst auch was, ja?“</p>",
            }
        ]
    },
    {
        word: "aus sein",
        meaning: "nicht mehr vorhanden sein, alle sein",
        example: "Wir haben leider kein Eis mehr, es ist aus.",
        linguisticMap: "images/5_7a_alle.jpg",
        sourceMap: "https://www.atlas-alltagssprache.de/runde-5/f07a-c/",
        interaction: 4
    },
    {
        word: "Häferl",
        meaning: "Tasse",
        example: "In der Früh trinke ich immer ein Häferl Tee zu meinem Frühstück.",
        linguisticMap: "images/8_3h_Tasse.jpg",
        sourceMap: "https://www.atlas-alltagssprache.de/r8-f3h-2/?child=runde",
        interaction: 5,
        storyText: "<p>Nach deiner Ankunft in Grauenstein steigst du an einem kleinen, fast verschlafenen Platz aus der Bim. Der nächste Schritt ist klar: Familie Moser finden.</p><p>Du blickst dich um. Der schmale Weg vor dir führt direkt zu einer Bäckerei, aus der der Duft von frisch gebackenem Brot dringt. Du beschließt, einen kleinen Zwischenstopp einzulegen und die Bäckerei zu betreten. In so einem kleinen Ort kennt jeder jeden. Vielleicht können sie dir dort ja sagen, wo du die Mosers findest.</p><p>Eine kleine Glocke über der Tür klingelt leise, als du eintrittst. Der Duft nach frischem Brot und süßen Kuchen umfängt dich sofort. Hinter einer langen Theke, die bis zum Rand mit Brot und Kuchenstücken gefüllt ist, steht eine ältere Frau mit freundlichen Augen und einer makellosen weißen Schürze. Ihre grauen Haare sind zu einem festen Knoten gebunden.</p><p>„Guten Tag!“, sagt sie mit einer warmen Stimme, während sie ein Blech mit noch warmen Nussschnecken in die Auslage schiebt. „Was darf’s denn sein?“</p><p>„Nur ein Kaffee bitte, schwarz.“</p><p>„Einen Moment, der ist gleich fertig“, erwidert die Dame lächelnd und dreht die Kaffeemaschine auf.</p><p>„Im Häferl?“ Sie deutet in die Richtung, in der sich die gestapelten Tassen und To-Go-Becher befinden.</p>",
        storyEnd: "<p>Willst du deinen Kaffee im Häferl haben?</p>",
        choices: [
            {
                text: "<p>Da ich ihn mitnehmen möchte, ist das genau das richtige.</p>",
                isCorrect: false,
                reaction: "<p>Du überlegst kurz und nickst. „Ich sollte schnell weiter zu den Mosers, bevor es noch dunkel wird. Da passt ein Häferl ganz gut, das kann ich unterwegs dann wegwerfen.“</p><p>Die Dame schüttelt leicht den Kopf.</p><p>„Unsere schönen Häferl sind doch nicht zum Wegwerfen gedacht. Da, schauen Sie.“</p><p>Sie nimmt eine der Tassen vom Stapel und hält dir die Unterseite hin. Dort erkennst du einen feinen, blauen Stempel.</p><p>„Echtes Porzellan. Viel zu teuer dafür. Zum Mitnehmen ist das also nichts.“</p><p>Sie stellt das Häferl mit der rechten Hand wieder zurück auf den Stapel, schnappt sich gleichzeitig mit der linken Hand den To-Go-Becher vom Nebenstapel und stellt ihn unter die Kaffeemaschine.</p><p>„Moser, sagten Sie? Da haben Sie ja eh nicht mehr viel Weg vor sich“, meint die Dame, während der Kaffee langsam in den To-Go-Becher rinnt.</p><p>„Gehen Sie einfach hier die Hauptgasse entlang, bis zur kleinen Kapelle – das ist keine fünf Minuten von hier. Gleich dahinter beginnt ein schmaler Weg, ein bisschen holprig, aber gut zu erkennen. Da steht schon das grüne Haus, direkt am Waldrand. Das sind die Mosers.“</p><p>Sie setzt den Deckel auf den Becher und reicht ihn dir über die Theke.</p>"
            },
            {
                text: "<p>Da ich ihn mitnehmen möchte, ist das eher unpraktisch.</p>",
                isCorrect: true,
                reaction: "<p>Du überlegst kurz und schüttelst den Kopf. „Ich sollte schnell weiter zu den Mosers, bevor es noch dunkel wird. Da ist ein Häferl eher unpraktisch.“</p><p>Die Dame nickt. „Ja, das stimmt natürlich. Die sind ja auch nicht dafür gedacht.“</p><p>Sie nimmt einen der To-Go-Becher vom Stapel und stellt ihn unter die Kaffeemaschine.</p><p>„Moser, sagten Sie? Da haben Sie ja eh nicht mehr viel Weg vor sich“, meint die Dame, während der Kaffee langsam in den To-Go-Becher rinnt.</p><p>„Gehen Sie einfach hier die Hauptgasse entlang, bis zur kleinen Kapelle – das ist keine fünf Minuten von hier. Gleich dahinter beginnt ein schmaler Weg, ein bisschen holprig, aber gut zu erkennen. Da steht schon das grüne Haus, direkt am Waldrand. Das sind die Mosers.“</p><p>Sie setzt den Deckel auf den Becher und reicht ihn dir über die Theke.</p>"
            }
        ]
    },
    {
        word: "Polster",
        meaning: "Kissen",
        example: "Der kleine Junge kuschelte sich mit einem weichen Polster und seinem Lieblingsbuch in die Leseecke.",
        linguisticMap: "images/10_02c_Kissen.jpg",
        sourceMap: "https://www.atlas-alltagssprache.de/r10-f2c/?child=runde",
        interaction: 6,
        storyText: "<p>Nachdem du die Bäckerei hinter dir gelassen hast, folgst du dem Weg, den dir die Verkäuferin beschrieben hat. Nur wenige Minuten später stehst du vor dem Haus der Mosers. Du gehst die Treppen der Terrasse hinauf und klopfst an die schwere Holztür. Sie öffnet sich nur einen Spalt, und ein paar graue Haare blitzen hindurch.</p><p>Eine knarrende Stimme fragt von drinnen: „Was wollen Sie?“</p><p>Du erklärst dein Anliegen: „Ich bin auf der Suche nach einem Symbol, auf das ich gestoßen bin. Es handelt sich um einen goldenen Löffel. Ich habe gehört, Sie könnten mir eventuell weiterhelfen.“</p><p>Die Tür öffnet sich ein Stück weiter, bis das ganze Gesicht einer älteren Dame zu sehen ist. Sie schüttelt langsam den Kopf. „Ein goldener Löffel, sagen Sie? Das sagt mir gar nichts“, doch ihr Blick huscht kurz über deine Schulter, als wollte sie sichergehen, dass niemand in der Nähe lauscht. </p><p>Du bemerkst, wie ihre Augen kurz an einer Stelle hängenbleiben.</p><p>„Ach, im Alter wird man wirklich immer vergesslicher“, murmelt sie. „Ich wollte den Polster dort vorne schon vorhin mit hineinnehmen, um ihn zu waschen, aber das hab ich komplett vergessen. Würden Sie so freundlich sein und mir ihn reichen?“</p><p>Als du dich umdrehst und ihrem Blick folgst, siehst du an der Stelle eine Terrassensitzbank stehen. Auf ihr befinden sich ein besticktes Tuch und ein Kissen.</p>",
        storyEnd: "Welchen Gegenstand sollst du der Frau reichen?",
        choices: [
            {
                text: "Die Frau möchte das bestickte Tuch haben.",
                isCorrect: false,
                reaction: "<p>Du gehst zur Bank und nimmst das Tuch in die Hand, um es der Frau zu geben. Du streckst es ihr entgegen, doch sie schüttelt den Kopf.</p><p>„Nein, das Tuch habe ich schon letzte Woche gewaschen. Ich meinte den Polster dahinten, das Kissen da.“</p><p>Du legst das Tuch wieder zurück und nimmst stattdessen das Kissen in die Hand. Als du es hochnimmst, fällt dir ganz unten ein aufgestickter goldener Löffel auf.</p><p>Das Symbol, nach dem du suchst!</p><p>Du siehst dir die Stickerei genauer an. Unter dem Löffel erkennst du noch eine weitere kleine Schrift: „Logensitz Pfarrkirche St. Jakob, Grauenstein“.</p><p>Aha, die Pfarrkirche schon wieder. Die kam ja auch bereits in der Notiz im Rathaus vor.</p><p>Als du aufblickst, der alten Dame das Kissen reichst und dich verabschiedest, siehst du ein wissendes Lächeln in ihrem Gesicht.</p>"
            },
            {
                text: "Die Frau möchte das Kissen haben.",
                isCorrect: true,
                reaction: "<p>Du gehst zur Bank und nimmst das Kissen in die Hand. Als du es hochnimmst, fällt dir ganz unten ein aufgestickter goldener Löffel auf.</p><p>Das Symbol, nach dem du suchst!</p><p>Du siehst dir die Stickerei genauer an. Unter dem Löffel erkennst du noch eine weitere kleine Schrift: „Logensitz Pfarrkirche St. Jakob, Grauenstein“.</p><p>Aha, die Pfarrkirche schon wieder. Die kam ja auch bereits in der Notiz im Rathaus vor.</p><p>Als du aufblickst, der alten Dame das Kissen reichst und dich verabschiedest, siehst du ein wissendes Lächeln in ihrem Gesicht.</p>"
            }
        ]
    }
// weitere Vokabel hinzufügen
];

// to-Introduction

function toIntroduction() {
    const toIntroductionBtn = document.getElementById('to-introduction-btn')
    const instructions = document.getElementById('instructions')
    const introduction = document.getElementById('introduction')
    instructions.style.display = 'none';
    introduction.style.display = 'block';

    // Scroll to top of the page
     window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Spiel starten (Button)
 document.addEventListener('DOMContentLoaded', (event) => {
    // Get references to the elements
    const startGameBtn = document.getElementById('start-game-btn');
    const phase1 = document.getElementById('phase-1');
    const introduction = document.getElementById('introduction');
    const pointsDisplay = document.getElementById('points-display'); 
    const dictBtn = document.getElementById('dictionary-btn')

    // Scroll to top of the page
     window.scrollTo({ top: 0, behavior: 'smooth' });

    // Add an event listener to the button
    startGameBtn.addEventListener('click', () => {
        // Hide introduction
        if (introduction) {
            introduction.style.display = 'none';
        }

        // Display dict and points when button is clicked
        if (dictBtn) {
            dictBtn.style.display = 'block';
        }
        if (pointsDisplay) {
            pointsDisplay.style.display = 'block'; // Or 'flex', 'grid' – whatever suits its layout
        }

        // (erste) Interaktion laden
        loadInteraction()

        // Scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}); 


// Funktion zum Laden der Interaktionen
function loadInteraction() {
    const current = vocab.find(item => item.interaction == gameState.currentInteraction);
    if (!current) return;

    // Fülle die Elemente
    document.getElementById("interaction-headline").textContent = `Interaktion ${current.interaction}`;
    document.getElementById("story-text").innerHTML = current.storyText;
    document.getElementById("story-end").innerHTML = current.storyEnd;

    // Interaktion einblenden
    document.getElementById('phase-1').style.display = 'block';
    document.getElementById('interaction').style.display = 'block';
    document.getElementById('reaction').style.display = 'none';
    document.getElementById('new-word-overview').style.display = 'none';

    // Buttons erzeugen
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // vorher leeren

    current.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.innerHTML = choice.text;

        btn.onclick = () => {
            // Punkte erhöhen und Rückmeldung im points-reaction div anzeigen
            const pointsReactionElement = document.getElementById('points-reaction');

            if (choice.isCorrect) {
                gameState.points += 1;

                // Feedback-Nachricht im Punkte-Div setzen
                pointsReactionElement.textContent = "Du hast in der Situation passend gehandelt und die Bedeutung richtig erkannt. Ein Punkt für dich!";
                pointsReactionElement.style.color = "#49d449";
                
                // Anzeige aktualisieren:
                const pointsDisplay = document.getElementById("points-display");
                if (pointsDisplay) {
                    pointsDisplay.textContent = `Punkte: ${gameState.points}`;
                }

            } else {
                // Feedback für falsche Antwort
                pointsReactionElement.textContent = "Du konntest dieses Mal leider keinen Punkt sammeln.";
                pointsReactionElement.style.color = "#ef6868";
            }

            // Reaktion anzeigen
            document.getElementById("reaction-text").innerHTML = choice.reaction;
            document.getElementById("reaction").style.display = "block";
            document.getElementById("interaction").style.display = "none";

            // Nach oben scrollen
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

            choicesContainer.appendChild(btn);
        });
    }


document.getElementById('next').addEventListener('click', () => {
    const matchingVocabs = vocab.filter(v => v.interaction === gameState.currentInteraction);

    if (matchingVocabs.length === 0) return;

    let currentModalIndex = 0;

    const modal = document.getElementById('new-word-overview');
    const nextBtn = document.getElementById('next-modal');
    const finalBtn = document.getElementById('add-word-to-dict');

    // Funktion zum Befüllen und Anzeigen des Modals
    const showModal = (index) => {
        const currentVocab = matchingVocabs[index];

        document.getElementById('target-word').textContent = currentVocab.word;
        document.getElementById('explanation').innerHTML = `Bedeutung: ${currentVocab.meaning}`;
        document.getElementById('example-sentence').innerHTML = `<p>Beispielsatz: ${currentVocab.example}</p>`;
        document.getElementById('figcaption').innerHTML = `Quelle: <a href="${currentVocab.sourceMap}" target="_blank">${currentVocab.sourceMap}</a>`;

        const img = document.getElementById('linguistic-map');
        img.src = currentVocab.linguisticMap;
        img.alt = `Karte zum Vokabel: ${currentVocab.word}`;

        // Sichtbarkeit der Buttons steuern
        if (index < matchingVocabs.length - 1) {
            nextBtn.style.display = 'inline-block';
            finalBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'none';
            finalBtn.style.display = 'inline-block';
        }

        modal.style.display = 'flex';

        const modalContent = document.querySelector('#new-word-overview .modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0; // Direkt auf 0 setzen
        }
    };

    // Initial das erste Modal anzeigen
    showModal(currentModalIndex);

    // Eventlistener nur einmal setzen
    nextBtn.onclick = () => {
        currentModalIndex++;
        if (currentModalIndex < matchingVocabs.length) {
            showModal(currentModalIndex);
        }
    };
});

function updateProgressBar() {
    const totalInteractions = Math.max(...vocab.map(item => item.interaction));
    const progressPercentage = (gameState.currentInteraction / totalInteractions) * 100;
    const progressBar = document.getElementById('progress-bar');

    // console.log(`Aktueller Fortschritt Phase 1: ${progressPercentage}%`);

    if (gameState.currentInteraction <= totalInteractions) {
        progressBar.style.width = `${progressPercentage}%`;
    }
}

document.getElementById('add-word-to-dict').addEventListener('click', function () {
    const matchingVocabs = vocab.filter(v => v.interaction === gameState.currentInteraction);

    if (matchingVocabs.length === 0) return;

    // Alle Wörter zur Liste hinzufügen, falls noch nicht enthalten
    matchingVocabs.forEach(vocabEntry => {
        if (!gameState.discoveredWords.includes(vocabEntry.word)) {
            gameState.discoveredWords.push(vocabEntry.word);
        }
    });

    updateProgressBar();

    // Interaktion fortsetzen
    gameState.currentInteraction += 1;

    // Prüfen, ob es noch eine passende Interaktion gibt
    const nextVocab = vocab.find(v => v.interaction === gameState.currentInteraction);
    if (nextVocab) {
        loadInteraction();
    } else {
        // Falls keine weitere Interaktion: Ende Phase 1 anzeigen
        document.getElementById('reaction').style.display = 'none';
        document.getElementById('phase1-completed').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});


function toggleDictionary() {
    const dictionaryModal = document.getElementById('dictionary-modal');
    const phase1 = document.getElementById("phase-1");
    const phase2 = document.getElementById("phase-2");
    const phase2Game = document.getElementById("phase-2-game");
    const phase2Start = document.getElementById("phase-2-start");
    const feedback = document.getElementById("feedback");

    // Schließe das Wörterbuch, wenn es bereits offen ist, unabhängig vom Spielstatus.
    if (dictionaryModal.style.display === 'flex') {
        dictionaryModal.style.display = 'none';
        return;
    }

    // Phase 1 Logik
    if (phase1.style.display === 'block') {
        dictionaryModal.style.display = 'flex';
        loadDictionary();
    } 
    // Phase 2 Logik
    else if (phase2.style.display === 'block') {
        // Guard-Clause: Tue nichts, wenn das 'phase-2-start' Div sichtbar ist.
        if (phase2Start.style.display === 'block') {
            return;
        }

        // Überprüfe die Bedingungen nur, wenn der eigentliche Lückentext-Modus ('phase-2-game') aktiv ist.
        if (phase2Game.style.display === 'block') {
            if (gameState.points >= 2) {
                gameState.points -= 2; // zwei Punkte abziehen
                // Aktualisiere die Punkteanzeige
                const pointsDisplay = document.getElementById("points-display");
                if (pointsDisplay) {
                    pointsDisplay.textContent = `Punkte: ${gameState.points}`;
                }
                
                dictionaryModal.style.display = 'flex';
                loadDictionary();
            } else {
                feedback.textContent = "Du hast nicht genügend Punkte, um einen Blick in das Wörterbuch zu werfen.";
            }
        }
    }
    // Minigame-Modus Logik
    else {
        // Hier können Sie Logik hinzufügen, wenn das Wörterbuch im Minigame-Modus kostenlos sein soll.
        // Andernfalls, wie in Ihrem ursprünglichen Code, wird es auch hier geöffnet.
        dictionaryModal.style.display = 'flex';
        loadDictionary();
    }
}

function loadDictionary() {
    const dictionaryModal = document.getElementById('dictionary-modal')
    const noWordsAdded = document.getElementById('no-words-added')
    const wordDetails = document.getElementById('word-details')
    if (gameState.discoveredWords.length === 0) {
        noWordsAdded.style.display = 'block';
        wordDetails.style.display = 'none';
    } else {
        wordDetails.style.display = 'block';
        noWordsAdded.style.display = 'none';

        // Inhalt von wordDetails leeren, bevor neue Elemente hinzugefügt werden
        wordDetails.innerHTML = '';

        // Loop through each discovered word and add it
        
        gameState.discoveredWords.forEach(discoveredWordItem => {
            const vocabEntry = vocab.find(v => v.word === discoveredWordItem);

            const detailsElement = document.createElement('details');
            detailsElement.classList.add('word-item');
            wordDetails.appendChild(detailsElement)
            
            const summaryElement = document.createElement('summary');
            summaryElement.textContent = vocabEntry.word;
            detailsElement.appendChild(summaryElement)

            const wordItemDiv = document.createElement('div');
            wordItemDiv.classList.add('word-item-details');
            detailsElement.appendChild(wordItemDiv)

            const meaningDiv = document.createElement('div');
            meaningDiv.innerHTML = `Bedeutung: ${vocabEntry.meaning}`;
            wordItemDiv.appendChild(meaningDiv)

            const exampleDiv = document.createElement('div');
            exampleDiv.innerHTML = `<p>Beispielsatz: ${vocabEntry.example}</p>`;
            wordItemDiv.appendChild(exampleDiv);

            const imgContainerDiv = document.createElement('div');
            imgContainerDiv.classList.add('img-container');
            wordItemDiv.appendChild(imgContainerDiv) 

            const figureElement = document.createElement('figure');
            imgContainerDiv.appendChild(figureElement)

            const mapImage = document.createElement('img');
            mapImage.src = vocabEntry.linguisticMap;
            mapImage.alt = `Karte zum Vokabel: ${vocabEntry.word}`;
            mapImage.classList.add('linguistic-map');
            figureElement.appendChild(mapImage)

            const figcaptionElement = document.createElement('figcaption');
            figcaptionElement.innerHTML = `Quelle: <a href="${vocabEntry.sourceMap}" target="_blank">${vocabEntry.sourceMap}</a>`;
            figureElement.appendChild(figcaptionElement)
        });
    }
}

function toPhase2() {
    document.getElementById('phase-1').style.display = 'none';
    document.getElementById('phase-2').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Phase 2: Gelernte Vokabel anwenden
const phase2Start = document.getElementById('phase-2-start');
const phase2Game = document.getElementById('phase-2-game');
const gapTextBtn = document.getElementById('gap-text-btn');

function loadGapText() {
    phase2Start.style.display = 'none';
    phase2Game.style.display = 'block';
    createGapText(textTemplate);
    const hintBtn = document.getElementById("hint-btn")
    if (gameState.points === 0) { // Assuming gameState is defined elsewhere
        hintBtn.style.display = 'none';
    }

    // Scroll to top of the page
     window.scrollTo({ top: 0, behavior: 'smooth' });
}

const textTemplate = "<p>An einem kühlen Herbstnachmittag betritt Paul ein kleines, gemütliches [Beisl]. Drinnen ist es warm, es riecht nach gebratenem Essen und altem Holz. Zwei Männer spielen Karten, der Wirt nickt Paul kurz zu. Die Fenster sind leicht beschlagen, und auf dem Tisch in der Ecke flackert eine Kerze.</p><p>Draußen fährt gerade eine [Bim] vorbei. Man hört das Quietschen auf den Schienen, das in der engen Gasse widerhallt. Paul wirft einen Blick hinaus, bevor er sich an seinen Platz setzt. Ihm fällt ein alter, dunkler [Kasten] auf, der neben der Tür steht – vielleicht ein alter Brotschrank oder ein Aufbewahrungsort für Geschirr.</p><p>Der Wirt bringt ihm ein [Häferl] mit dampfend heißem Tee. Der Rand ist leicht abgesprungen, aber Paul stört das nicht. Er nimmt einen Schluck, schaut sich um und atmet tief ein. Der Tee ist stark, beinahe herb, genau richtig für diesen Tag.</p><p>Aus der Küche dringt der Geruch von Essig und Zwiebeln. Eine Bedienung bringt einen Teller mit [Erdäpfel]salat an den Nebentisch. Paul sieht das dampfende Schnitzel daneben und bekommt selbst ein wenig Hunger.</p><p>Auf dem Sessel gegenüber liegt ein kleiner, weicher [Polster]. Paul nimmt ihn und legt ihn sich in den Rücken. So sitzt er bequemer.</p><p>Zurück am Tisch will er sich noch einen Apfelstrudel gönnen, doch als der Wirt zurückkommt, schüttelt dieser bedauernd den Kopf. „Der Strudel [ist] leider [aus]“, sagt er, „aber ich hätte noch Apfelkuchen.“ Paul lacht leise, nickt und sagt: „Dann eben den. Hauptsache, ich bekomme noch etwas Süßes.“ Erleichtert lehnt er sich zurück und genießt die Atmosphäre, während draußen der Herbstwind durch die Gassen pfeift.</p>";

let correctAnswers = [];
let activeInput = null;

function createGapText(text) {
    const container = document.getElementById("gap-text-container");
    container.innerHTML = "";
    correctAnswers = []; // Clear correct answers for new game

    // Split the entire text by </p> to get individual paragraph strings (including leading <p>)
    const paragraphStrings = text.split('</p>');

    paragraphStrings.forEach(pString => {
        // Trim any whitespace and check if it's an empty string after split
        pString = pString.trim();
        if (pString === "") return;

        // Remove the leading <p> from the paragraph string
        const cleanedPString = pString.startsWith('<p>') ? pString.substring(3) : pString;

        // Create a new <p> element for this paragraph
        const paragraphElement = document.createElement('p');

        // Split this cleaned paragraph string by the gap placeholders
        const parts = cleanedPString.split(/\[([^\]]+)\]/);

        for (let i = 0; i < parts.length; i++) {
            if (i % 2 === 0) {
                // normaler Text
                if (parts[i]) { // Ensure it's not an empty string
                    paragraphElement.appendChild(document.createTextNode(parts[i]));
                }
            } else {
                // Lücke
                const input = document.createElement("input");
                input.type = "text";
                input.className = "blank";
                input.dataset.solution = parts[i];
                correctAnswers.push(parts[i]);
                input.addEventListener("focus", () => {
                    activeInput = input;
                    // Assuming a 'hint' element exists
                    const hintElement = document.getElementById("hint");
                    if (hintElement) {
                        hintElement.textContent = ""; // Hinweis zurücksetzen
                    }
                });
                paragraphElement.appendChild(input);
            }
        }
        // Append the completed paragraph element to the main container
        container.appendChild(paragraphElement);
    });
}


function showHint() {
    const feedback = document.getElementById("feedback");
    const hintBtn = document.getElementById("hint-btn")
    if (activeInput) {
        const solution = activeInput.dataset.solution;
        const currentValue = activeInput.value;

        let i = 0;
        // Finde die Stelle, bis zu der der aktuelle Wert mit der Lösung übereinstimmt
        while (i < currentValue.length && i < solution.length && currentValue[i].toLowerCase() === solution[i].toLowerCase()) {
            i++;
        }

        if (i < solution.length) {
            // Buchstaben ergänzen
            activeInput.value = solution.substring(0, i + 1);
            document.getElementById("hint").textContent = `Hinweis: Buchstabe wurde eingefügt.`;

            // Punktestand um 1 verringern
            gameState.points = gameState.points - 1;
            
            // Punkteanzeige aktualisieren
            const pointsDisplay = document.getElementById("points-display");
            pointsDisplay.textContent = `Punkte: ${gameState.points}`;

            if (gameState.points === 0) {
                hintBtn.style.display = 'none';
            }

        } else {
            document.getElementById("hint").textContent = "Die Lösung ist bereits vollständig eingegeben.";
        }
    } else {
        document.getElementById("hint").textContent = "Bitte zuerst eine Lücke anklicken.";
    }
}

    function checkAnswers() {
        const inputs = document.querySelectorAll("#gap-text-container input");
        let allCorrect = true;
        let wrongCount = 0; // Fehlerzähler

        inputs.forEach(input => {
            const solution = input.dataset.solution.trim().toLowerCase();
            const userInput = input.value.trim().toLowerCase();

            if (userInput === solution) {
                input.style.border = "3px solid green";
            } else {
                input.style.border = "3px solid red";
                allCorrect = false;
                wrongCount++; // Fehler hochzählen
            }
        });

        // Punktestand aktualisieren
        gameState.points = gameState.points - wrongCount; 

        const feedback = document.getElementById("feedback");
        const hintBtn = document.getElementById("hint-btn")
        const solutionsBtn = document.getElementById("solutions-btn")
        const minigameBtn = document.getElementById("minigame-btn")
        const recipeBtn = document.getElementById("recipe-btn")
        if (allCorrect) {
            feedback.textContent = "Alle Antworten sind korrekt!";
            recipeBtn.style.display = "inline-block";
            hintBtn.style.display = "none";
            solutionsBtn.style.display = "none";
            minigameBtn.style.display = "none";
        } else if (gameState.points > 0) {
            feedback.textContent = "Es gibt noch falsche Antworten. Versuche es weiter!";
        } else if (gameState.points === 0) {
            feedback.textContent = "Es gibt noch falsche Antworten. Versuche es weiter!";
            hintBtn.style.display = "none";
        } else {
            feedback.textContent = "Die Loge findet, dass du noch nicht gut genug zeigen kannst, dass du das österreichische Kulturgut und ihre Sprachgepflogenheiten zu schätzen weißt. Übe noch etwas, dann gibt sie dir sicher noch eine Chance, das Geheimnis zu lüften!"
            gameState.points = 0;
            minigameBtn.style.display = "inline-block";
            hintBtn.style.display = "none";
            solutionsBtn.style.display = "none";
            recipeBtn.style.display = "none";
        }

        // Punkteanzeige aktualisieren
        const pointsDisplay = document.getElementById("points-display");
        if (pointsDisplay) {
            pointsDisplay.textContent = `Punkte: ${gameState.points}`;
        }
    }

function showRecipe() {
    const phase2 = document.getElementById("phase-2")
    const recipe = document.getElementById("recipe")
    const pointsDisplay = document.getElementById("points-display");

    phase2.style.display = "none";
    recipe.style.display = "block";
    pointsDisplay.style.display = "none";

    // Scroll to top of the page
     window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Minigame

let currentScrambleWordIndex = 0;
let scrambleWords = [];

function shuffleWord(word) {
    return word.split('').sort(() => 0.5 - Math.random()).join('');
}

function loadScrambleGame() {
    const minigameContainer = document.getElementById('minigame-scramble');
    minigameContainer.style.display = 'block';
    document.getElementById('phase-1').style.display = 'none';
    document.getElementById('phase-2').style.display = 'none';

    scrambleWords = [...gameState.discoveredWords];
    scrambleWords.sort(() => 0.5 - Math.random());
    currentScrambleWordIndex = 0;
    displayScrambleQuestion();

    document.getElementById('minigame-scramble-back-btn').onclick = () => {
        minigameContainer.style.display = 'none';
        document.getElementById('phase-2').style.display = 'block';
        document.getElementById('hint-btn').style.display = 'inline-block';
        document.getElementById('solutions-btn').style.display = 'inline-block';
        document.getElementById('minigame-btn').style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

function displayScrambleQuestion() {
    const scrambleMeaningElement = document.getElementById('scramble-meaning');
    const scrambledWordDisplayElement = document.getElementById('scrambled-word-display');
    const scrambleInput = document.getElementById('scramble-input');
    const checkScrambleBtn = document.getElementById('check-scramble-btn');
    const nextScrambleBtn = document.getElementById('next-scramble-btn');
    const scrambleFeedback = document.getElementById('scramble-feedback');
    const backBtn = document.getElementById('minigame-scramble-back-btn')

    scrambleInput.value = '';
    scrambleFeedback.textContent = '';
    checkScrambleBtn.style.display = 'inline-block';
    nextScrambleBtn.style.display = 'none';

    if (currentScrambleWordIndex >= scrambleWords.length) {
        scrambleMeaningElement.textContent = `Minigame beendet! Gut gemacht! Du konntest ${gameState.points} Punkt(e) durch deine richtigen Antworten sammeln.`;
        scrambledWordDisplayElement.textContent = '';
        scrambleInput.style.display = 'none';
        checkScrambleBtn.style.display = 'none';
        nextScrambleBtn.style.display = 'none'; // Auch den "Nächstes Wort"-Button ausblenden
        backBtn.style.display = 'inline-block'; // Den "Zurück zum Spiel"-Button anzeigen
        return;
    }

    const currentWord = vocab.find(v => v.word === scrambleWords[currentScrambleWordIndex]);
    if (!currentWord) {
        currentScrambleWordIndex++;
        displayScrambleQuestion();
        return;
    }

    scrambleMeaningElement.innerHTML = `Bedeutung: ${currentWord.meaning}`;
    scrambledWordDisplayElement.innerHTML = `Buchstaben im Wort: ${shuffleWord(currentWord.word).toLowerCase()}`;

    checkScrambleBtn.onclick = () => {
        if (scrambleInput.value.trim().toLowerCase() === currentWord.word.toLowerCase()) {
            scrambleFeedback.textContent = 'Richtig!';
            gameState.points += 1;
            document.getElementById("points-display").textContent = `Punkte: ${gameState.points}`;
        } else {
            scrambleFeedback.textContent = `Falsch! Das richtige Wort war: ${currentWord.word}`;
        }
        checkScrambleBtn.style.display = 'none';
        nextScrambleBtn.style.display = 'inline-block';
        scrambleInput.disabled = true;
    };

    nextScrambleBtn.onclick = () => {
        currentScrambleWordIndex++;
        scrambleInput.disabled = false;
        displayScrambleQuestion();
    };
}