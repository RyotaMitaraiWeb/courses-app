# Front-end section
The front-end is written in Angular, using Tailwind CSS for styling.

## Project navigation (``/src/app`` directory)
- ``common`` - contains useful values that are used across the app, such as the ``localStorage`` key for the access token
- ``core`` - contains components, services, and other elements related to core functionality. Core functionality refers to any cross-cutting concern (such as authentication)
- ``features`` - contains components, services, and other elements related to and grouped by specific features of the app. For example, here you will find all components, services, directives, pipes, and so on, that are used to implement course-related features
- ``shared`` - contains UI elements, directives, and so on that are reused throughout the app

## Theming

The theming of the app consists of a custom color palette, specific fonts, and specific icons. All colors and fonts are stored as Tailwind CSS variables.

### Colors
Colors are prefixed with ``app-`` (for example, ``--color-app-blue-300``). The following colors are available in the app:

- ``app-white``
- ``app-gray``
- ``app-blue-[x00]`` where ``x`` is any integer from 1 to 6 (for example, ``app-blue-600``)

### Typography
The following fonts are available:

- ``playfair-display`` (used in headings)
- ``questrial`` (used as body text, default font)

Note that the theming system provides only the fonts themselves. Elements like the font weight, size, and so on must be configured for each component

All fonts are loaded directly from Google Fonts for convenience and are not stored locally within the repository.

### Icons
All icons are provided as separate components, which can be found in the ``shared/icons`` folder. This is done because the app uses a very small portion of the entire icon library and thus including the entire library would be an overkill. All of the icons are taken from Google Fonts / Icons.

Each icon component accepts a ``className`` input, which applies styles directly to the ``<svg>`` icon in those. Note that each icon needs to be given a width and a height in order to be visible (as some icons in the app need to have a different size in different scenarios).

#### Example
```html
<!-- a 24x24 icon that uses the current text color for its fill -->
<app-search-icon className="w-6 h-6 fill-cururent" />
```

