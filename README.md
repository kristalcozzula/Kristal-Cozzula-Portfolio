# Portfolio-di-Kristal-Cozzula
Progetto per il  corso di HTML e CSS per Start2Impact. Creazione di un portfolio in HTML e CSS.
Presenta chi sono, il mio curriculum, i progetti di web design e logo design e un modulo per contattarmi.

**Sito online:**
https://kristalcozzula.github.io/Kristal-Cozzula-Portfolio/index.html

## Pagine

- `index.html`: homepage con presentazione, banda scorrevole, il mio metodo di lavoro, skill e tool
- `about.html`: chi sono, valori, interessi e filosofia di design
- `curriculum.html`: formazione, esperienze, lingue, skill e tool
- `projects.html`: progetti di web design e logo design, con link ai PDF di presentazione
- `contact.html`: modulo di contatto

Ogni pagina ha una versione inglese nella cartella `en/`, raggiungibile dal pulsante EN fisso in basso a destra.

## Requisiti della consegna

- **Framework front-end:** Bootstrap 5.3.8, collegato via CDN (griglia, navbar con hamburger, utility di spaziatura)
- **Favicon:** SVG con il mio logo
- **Menu sticky:** su mobile (fino a 767.98px) l'header resta fisso in alto con menu a hamburger
- **Flexbox e Grid:** Flexbox per la banda scorrevole, la colonna della foto nell'hero e le colonne del curriculum; Grid per la griglia dei tool, la griglia dei progetti, il layout della pagina contatti e il box dei valori
- **Sass:** i sorgenti sono in `assets/sass` e vengono compilati in `dist/css` (un file per pagina, più `style.css` con gli stili comuni)
- **Responsive:** tre fasce, mobile fino a 767.98px, tablet e laptop da 768px a 1199.98px, desktop da 1200px in su. Alcune pagine aggiungono un punto intermedio tablet a 991.98px.
- **SEO e Open Graph:** `title`, `description` e tag `og:*` su ogni pagina

## Dettagli

- Animazione del menu desktop che esce da dietro il logo e banda con testo scorrevole, entrambe disattivate per chi ha attivato "riduci animazioni" nel sistema
- Attenzione all'accessibilità: gerarchia dei titoli, `alt` sulle immagini (vuoto per quelle decorative), `aria-label` e `aria-current` nel menu, contorno visibile al focus da tastiera
- Modulo di contatto con invio tramite EmailJS
  
## Versione inglese

Il sito è disponibile in italiano e in inglese. Le pagine inglesi si trovano nella cartella `en/` e hanno gli stessi nomi di quelle italiane. Il pulsante di cambio lingua, fisso in basso a destra, porta alla stessa pagina nell'altra lingua, resta visibile durante lo scroll e ha un `aria-label` per i lettori di schermo. Le due versioni condividono gli stessi file CSS e le stesse immagini.

## Tecnologie

HTML5, CSS3, Sass, Bootstrap 5.3.8, JavaScript, EmailJS. Font: Montserrat e Lora da Google Fonts.

## Struttura delle cartelle

```
assets/img      fotografie, illustrazioni e icone
assets/progetti PDF di presentazione dei progetti
assets/js       script del modulo di contatto
assets/sass     sorgenti Sass
dist/css        CSS compilato
en/             La cartella `en/` contiene la versione inglese delle stesse cinque pagine (stessi nomi dei file).
```

## Modificare gli stili

Gli stili si scrivono nei file `.scss` in `assets/sass` e si compilano in `dist/css` (io ho usato l'estensione Live Sass Compiler di VS Code).

## Autrice

Kristal Cozzula
[GitHub](https://github.com/kristalcozzula) · [LinkedIn](https://www.linkedin.com/in/kristal-cozzula-ux-ui-designer/)
