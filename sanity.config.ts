import {defineConfig} from 'sanity';
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  name: 'default',
  title: 'kreativehorizon.com',
  basePath: "/admin",
  apiVersion: '2021-03-25',
  projectId: 'laarr84g',
  dataset: 'production', // process.env.ENV === 'development' ? 'development' : 'production',
  useCdn: true,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    visionTool(),
    sanityTutorialsWidget(),
    projectInfoWidget(),
    projectUsersWidget(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'kreativehorizon.com',
              apiId: process.env.NETLIFY_APP_ID!,
              buildHookId: process.env.NETLIFY_BUILD_HOOK!,
              name: 'kreativehorizon-com',
              url: 'https://kreativehorizon.com',
            }
          ]
        })
      ]
    })
  ]
})
