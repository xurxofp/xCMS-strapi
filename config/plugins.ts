// path: ./config/plugins.ts

type EnvFn = (key: string, defaultValue?: any) => string | number | boolean;

export default ({ env }: { env: EnvFn }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-aws-s3-seo',
      providerOptions: {
        baseUrl: env('CDN_URL'),
        rootPath: env('CDN_ROOT_PATH'),
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: env('AWS_REGION'),
          params: {
            // ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET'),
          },
        },
        formats: [
          { name: 'webp', options: { quality: 70 } }, // WebP con calidad 80
          { name: 'avif', options: { quality: 70 } }, // AVIF con calidad 60
          { name: 'jpg', options: { quality: 50 } },  // JPG con calidad 90
        ],
        sizes: [
          { name: 'thumbnail', width: 96 },
          { name: 'small',     width: 300 },
          { name: 'medium',    width: 960 },
          { name: 'large',     width: 1920 },
        ],
      },
    },
  },
});
