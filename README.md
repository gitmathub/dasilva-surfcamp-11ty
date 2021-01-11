CMS for Da Silva Surfcamp

- [Anforderungen](#anforderungen)
- [Project Todos](#project-todos)
  - [MVP Release](#mvp-release)
  - [Backlog](#backlog)
  - [Done](#done)
- [Research](#research)
  - [SEO](#seo)
    - [Tools](#tools)
    - [Meta description](#meta-description)
    - [Meta Title](#meta-title)
  - [Image Sizes Dynamically](#image-sizes-dynamically)
    - [Responsive Images Generator](#responsive-images-generator)
    - [11ty Image Generator](#11ty-image-generator)
  - [XHR, Fetch and CORS](#xhr-fetch-and-cors)
  - [Maps](#maps)
  - [Instagram Integration](#instagram-integration)
  - [CMS Requirements](#cms-requirements)
  - [Site Generator Requirements](#site-generator-requirements)
  - [Web Scraper and Crawler](#web-scraper-and-crawler)
  - [Multilingual with 11ty](#multilingual-with-11ty)
  - [Lightbox](#lightbox)
  - [Dropdown Menu](#dropdown-menu)
  - [Masonry](#masonry)
  - [Ghost CMS](#ghost-cms)
  - [Booking Layer](#booking-layer)
  - [CDN](#cdn)
    - [cloudflare](#cloudflare)
    - [unpack](#unpack)
    - [imageresizerio](#imageresizerio)
  - [CSS](#css)
  - [Lazy Loading](#lazy-loading)
    - [Iframe](#iframe)
    - [Youtube](#youtube)
    - [Preloading fonts](#preloading-fonts)
- [Loadtest](#loadtest)
  - [Speed results](#speed-results)
  - [Testing](#testing)
    - [Speedtest tool](#speedtest-tool)
- [Credits](#credits)



# Anforderungen

- im Prinzip wie die jetzige Seite nur eben richtig schnell
- muss auf Handy und Computer funktionieren
- Wichtigen Funktionalitäten
  - Content:
    - Bed & Breakfast
    - Surfing
    - Mountenbikes
    - Kids are Welcome
    - Reiten
    - Activities
  - Bookinglayer
  - Meta-Tags
  - Tracking
  - Deutsch & Englisch und weitere in der Zukunft
- Booking
  - Bed & Breakfast
  - Packages
  - Activities
- Administration
  - Texte editieren
- Die Seite
  - darf kleiner sein aber soll complett sein, fertig aussehen
  - die Seite soll so ein paar Jahre bleiben
- Woran gespart werden kann
  - Aktivitäten können auf Surfing, Mountenbiken und Reiten reduziert werden
  - Yoga hat eine Unterseite, die wegfallen soll

- Zeitraum
  - bis 11. Januar
  - 8 Wochen

# Project Todos

## MVP Release

- [ ] Kids Welcome
  - [ ] neue Fotos austauschen
- [ ] Unterkunft
  - [ ] Textänderungen (siehe Ordner)
- [ ] SEO
  - [ ] Da Silver Camp Portugal -> Da Silve Surfcamp Portugal
- [ ] Home
  - [ ] ueber den 3 booking banner: ueberschrift: Online Booking:
  - [ ] die untere Ueberschrift Booking weg
- Arrival
  - [ ] link hiter der Kart auf Google Map
- Formulare
  - [ ] Domain umstellen
  - [ ] Anreise ist kein muss-Feld und beliebiges Format
  - [ ] Name & Email
  - [ ] Contact form fix layout
- [ ] Menu
  - [ ] Buchen durch Booking ersetzen
- [ ] Gallery plus
  - [ ] multiple image size
  - [ ] Overlay picture
  - [ ] Single Pic for Mobile  

## Online Deploy

- [ ] Online Deploy
  - [ ] Switch DNS dasilva-surfcamp.de -> auf new Website zeigen
  - [ ] Check Rewrite Rules
  - [ ] Re-configure PROXY cloudflare

## Backlog

- [ ] Text work
  - [ ] Missing: Corona in English
  - [ ] Review happy horses in 
  - [ ] Review impress, terms and privacy DE/ EN
- [ ] SEO english version
  - [ ] Home menu
  - [ ] Action menu
  - [ ] Prices, arrival & rest
  - [ ] Site map in footer 
- [ ] Optimisations (technical)
  - [ ] Booking from URl
  - [ ] Preload fonts
  - [ ] Skeletons
  - [ ] Images multisizes
    - [ ] all heros
    - [ ] galerie bed and breakfast
    - [ ] others...
  - [ ] Error pages
- [ ] Home
  - [ ] Team
  - [ ] Instagram
  - [ ] Google rating
  - [ ] Footer: partners in crime
- [ ] Online Deploy
  - [ ] Switch DNS dasilva-surfcamp.de
  - [ ] Check Rewrite Rules
  - [ ] Re-configure cloudflare
  - [ ] Error pages
- [ ] Portugues Version... Franz, Span.
- [ ] Menu UX
  - [ ] Topnav: align language Menu
  - [ ] Hamburger: select whole row
  - [ ] Hamburger: Fix language switch
- [ ] Arrival
  - [ ] map interaction (goolge maps)
- [ ] Booking
  - [ ] Respond soon, before sending mail
  - [ ] Booking Datepicker
  - [ ] Booking vanitise user input
  - [ ] Capture
- [ ] Call Button a la Whatsapp
  - [ ] Recherche
  - [ ] Test
  - [ ] Installation

## Done

- [x] Layout Optimizations
  - [x] price page: text centered
  - [x] booking form: align fields
- [x] SEO
  - [x] Title & meta descriptions & meta image
  - [x] H1 headline optimisation
  - [x] Home menu
  - [x] Action menu
  - [x] Prices, arrival & rest
  - [x] Favicon
- [x] Surf Bar
- [x] English Version
- [x] Home
  - [x] Hero
  - [x] Masonry
  - [x] Welcome
  - [x] Video
  - [x] Booking
  - [x] Specials
  - [x] Galerie
- [x] Masonry
  - [x] Resonsive Design
  - [x] Links
- [x] Gallery
  - [x] 3 columns
  - [x] responsive
  - [x] default alt attribute
- [x] Internationalisation
  - [x] Concept
  - [x] Switch same to same page
  - [x] Switch to non existing page
- [x] Booking
  - [x] online Booking link
  - [x] Booling Form
  - [x] Booking Validation
  - [x] Booking Send Mail
  - [x] Booking Contact Form
  - [x] Booking Success Response
  - [x] Booking Secure Form
- [x] Travel Directions / Arrival
  - [x] all Sections
  - [x] map
- [x] Footer
  - [x] Language icons
  - [x] Social media links
- [x] Header
  - [x] Navigation bar
  - [x] Logo
  - [x] Hambuger menu
  - [x] Scale properly
  - [x] All links for Hamburger
  - [x] Fix overlay Hamburger
  - [x] Language switch
  - [x] Activate whole row
  - [x] Hamburgermenu: Disable all links below
- [x] Online Administration
  - [x] Detect browser language and switch
  - [x] Switch domain
  - [x] Default page: German home
- [x] FAQ
- [x] Imprint
- [x] Terms & Conditions
- [x] Privacy Policy
  - [ ] https://www.datenschutz.org/datenschutzerklaerung-website/
- [x] Trail Running
- [x] Skateboarding
- [x] Yoga
- [x] Surroundings
- [x] Happy Horses
- [x] Page Pricing
  - [x] Table Macro
  - [x] all Sections 
- [x] Video Macro
- [x] Surfing
- [x] Page Bed & Breakfast
  - [x] Hero
  - [x] Welcome
  - [x] Galerie
  - [x] Rooms
  - [x] Related links
- [x] Fragment related links
  - [x] Images
  - [x] Mouse over
- [x] Headless CMS
  - [x] CMS Requirement List
  - [x] Checkout Ghost https://ghost.org
  - [x] Decide on CMS
- [x] Site Generator
  - [x] Decide on Site Generator
  - [x] Checkout 11ty https://www.11ty.dev
- [x] Fragment galerie


# Research

## SEO

### Tools

- [Google Search Preview](https://seositecheckup.com/seo-audit/google-search-results-preview-test/)
  - https://seositecheckup.com/seo-audit/google-search-results-preview-test/dasilva.alabaster.de
- [SEO Online Checker](https://freetools.seobility.net/de/seocheck/dasilva.alabaster.de)
- [Meta Imaage Maker](https://www.kapwing.com/studio/editor)
-  [fav icon maker](https://www.favicon-generator.org)

### Meta description
  - [good meta description examples](https://www.seobility.net/de/wiki/Meta-Description#Positive_Effekte_einer_guten_Meta-Description)
  - [meta description instruction](https://www.seobility.net/de/blog/die-perfekte-seo-meta-description/)
  - 1000pixel ~ 156 characters
  - must be human readalbe
  - no double words
  - must include main key word (e.g. surfing)
  - `Urlaub in Portugal in einem typischen portugiesischen Landhaus in Standnähe | Surfschool | Mountainbike | Pferde reiten | Kinder willkommen`

### Meta Title
  - 580px, 70 characters
  - No keyword stuffing but 3 relevant key words. 1st key word most important
  - Build a sentence, be crisp
  - Don't use a dash (-) but rather a pipe (|)
  - `Da Silva Camp Portugal » Surfing und Mountainbike mit der Familie`


## Image Sizes Dynamically

To serve different versions scaled for different devices, you need to use the HTML srcset attribute in your img tags, to specify more than one image size to choose from.

```html
<img srcset="large-img.jpg 1024w,
middle-img.jpg 640w,
small-img.jpg  320w"
src="small.jpg"
/>
```

```js
const configs = [
    {width: '20%', rename: {suffix: '@1x'}},
    {width: '40%', rename: {suffix: '@2x'}},
    {width: '60%', rename: {suffix: '@3x'}},
    {width: '80%', rename: {suffix: '@4x'}},
    {width: '100%', rename: {suffix: '@5x'}}
]
const images = [
  path.join(__dirname, 'aileen.jpg'),
  path.join(__dirname, 'kevin.jpg')
]

generateResponsiveImages(images, configs)
```

### Responsive Images Generator

https://github.com/felixrieseberg/responsive-images-generator

### 11ty Image Generator

https://www.11ty.dev/docs/plugins/image/


## XHR, Fetch and CORS

Mozilla Resources:
- [XHR](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- youtube showcasing fetch api: https://www.youtube.com/watch?v=FN_ffvw_ksE

## Maps

- [Mapbox](https://github.com/mapbox/mapbox-gl-directions/blob/master/API.md) works with [Open Street Map](https://www.openstreetmap.org/#map=7/39.602/-7.839)
- [Mapbox Directions](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-directions/)
## Instagram Integration

- https://www.instagram.com/dasilvasurfcamp/
- #dasilvasurfcamp
- Benutzerkonto:
dasilvasurfcamp (17841401066982260)

- dev instructions: https://developers.facebook.com/docs/instagram/oembed
- javascript lib: https://github.com/stevenschobert/instafeed.js
- node module: https://www.npmjs.com/package/node-instagram

- To get a Client Access Token, sign into your App Dashboard and navigate to Settings > Advanced > Security > Client Token.


GET http://graph.facebook.com/17841401066982260/media


## CMS Requirements

| **Feature** | **Ghost** | **Strapi** |
|---|---|---|
| i18n | + | - |
| images | ? | - |
| graphql | ? | + |
| sqlite | + | + |
| nodejs | + | + |
| hosted | + | - |
| self hosted | + | + |
| tested | ? | + |

## Site Generator Requirements

| **Feature** | **Gatsby** | **Eleventy** |
|---|---|---|
| bookinglayer integration | ? | ?

## Web Scraper and Crawler

- https://www.octoparse.com/blog/top-20-web-crawling-tools-for-extracting-web-data

## Multilingual with 11ty

- [Languag Switcher Multilangual Jamstack ](https://www.webstoemp.com/blog/language-switcher-multilingual-jamstack-sites/)

## Lightbox

- [w3school](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox)

## Dropdown Menu

- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_hover


## Masonry

- Colocate Desandro
  - https://github.com/desandro/colcade
  - https://codepen.io/gitmathub/pen/LYZaMKK
- Flexamasonry
  - https://github.com/gilbitron/flexmasonry
  - pure css
- Bricks
  - https://github.com/callmecavs/bricks.js
  - Fixed width
  - fast
- Justified Gallery
  - https://github.com/miromannino/Justified-Gallery
  - fixed height

- Hover https://www.w3schools.com/howto/howto_css_image_overlay.asp

## Ghost CMS

- Docs: https://ghost.org/docs/
- Ghost + 11ty: https://ghost.org/changelog/eleventy/
- Ghost 11ty Starter: https://github.com/TryGhost/eleventy-starter-ghost/
- Export from Wordpress to Ghost: https://ghost.org/tutorials/wordpress-to-ghost/

- Export from Ghost to 11ty: https://github.com/reverentgeek/ghost-to-eleventy-exporter


## Booking Layer

https://www.bookinglayer.com

- direct link to bed and breakfast for a couple in English, from the March 1st:
 - https://da-silva-bike-surf-camp.bookinglayer.io/frontoffice/#/product/59455?lang=en&start=2021-03-01&duration=10&couple=1 


## CDN

https://hostingcrown.com/best-image-cdn

### cloudflare

https://www.cloudflare.com/

Check which name server is respondig

```shell
dig -t NS dasilva.alabaster.de
```

### unpack

- https://unpkg.com
- for npm packages
- hosted on cloudflare + google cloud
- example: `<script src="https://unpkg.com/colcade@0/colcade.js"></script>`


### imageresizerio

- https://imageresizer.io/demo
- user: mat@alabaster.de
- -2020-1

- admin interface:
- https://dashboard.imageresizer.io/media


## CSS

- Seamless Responsive Photo Grid
 - https://css-tricks.com/seamless-responsive-photo-grid/

## Lazy Loading

### Iframe

- https://codepen.io/m3g4p0p/pen/oepWVR

```html
  <iframe src="video-player.html" title="..." loading="lazy"></iframe>
```
- iframe tips
  - https://web.dev/iframe-lazy-loading/

### Youtube 

- lite-youtube-embed claims to load 200x faster
  - https://github.com/paulirish/lite-youtube-embed

### Preloading fonts

```html
<link rel="preload" as="font" href="{% assetsUrl %}/fonts/tuitypelight-regular.woff2" type="font/woff2" crossorigin="anonymous">
```

# Loadtest

- https://alabaster.de/load-test/

## Speed results

*Ohne Cloudflare*
![](docs/images/load-01-surfcamp.jpg)
*Cloudflare*
![](docs/images/load-cloudflare.jpg)
![](docs/images/load-02-alabaster.jpg)
![](docs/images/load-03-babylon.jpg)



## Testing

test image loading speed
```bash
# dasilve surfcamp
curl -o /dev/null -s -w %{time_total}\\n  https://www.dasilva-surfcamp.de/wp-content/uploads/2016/05/portugal_surfcamp-e1586447532869-1200x900.jpg

# alabaster
curl -o /dev/null -s -w %{time_total}\\n  https://alabaster.de/load-test/images/portugal_surfcamp-e1586447532869-1200x900.jpg
```

resize to 228 height
```
curl -o /dev/null -s -w %{time_total}\\n  https://im.ages.io/4FtAEiH1l1\?height\=228
```

### Speedtest tool

- https://www.dotcom-tools.com/website-speed-test.aspx

# Credits

- country icons
  - https://www.svgrepo.com/vectors/portuguese/
  - openstreetmap.org
