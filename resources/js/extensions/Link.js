import Link from "@tiptap/extension-link";

export const CustomLink = Link.extend({
  addOptions() {
    return {
      openOnClick: true,
      linkOnPaste: true,
      autolink: true,
      protocols: [],
      HTMLAttributes: {},
      validate: undefined,
    };
  },

  addAttributes() {
    return {
      href: {
        default: null,
      },
      id: {
        default: null,
      },
      target: {
        default: this.options.HTMLAttributes.target,
      },
      hreflang: {
        default: null,
      },
      rel: {
        default: null,
      },
      referrerpolicy: {
        default: null,
      },
      class: {
        default: null,
      },
      as_button: {
        default: null,
        parseHTML: element => element.getAttribute('data-as-button') || element.getAttribute('as_button'),
        renderHTML: attributes => {
          if (! attributes.as_button) {
            return {}
          }

          return {
            'data-as-button': attributes.as_button,
          }
        }
      },
      button_theme: {
        default: null,
        parseHTML: element => element.getAttribute('data-as-button-theme') || element.getAttribute('button_theme'),
        renderHTML: attributes => {
          if (! attributes.button_theme || attributes.button_theme.length === 0) {
            return {}
          }

          return {
            'data-as-button-theme': attributes.button_theme,
          }
        }
      },
    };
  },
});
