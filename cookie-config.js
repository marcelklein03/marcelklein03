window.addEventListener("load", function(){
        window.cookieconsent.initialise({
            "palette": {
                "popup": { "background": "#f4f4f4", "text": "#333" },
                "button": { "background": "#d63384", "text": "#ffffff" }
            },
            "type": "opt-in", // Wichtig für DSGVO/TTDSG
            "content": {
                "message": "Diese Webseite verwendet Cookies, um die Benutzerfreundlichkeit zu gewährleisten.",
                "dismiss": "Nur Notwendige",
                "allow": "Alle annehmen",
                "link": "Mehr erfahren",
                "href": "#link-zu-deiner-datenschutzerklaerung"
            },
            // Diese Funktion wird ausgeführt, wenn der Nutzer seine Auswahl trifft
            onStatusChange: function(status, chosenBefore) {
                var type = this.options.type;
                var didConsent = this.hasConsented();

                if (type == 'opt-in' && didConsent) {
                    // Nutzer hat zugestimmt -> Aktiviere die Analyse-Skripte
                    activateAnalytics();
                }
            }
        });
    });

    // Diese Hilfsfunktion sucht nach blockierten Skripten und aktiviert sie
    function activateAnalytics() {
        // Finde alle Skripte mit dem Attribut data-cookieconsent="analytics"
        const analyticsScripts = document.querySelectorAll('script[type="text/plain"][data-cookieconsent="analytics"]');
        analyticsScripts.forEach((script) => {
            // Erstelle ein neues, ausführbares Skript
            const newScript = document.createElement('script');
            // Kopiere den Inhalt und die Attribute (z.B. src)
            newScript.innerHTML = script.innerHTML;
            for (let i = 0; i < script.attributes.length; i++) {
                const attr = script.attributes[i];
                newScript.setAttribute(attr.name, attr.value);
            }
            // Ändere den Typ, damit der Browser es ausführt
            newScript.type = 'text/javascript';
            // Ersetze das alte "text/plain"-Skript durch das neue, aktive Skript
            script.parentNode.replaceChild(newScript, script);
        });
        console.log("Analyse-Cookies wurden aktiviert.");
    }