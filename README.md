CMS for Da Silva Surfcamp

- [Anforderungen](#anforderungen)
- [Project Todos](#project-todos)
- [Research](#research)
  - [CMS Requirements](#cms-requirements)
  - [Site Generator Requirements](#site-generator-requirements)
  - [Web Scraper and Crawler](#web-scraper-and-crawler)
  - [Multilingual with 11ty](#multilingual-with-11ty)
  - [Masonry](#masonry)
  - [Lazyloading](#lazyloading)
- [Loadtest](#loadtest)
  - [Speed results](#speed-results)
  - [Testing](#testing)
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

- 


# Project Todos

- [x] Headless CMS
  - [x] CMS Requirement List
  - [x] Checkout Ghost https://ghost.org
  - [x] Decide on CMS
- [x] Site Generator
  - [x] Decide on Site Generator
  - [x] Checkout 11ty https://www.11ty.dev
- [ ] Internationalisation
  - [x] Concept
  - [x] Switch same to same page
  - [ ] Switch to non existing page
  - [ ] Default page: German home
  - [ ] Detect browser language and switch
- [ ] Generate all Links
- [ ] Header
  - [ ] Links
  - [ ] Logo
  - [ ] Mobile menu
- [ ] Footer
  - [ ] Language icons
  - [ ] Social media links
  - [ ] Site map
- [ ] Fragment related links
  - [ ] Images
  - [ ] Mouse over
- [ ] Masonry
  - [x] Resonsive Design
  - [ ] Links
  - [ ] Overlay
  - [ ] Loader
- [ ] Fragment galerie
- [ ] Home
  - [x] Masonry
  - [ ] Welcome
  - [ ] Video
  - [ ] Booking
  - [ ] Specials
  - [ ] Galerie
  - [ ] Instagram
  - [ ] Partners
  - [ ] Google rating
  - [ ] Metatags
- [ ] Page Bed & Breakfast
  - [ ] Hero
  - [x] Welcome
  - [ ] Galerie
  - [ ] Rooms
  - [ ] Related links
- [ ] Portugues Version
- [ ] ...other pages

# Research

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

## Lazyloading

- https://codepen.io/m3g4p0p/pen/oepWVR


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



# Ghost CMS

- Docs: https://ghost.org/docs/
- Ghost + 11ty: https://ghost.org/changelog/eleventy/
- Ghost 11ty Starter: https://github.com/TryGhost/eleventy-starter-ghost/
- Export from Wordpress to Ghost: https://ghost.org/tutorials/wordpress-to-ghost/

- Export from Ghost to 11ty: https://github.com/reverentgeek/ghost-to-eleventy-exporter


## Booking Layer

https://www.bookinglayer.com

## CDN

https://hostingcrown.com/best-image-cdn

### cloudflare

https://www.cloudflare.com/

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

```html
  <iframe src="video-player.html" title="..." loading="lazy"></iframe>
```
- iframe tips
  - https://web.dev/iframe-lazy-loading/

### Youtube 

- lite-youtube-embed claims to load 200x faster
  - https://github.com/paulirish/lite-youtube-embed