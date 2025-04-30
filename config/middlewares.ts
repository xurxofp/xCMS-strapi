type EnvFn = (key: string, defaultValue?: any) => string | number | boolean;

export default ({ env }: { env: EnvFn }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src":  ["'self'", "https:"],
          "img-src":      ["'self'", "data:", "blob:", env("CDN_URL")],
          "media-src":    ["'self'", "data:", "blob:", env("CDN_URL")],
          // anula la directiva upgradeInsecureRequests (opcional)
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::public',
];
