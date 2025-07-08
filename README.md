# Coffeely - Coffee Webshop

Coffeely ist ein moderner, responsiver Webshop für hochwertige Kaffeebohnen. Das Projekt wurde ausschliesslich mit HTML, CSS und JavaScript (ohne Frameworks) umgesetzt und legt besonderen Wert auf ein ansprechendes, benutzerfreundliches Design sowie eine klare Bedienung auf allen Geräten.

## Projektbeschreibung

Coffeely bietet eine Plattform, auf der Nutzer verschiedene Kaffeesorten entdecken, filtern und im Detail betrachten können. Die Seite richtet sich an Kaffeeliebhaber, die Wert auf Qualität, Transparenz und ein modernes Einkaufserlebnis legen. Neben einer Produktübersicht gibt es eine Detailansicht für jedes Produkt, eine Kontaktseite sowie die Möglichkeit, einen Newsletter zu abonnieren. Ein animierter Hintergrund mit fallenden Kaffeebohnen sorgt auf der Kontaktseite für ein einzigartiges, stimmungsvolles Ambiente.

## Features

- **Startseite:** Übersichtliche Präsentation der neuesten oder beliebtesten Produkte im Hero-Bereich. Darunter eine Vorschau auf ausgewählte Produkte und eine Übersicht aller Kategorien (z.B. Single Origin, Blends, Espresso, Decaf). Ein Newsletter-Formular lädt zum Abonnieren ein.
- **Produktübersicht:** Alle Produkte werden in einem responsiven Grid-Layout mit Vorschaubild, Titel, Beschreibung und Preis angezeigt. Ein Filter ermöglicht die Auswahl nach Kategorie.
- **Produktdetailseite:** Detaillierte Ansicht eines Produkts mit großem Bild, Beschreibung, Preis, Autor und "Buy Now"-Button. Die Seite ist übersichtlich und für mobile Geräte optimiert.
- **Kontaktseite:** Kontaktformular für Anfragen sowie eine kurze Projektbeschreibung. Das Formular ist responsiv und barrierearm gestaltet.
- **Newsletter:** Einfaches Formular zur Anmeldung für den Newsletter, mit Erfolgsmeldung nach dem Absenden.
- **Falling Beans Animation:** Subtile, animierte Kaffeebohnen, die im Hintergrund der Kontaktseite nach unten fallen und für eine besondere Atmosphäre sorgen.
- **Konsistente Navigation:** Ein responsiver Header mit Logo, Navigation und Hamburger-Menü für Mobilgeräte.
- **Responsive Design:** Optimale Darstellung und Bedienbarkeit auf Desktop, Tablet und Smartphone.

## Styleguide

### Einleitung

Das Layout soll übersichtlich sein und auf allen Geräten gut funktionieren, ohne die Nutzer zu überfordern. Das Design ist inspiriert von der Webseite von **Aesop**. Mir gefallen dort die ruhigen Farben, die elegante Typografie und die grosszügigen Abstände. Ich wollte ein ähnlich hochwertiges, aber warmes und freundliches Gefühl schaffen, modern aber nicht kalt.

### Farben

- **Hintergrund:** `#f8f7ea` (sanftes, warmes Beige)
- **Text:** `#222` (sehr dunkles Grau, gut lesbar)
- **Akzentfarbe:** `#bfa980` (goldener Ton für Buttons, Links, Highlights)
- **Karten-Hintergrund:** `#fff` (reines Weiss)
- **Rahmen:** `#e0ded9` (dezentes Hellgrau)
- **Button-Hintergrund:** `#bfa980`
- **Button-Text:** `#fff` (weiss)

### Schriften

- **Überschriften:** Georgia, serif (klassisch und hochwertig)
- **Fliesstext und Navigation:** Inter oder Arial, sans-serif (modern und klar)

### Buttons

- Gross, mit runden Ecken (ausser Hero-Button: rechteckig)
- **Standard-Button:** Akzentfarbe mit weissem Text  
  - *Hover:* Hintergrund weiss, Text und Rahmen in Akzentfarbe
- **Hero-Button:** Weiss mit Akzent-Rand und -Text  
  - *Hover:* Hintergrund Akzentfarbe, Text weiss
- Alle Buttons sind klar als klickbar erkennbar und haben genug Abstand

### Abstände und Layout

- Viel Abstand und Padding für ein luftiges Design
- Grid-Layout bei Produkten und Kategorien, passt sich dem Bildschirm an
- Karten haben Schatten und runde Ecken für visuelle Trennung

### Responsive Design

- Breakpoints für Desktop, Tablet und Handy (Desktop-first)
- Schrittgrössen und Abstände mit Einheiten wie `vw` und `clamp()`
- Navigation wird auf kleinen Geräten zum Hamburger-Menü

### Sonstiges

- Kontaktseite hat animierten Hintergrund mit fallenden Kaffeebohnen (PNG), dezent und nicht ablenkend
- Produktbilder sind nicht auswählbar oder ziehbar
- Alle interaktiven Elemente sind barrierearm und haben sichtbare Fokus-Stile

## Tech Stack

- **HTML5:** Strukturierung aller Seiten und Inhalte
- **CSS3:** Modernes, variables Design mit Custom Properties (Variablen), flexiblen Einheiten (`vw`, `clamp`) und Media Queries für verschiedene Bildschirmgrössen
- **Vanilla JavaScript:** Dynamische Funktionen wie Produktfilter, Rendering der Produktdaten, Animationen, Formularvalidierung und Navigation

## Vorgehen

Zu Beginn habe ich die Anforderungen und Ziele des Projekts sorgfältig analysiert und eine Sitemap sowie erste Wireframes für alle Seiten erstellt. Anschliessend habe ich einen Styleguide entwickelt, um Farben, Typografie und Abstände festzulegen und ein konsistentes Design zu gewährleisten.

Die Umsetzung erfolgte schrittweise:

1. **Struktur:** Zuerst habe ich die Grundstruktur aller Seiten mit HTML5 angelegt und die Navigation implementiert.
2. **Layout & Design:** Danach habe ich das Layout mit CSS gestaltet, Responsive Design mit Media Queries umgesetzt und die wichtigsten Komponenten wie Produktkarten, Buttons und Formulare gestylt.
3. **Funktionalität:** Im nächsten Schritt habe ich mit JavaScript die dynamischen Funktionen wie Produktfilter, Rendering der Produktdaten, Formularvalidierung und die Animation der fallenden Kaffeebohnen realisiert.
4. **Testing & Optimierung:** Ich habe die Seite auf verschiedenen Geräten und Browsern getestet, um eine optimale Darstellung und Bedienbarkeit sicherzustellen. Dabei habe ich besonderes Augenmerk auf Barrierefreiheit und Performance gelegt.
5. **Feinschliff:** Abschliessend habe ich das Design weiter verfeinert, kleinere Fehler behoben und die Inhalte auf Rechtschreibung und Verständlichkeit geprüft.

## Hinweis zur KI-Nutzung

Für dieses Projekt wurde Künstliche Intelligenz für folgende Zwecke verwendet:

- **Bildgenerierung:** Alle Produktbilder wurden mit Google Imagen erstellt, um ein einheitliches, hochwertiges Erscheinungsbild zu gewährleisten
- **Textkorrektur** Alle Texte dieses Projekts wurden mit ChatGPT auf Rechtschreibung geprüft.
- **Styling/Code-Assistenz:** Für das Styling und die Code-Unterstützung wurde Cursor (AI Coding Assistant) genutzt. Dies betrifft insbesondere die Entwicklung von CSS-Layouts, Responsiveness und UI-Komponenten
- **Animation:** Die Animation der fallenden Kaffeebohnen wurde mit Unterstützung von KI (Cursor) umgesetzt, um eine moderne und performante Lösung zu gewährleisten
- **Funktionen:** Kleinere Funktionen wie Terms, Privacy Policy und Imprint wurden mit ChatGPT generiert
- **Testing:** White- und Blackbox-Sicherheitstests sowie Prüfung der Rechtschreibung von README und Styleguide wurden ebenfalls von Cursor durchgeführt
- **Mockup:** Das Mockup habe ich mit Google-Stitch erstellt, in Figma importiert und anschliessend als Inspiration genutzt (siehe unten)

## Mockup

Das Mockup wurde mit Google-Stitch erstellt und in Figma importiert.  
|-> [Figma-Link öffnen](https://www.figma.com/design/W6AhZGStcRkg98rv9raQOn/Modul-293-Mockup?node-id=0-1&t=dQnsAAlziBPlZJsu-1)

## Projektstruktur

- `index.html`: Startseite mit Hero-Bereich, Produktvorschau, Kategorien und Newsletter
- `products.html`: Übersicht aller Produkte mit Filterfunktion
- `product.html`: Detailseite für einzelne Produkte mit allen relevanten Informationen
- `contact.html`: Kontaktformular und Projektbeschreibung
- `css/style.css`: Zentrales Stylesheet für das gesamte Design inklusive Responsive Design und Animationen
- `js/main.js`: Haupt-JavaScript für Rendering, Filter, Animationen und Formularlogik
- `img/`: Ordner mit allen verwendeten Bildern (AI-generiert und für Web optimiert)

## Fazit

Am Anfang hatte ich nur eine grobe Idee: ein schlichter Webshop für Kaffee, der modern aussieht und auf allen Geräten funktioniert. Was daraus geworden ist, hat meine Erwartungen ehrlich gesagt ubertroffen.

Ich habe viel über sauberen Code, Layout-Struktur und Responsive Design gelernt, vor allem dadurch, dass ich alles ohne Frameworks gebaut habe. Das hat zwar Zeit gekostet, aber mir geholfen, die Zusammenhänge besser zu verstehen. Besonders viel Spass gemacht hat mir das Feintuning beim Styling, und die kleine Animation mit den fallenden Kaffeebohnen war ein persönliches Highlight.

Ich bin überzeugt, dass künftig jede Person in der Informatik regelmässig mit KI arbeiten wird. Dieses Projekt hat mir geholfen, mich darauf vorzubereiten, vor allem im Hinblick darauf, wie KI gezielt zur Ergänzung und Unterstützung bei der Umsetzung eigener Ideen eingesetzt werden kann.

Insgesamt war Coffeely mehr als nur ein Lernprojekt, es war ein Prozess, bei dem ich kreativ arbeiten, Probleme lösen und mich technisch weiterentwickeln konnte. Ich bin stolz auf das Ergebnis.

---

**Hinweis:** Dieses Projekt wurde im Rahmen eines Webentwicklungsprojekts erstellt und dient ausschliesslich zu Lern- und Demonstrationszwecken. Für Fragen oder Feedback stehe ich gerne zur Verfügung.
