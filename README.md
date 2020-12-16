CMS for Da Silva Surfcamp

- [Anforderungen](#anforderungen)
- [Project Todos](#project-todos)
- [Research](#research)
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
  - Aktivitäten können auf Surfen, Mountenbiken und Reiten reduziert werden
  - Yoga hat eine Unterseite, die wegfallen soll

- Zeitraum
  - bis 11. Januar
  - 8 Wochen


# Project Todos

- [ ] Internationalisation
  - [x] Concept
  - [x] Switch same to same page
  - [x] Switch to non existing page
  - [ ] Default page: German home
  - [ ] Detect browser language and switch
- [ ] Header
  - [x] Navigation bar
  - [x] Logo
  - [x] Hambuger menu
  - [ ] Scale properly
  - [ ] All links for Hamburger
  - [ ] Language switch
- [ ] Footer
  - [ ] Language icons
  - [ ] Social media links
  - [ ] Site map (Generate all Links)
- [ ] Masonry
  - [x] Resonsive Design
  - [ ] Links
  - [ ] Lightbox
  - [ ] Loader
- [ ] Galery
  - [x] Responsive Design
  - [ ] Overlay picture
  - [ ] Single Pic for Mobile
- [x] Fragment galerie
- [ ] Home
  - [x] Hero
  - [x] Masonry
  - [x] Welcome
  - [x] Video
  - [ ] Booking
  - [ ] Specials
  - [x] Galerie
  - [ ] Instagram
  - [ ] Partners
  - [ ] Google rating
  - [ ] Metatags
- [ ] Optimisations
  - [ ] Preload fonts
  - [ ] Skeletons
- [ ] Portugues Version
- [ ] ...other pages
- [ ] Happy Horses
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


# Research

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
