// path: ./config/plugins.ts

type EnvFn = (key: string, defaultValue?: any) => string | number | boolean;

export default ({ env }: { env: EnvFn }) => ({
  'publisher': {
		enabled: true,
		config: {
			hooks: {
				beforePublish: async ({ strapi, uid, entity }) => {
					console.log('beforePublish');
				},
				afterPublish: async ({ strapi, uid, entity }) => {
					console.log('afterPublish');
				},
				beforeUnpublish: async ({ strapi, uid, entity }) => {
					console.log('beforeUnpublish');
				},
				afterUnpublish: async ({ strapi, uid, entity }) => {
					console.log('afterUnpublish');
				},
			},
		},
	},
    'webhooks': {
        validateUrl: false,
    },
});
