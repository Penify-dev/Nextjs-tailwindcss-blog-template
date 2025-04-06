/**
 * Returns the manifest object for the Next.js App.
 *
 * @returns {Object} The manifest configuration object.
 *   - {string} name - The full name of the app.
 *   - {string} short_name - A shorter version of the app name.
 *   - {string} description - A brief description of the app.
 *   - {string} start_url - The URL that the browser should load first when it starts the app.
 *   - {string} display - The display mode for the app (e.g., 'standalone', 'fullscreen').
 *   - {Object[]} icons - An array of icon objects to be used in various contexts.
 *     - {string} src - The path to the icon file.
 *     - {string} sizes - The dimensions and type of the icon.
 *     - {string} type - The MIME type of the icon file.
 */
export default function manifest() {
    return {
      name: 'Next.js App',
      short_name: 'Next.js App',
      description: 'Next.js App',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      icons: [
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
          {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
            {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
            {
          src: '/android-chrome-512x512',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }