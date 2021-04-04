/**
 * Inject a mixin into the main component that will provide our asyncData;
 *
 * @param {object} story
 * @param {object} story.components
 * @param {Function} story.asyncData
 * @param {object} story.story
 *
 * @return {object}
 */
export default ({ components, asyncData, ...story }) => {
    const [componentName, component] = Object.entries(components)[0];

    const asyncDataMixin = {
        data: asyncData || (() => ({})),
    };

    return {
        components: {
            ...components,
            [componentName]: {
                ...component,
                mixins: [
                    ...component.mixins || [],
                    asyncDataMixin,
                ],
            },
        },
        ...story,
    };
};
