module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Prevent unsafe JSX props like dangerouslySetInnerHTML',
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name === 'dangerouslySetInnerHTML') {
          context.report({
            node,
            message: 'Avoid using dangerouslySetInnerHTML due to XSS risks.',
          });
        }
      },
    };
  },
};