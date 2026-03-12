import type { BlogArticle } from "./types";

const article: BlogArticle = {
  slug: "auto-performance-tracker-launch",
  title: "Ich habe eine iOS-App gebaut, die jeden meiner Fahrstile analysiert — hier ist warum",
  excerpt: "GPS-Tracking, Driving Score in 7 Dimensionen, Kraftstoffanalyse ohne OBD-Adapter. Was hinter Auto Performance Tracker steckt — und was mich am meisten Zeit gekostet hat.",
  date: "2026-03-12",
  readingTime: "5 Min",
  content: `# Ich habe eine iOS-App gebaut, die jeden meiner Fahrstile analysiert — hier ist warum

Ich fahre viel. Und irgendwann wollte ich wissen: Fahre ich eigentlich gut?

Nicht im Sinne von "war ich schnell" — sondern wirklich: Wie ist meine Beschleunigung? Bremse ich abrupt? Was kostet mich eine Fahrt tatsächlich an Kraftstoff?

Es gibt Apps dafür. Aber keine hat gemacht, was ich wollte — ohne aufgeblähtes Interface, ohne OBD-Adapter, ohne US-Server irgendwo in Virginia.

Also habe ich selbst eine gebaut.

## Was die App macht

Auto Performance Tracker ist ein iOS-Fahrtentracker mit GPS-Echtzeit-Visualisierung, einem Driving Score über 7 Dimensionen und einer Kraftstoffanalyse ohne externe Hardware.

Nach jeder Fahrt bekommst du eine farbkodierte Streckenkarte, deinen Driving Score, eine Verbrauchsschätzung und konkrete Fahrtipps — basierend auf deinen echten Daten, nicht auf generischen Ratschlägen.

## Was mich am meisten Zeit gekostet hat

**GPS-Rauschen.** Wirklich.

Wenn du durch eine Stadt mit hoher Bebauung fährst, springt das GPS manchmal 30–40 Meter in einer Sekunde. Das zerstört jeden Scoring-Algorithmus, wenn du es nicht glättest. Ich habe mehr Zeit mit Signalglättung verbracht als mit irgendeinem UI-Feature.

Das zweite große Thema war der Scoring-Algorithmus selbst. 7 Dimensionen klingen überschaubar — bis du versuchst, die Gewichtung realistisch zu kalibrieren. Ich bin mehrere Wochen lang absichtlich unterschiedlich gefahren (vorsichtig, sportlich, unaufmerksam), um echte Trainingsdaten zu bekommen.

## Kraftstoffschätzung ohne OBD-Adapter

Die meisten Apps verlangen einen Hardware-Adapter, der ins Auto gesteckt wird. Ich wollte diese externe Abhängigkeit nicht.

Stattdessen: Fahrzeugprofil + GPS-Geschwindigkeitskurve + Fahrverhalten = geschätzter Verbrauch. Nicht auf das Gramm genau, aber nützlich genug, um echte Muster zu erkennen.

## Warum DSGVO-konform von Anfang an

GPS-Daten sind hochsensibel. Sie zeigen, wo du schläfst, wo du arbeitest, welche Ärzte du besuchst.

Meine Entscheidung von Tag 1: alles lokal auf dem Gerät, Cloud-Sync nur bei expliziter Einwilligung, EU-Server (Supabase Frankfurt), kein Tracking durch Drittanbieter. Das war keine Marketing-Entscheidung — das war eine Grundsatzentscheidung.

## Wie es weitergeht

Die App ist jetzt im App Store. Free-Tier mit 250 km pro Monat, Pro für 2,50 €/Monat (jährlich) oder 3,99 € monatlich — mit einer Woche kostenlos zum Testen.

Ich baue weiter: tiefere Statistiken, mehr Fahrzeugdaten, und mittelfristig eine Android-Version.

Wenn du die App ausprobierst und Feedback hast — ich freue mich über jede ehrliche Rückmeldung: contact@melnychuk-anton.de

→ [Auto Performance Tracker im App Store](https://apps.apple.com/app/auto-performance-tracker)`,
};

export default article;
