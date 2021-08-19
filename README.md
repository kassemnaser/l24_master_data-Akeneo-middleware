# l24_master_data-Akeneo-middleware

Das projekt (Online-Shop) macht folgendes:
    - importieren alle Daten von Leebmann(Artikelname, Beschreibung der Artikel, ...) in Akeneo
    - wenn ein Datensatz in einer Tabelle gelöscht wird, muss in Akeneo deaktiviert werden und NICHT gelöscht werden darf.
    - Wenn der Artikel nicht vorhanden ist, dann soll er neu hinzugefügt werden.
    - Muss aber auch die Daten aktualisiert werden.
    
Technologien:
	Nodejs
		- ist eine Open-Source-JavaScript-Laufzeitumgebung
		- kann JavaScript-Code außerhalb eines Webbrowers ausführen.
		-  GoogleCloudPlatform / functions-framework-nodejs 
	mysql 
   		- l24_master_data datenbank
	Akeneo 
        	- sammelt und zentralisiert Produktinformationen
        	- verbessert die Kundenerlebnis
    
    
    - Mit nodejs daten von mysql auslesen und in Akeneo importieren.
    - Connection zu PIM erstellen/ Rest-Api
         - Es ermöglicht´, Daten in das PIM zu pushen oder Daten aus dem PIM zu ziehen. 
         - Produkte vom PIM erhalten, indem man die REST-API verwendet.