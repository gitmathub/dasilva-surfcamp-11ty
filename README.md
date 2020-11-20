# Advanced Static Site Demo

This is a more advanced demo of a static site built with Eleventy. It has the following additional features, compared with the simple demo:

- SASS for styling
- Rollup as a JavaScript bundler
- Nunjucks for template inheritance and shortcodes
- Data sources to create pages dynamically
- Custom template functions
- Customized error pages

## Usage

### Local/Dev mode

Run the following commands:

```
npm install
NEWS_API_KEY=yourNytimesApiKey npm run fetch-news
npm run dev
```

Note: The `yourNytimesApiKey` can be obtained from https://developer.nytimes.com/apis.

### Production

The production build is similar to the dev mode:

```
npm install
NEWS_API_KEY=yourNytimesApiKey npm run fetch-news
npm run build
```

This will create all website files in the `dist/` folder. These files can then be deployed to a file server or an S3 bucket. See the `.gitlab-ci.yml` and `cloudformation.yml` files to see a working CI/CD example. You can see this website at http://tuid-dev-static-site-demo.s3-website.eu-central-1.amazonaws.com/.

The delivery is usually implemented through a CDN and/or a reverse proxy. (However, this is not implemented in this demo.)
# dasilva-surfcamp-11ty
# dasilva-surfcamp-11ty
