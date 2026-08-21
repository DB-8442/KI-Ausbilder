# LOKASSIST 1.0 – Entwicklungsplan

## Status
Milestone A: **abgeschlossen** – Fundament, Branding, Navigation, persönliche Einstellungen und Readonly-/Speicherlogik.
Milestone B1: **abgeschlossen** – Fahrzeugmodell, automatische Bauart-Ermittlung bei BR 8442, bis zu 3 Fahrzeuge und Readonly-Fahrzeugschutz.
Milestone B2: **in Arbeit (Alpha 16)** – Dienstmodell.
Aktuelle Basis: stabile Praxistest-Version 0.x (V5.4.1).
Ziel: erste offiziell benannte Hauptversion LOKASSIST 1.0.

## Grundsätze
- Sicherheit > Pünktlichkeit > Effizienz bei normalen Zugfahrten.
- LOKASSIST ist ein persönliches Hilfsmittel und kein betrieblicher Ersatz für verbindliche Quellen.
- Persönliche Daten bleiben standardmäßig lokal auf dem Gerät.
- iOS und Android werden gleichermaßen berücksichtigt.
- Erst testen, dann erweitern.

## Milestone A – Fundament & Design
- LOKASSIST-Logo und Branding
- Kachel-Startseite
- moderne Fahrtkarten und Navigation
- zentrale Einstellungen
- optionale Felder: Name, Meldestelle, E-Mail
- PIN/biometrische Sperre
- robustes PWA-Update-System

## Milestone B – Dienst & Fahrzeuge
- Dienstmodell statt Kalendertag
- Dienstbeginn/-abschluss (Feierabend)
- Spät-/Nachtdienste über Mitternacht
- mehrere Fahrten einem aktiven Dienst zuordnen
- mehrere Fahrten pro Dienst
- Fahrzeugverwaltung: Baureihe + Fahrzeugnummer + Bauart
- bis zu 3 gekuppelte Fahrzeuge als Fahrzeugverband
- mehrere Baureihen/Fahrzeuge innerhalb eines Dienstes

## Milestone C – Fahrten
- automatische Zugdatensuche priorisieren
- manuelle Fahrt als Fallback
- Start/Ziel manuell
- optional Zwischenhalte
- Fahrtarten: Regelzug, Leerzug, Sonderfahrt, Sonstige
- Leerzug: keine normale Pünktlichkeitsbewertung
- Rückfahrt am Ziel anbieten
- konkrete Fahrt eindeutig über Fahrt-ID verwenden
- geplante Haltausfälle/Fahrplanabweichungen berücksichtigen

## Milestone D – Informationen
- Anschlüsse am Halt
- Filter nach Verkehrsmittel, z. B. nur Züge
- Störungen: strecken-info.de als manuelle Quelle
- später automatisierte Störungsdatenquelle prüfen
- OpenRailwayMap
- Echtzeitdaten über zulässige/verlässliche Datenquelle

## Milestone E – Persönliches Arbeitstagebuch
- Dienstübersicht
- gespeicherte Fahrten
- Schnellnotiz mit Datum/Uhrzeit/Dienst/Zug/Fahrzeug
- Verspätungen und persönliche Gründe
- persönliche Suche
- Fahrzeughistorie
- optionale persönliche Statistik

## Milestone F – Nachweise & Abschluss
- Feierabend 😎
- Tages-/Dienstzusammenfassung
- PDF-Export
- Name/Meldestelle optional im Nachweis
- E-Mail: nichts / E-Mail vorbereiten / optional später automatisiert
- Hinweis: persönliche Dokumentation, kein betrieblicher Nachweis

## Milestone G – Sicherheit & Release
- PIN
- biometrische Entsperrung, soweit unterstützt
- Recovery-Konzept
- Datenschutz-/Rechtliches-Seite
- lokale Datenspeicherung prüfen
- Backup/Export-Konzept
- Offline-/Netzausfall-Verhalten
- vollständiger Praxistest
- Release Candidate
- LOKASSIST 1.0

## Prioritäten
P1 = Muss für 1.0
P2 = Sehr wichtig
P3 = sinnvoll, wenn Kern stabil
P4 = Komfort / später

## Versionsschema
- 0.x = aktuelle Entwicklungs-/Praxistestphase
- 1.0 Alpha/Beta/RC = Entwicklung der ersten Hauptversion
- 1.0 = erste stabile Hauptversion
- 1.0.x = Bugfixes
- 1.1 = kleinere neue Funktionen
- 2.0 = größerer Funktions-/Architektur-Sprung
