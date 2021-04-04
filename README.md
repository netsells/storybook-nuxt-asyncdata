# @netsells/storybook-nuxt-asyncdata

This package allows you to provide `asyncData` in your stories to mock fetched data in your page components.

## Installation

```sh
$ yarn add -D @netsells/storybook-nuxt-asyncdata
``` 

## Usage

### Stories

Simply import the function from the package and wrap your story definition, then you can provide an `asyncData` method to return your static data in the format you would in your page.

```js
import HomePage from './HomePage';
import mockAsyncData from '@netsells/storybook-nuxt-asyncdata';
import homepageData from '../../../tests/fixtures/homepage-data';
import latestArticles from '../../../tests/fixtures/latest-articles';

export default {
    component: HomePage,
};

export const homePage = (args = {}, { argTypes = {} }) => mockAsyncData({
    props: Object.keys({ ...args, ...argTypes }),

    components: { HomePage },

    asyncData() {
        return {
            page: homepageData,
            latestArticles: latestArticles,
        };
    },

    template: `
        <home-page v-bind="$props" />
    `,
});
```
