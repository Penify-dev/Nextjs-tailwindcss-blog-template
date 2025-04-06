/**
 * Generates the manifest configuration for a Next.js application.
 *
 * @returns {Object} - The manifest configuration object.
 * @property {string} name - The name of the application.
 * @property {string} short_name - A shorter version of the application name, used in places where space is limited.
 * @property {string} description - A brief description of the application.
 * @property {string} start_url - The URL that the browser loads when opening the application.
 * @property {string} display - Defines how the web app should be displayed to users. Possible values are 'fullscreen', 'standalone', 'minimal-ui', and 'browser'.
 * @property {Array<Object>} icons - An array of icon objects, each representing an image that can be used by browsers on homescreens.
 *   @property {string} src - The URL of the icon file.
 *   @property {string} sizes - A string indicating the size of the icon in pixels.
 *   @property {string} type - The MIME type of the icon file, typically 'image/png'.
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