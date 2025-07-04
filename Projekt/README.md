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
- **Falling Beans Animation:** Subtile, animierte Kaffeebohnen, die im Hintergrund der **Kontaktseite** nach unten fallen und für eine besondere Atmosphäre sorgen.
- **Konsistente Navigation:** Ein responsiver Header mit Logo, Navigation und Hamburger-Menü für Mobilgeräte.
- **Responsive Design:** Optimale Darstellung und Bedienbarkeit auf Desktop, Tablet und Smartphone.

## Tech Stack
- **HTML5:** Strukturierung aller Seiten und Inhalte.
- **CSS3:** Modernes, variables Design mit Custom Properties (Variablen), flexiblen Einheiten (vw, clamp) und Media Queries für verschiedene Bildschirmgrößen.
- **Vanilla JavaScript:** Dynamische Funktionen wie Produktfilter, Rendering der Produktdaten, Animationen, Formularvalidierung und Navigation.

## Hinweis zur KI-Nutzung
Für dieses Projekt wurde Künstliche Intelligenz für folgende Zwecke verwendet:
- **Bildgenerierung:** Alle Produktbilder wurden mit Google Imagen erstellt, um ein einheitliches, hochwertiges Erscheinungsbild zu gewährleisten.
- **Styling/Code-Assistenz:** Für das Styling und die Code-Unterstützung wurde Cursor (AI Coding Assistant) genutzt. Dies betrifft insbesondere die Entwicklung von CSS-Layouts, Responsiveness und UI-Komponenten.
- **Animation:** Die Animation der fallenden Kaffeebohnen wurde mit Unterstützung von KI (Cursor) umgesetzt, um eine moderne und performante Lösung zu gewährleisten.

Alle weiteren Inhalte, Struktur und Logik wurden eigenständig entwickelt und umgesetzt.

## Projektstruktur
- **index.html:** Startseite mit Hero-Bereich, Produktvorschau, Kategorien und Newsletter.
- **products.html:** Übersicht aller Produkte mit Filterfunktion.
- **product.html:** Detailseite für einzelne Produkte mit allen relevanten Informationen.
- **contact.html:** Kontaktformular und Projektbeschreibung.
- **css/style.css:** Zentrales Stylesheet für das gesamte Design, inklusive Responsive Design und Animationen.
- **js/main.js:** Haupt-JavaScript für Rendering, Filter, Animationen und Formularlogik.
- **img/:** Ordner mit allen verwendeten Bildern (AI-generiert und für Web optimiert).

## Styleguide

### Farben
- **Hintergrund:** #f8f7ea – Sanftes, warmes Beige für eine freundliche Grundstimmung.
- **Text:** #222 – Sehr dunkles Grau für optimale Lesbarkeit.
- **Akzent:** #bfa980 – Goldener Akzentton für Buttons, Links und Highlights.
- **Karten-Hintergrund:** #fff – Reines Weiß für Produktkarten und Container.
- **Rahmen:** #e0ded9 – Dezente Rahmenfarbe für Abgrenzungen.
- **Button-Hintergrund:** #bfa980 – Akzentfarbe für Standard-Buttons.
- **Button-Text:** #fff – Weiß für Text auf Buttons.

### Schriften
- **Hauptschrift (Überschriften):** 'Georgia', serif – Für einen hochwertigen, klassischen Look.
- **UI-Schrift (Fließtext, Navigation):** 'Inter', Arial, sans-serif – Modern, klar und gut lesbar.

### Buttons
- Groß, mit abgerundeten Ecken (ausser Hero-Button: rechteckig)
- Standard: Akzentfarbe mit weisser Schrift, invertiert beim Hover (Hintergrund wird weiß, Text und Rahmen Akzentfarbe)
- Hero-Button: Weiss mit Akzent-Rand und -Text, invertiert beim Hover (Hintergrund Akzent, Text weiß)
- Buttons sind immer klar als interaktive Elemente erkennbar und haben ausreichend Abstand zu anderen Elementen.

### Abstände & Layout
- Grosszügige Abstände und Padding für eine moderne, luftige Optik und gute Lesbarkeit.
- Grid-Layout für Produktübersicht und Kategorien, das sich dynamisch an die Bildschirmgröße anpasst.
- Karten mit Schatten und abgerundeten Ecken für Tiefe und visuelle Trennung.

### Responsive Design
- Mehrere Breakpoints für Desktop, Tablet und Mobile.
- Einsatz von fluiden Einheiten wie vw (viewport width) und clamp() für Schriftgrößen und Abstände, um ein flexibles, modernes Layout zu gewährleisten.
- Navigation wechselt auf Mobilgeräten zu einem Hamburger-Menü.

### Sonstiges
- Animierter Contactpage-Hintergrund mit fallenden Kaffeebohnen (SVG/PNG), der subtil und nicht ablenkend gestaltet ist.
- Produktbilder sind nicht auswählbar oder ziehbar, um ein sauberes Nutzererlebnis zu gewährleisten.
- Alle interaktiven Elemente sind barrierearm und mit Fokus-Styles versehen.

---

**Hinweis:** Dieses Projekt wurde im Rahmen eines Webentwicklungsprojekts erstellt und dient ausschließlich zu Lern- und Demonstrationszwecken. Für Fragen oder Feedback stehe ich gerne zur Verfügung.