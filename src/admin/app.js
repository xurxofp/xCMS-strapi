import { setPluginConfig, defaultHtmlPreset } from '@_sh/strapi-plugin-ckeditor';
import { PictureEditing } from 'ckeditor5';

export default {
    register() {
        defaultHtmlPreset.editorConfig.plugins.push(PictureEditing);

        setPluginConfig({ presets: [defaultHtmlPreset] });
    },
};