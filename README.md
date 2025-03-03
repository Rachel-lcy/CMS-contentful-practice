## README

`` Goals: Use Contentful CMS plus NESTJS to create a recipe website, for practicing API integration, how to create and display content in the website!

## Getting Started

```bash
npx create-next-app
```

## Installing dependencies:

```bash
npm install
```

React renderer for the Contentful rich text field type(like the recipe method).

```bash
npm install @contentful/rich-text-react-renderer
```

## Running the application locally

```bash
npm run dev
http://localhost:3000
```

## About CMS-contentful

`1.Content model-recipe
`2.published my Media(images)
`3. Add entities(recipes)
`4. Go to setting Menu-check API keys an use it to connect with VsCOde(.env.local)

## Resources

- [ use tailwindCSS cheat sheet](https://nerdcave.com/tailwind-cheat-sheet)

-[ React render for the Contentful rich text](https://www.npmjs.com/package/@contentful/rich-text-react-renderer)

-[Contentful instructions](https://www.contentful.com/developers/docs/references/content-delivery-api/)

-[About URL Slugs information](https://www.contentful.com/seo-guide/urls-redirects/)

## Testing Procedures

### 1. Unit Testing (Jest + React Testing Library)

## 2. Installing dependencies:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest

```

After many times "Errors", I find the next solution:

```bash
npm install --save-dev jest-environment-jsdom
```

```bash
touch jest.setup.js
```

```bash
npm test
```
