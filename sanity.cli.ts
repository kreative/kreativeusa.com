import {defineCliConfig} from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'laarr84g',
    dataset: 'production', //process.env.ENV === 'development' ? 'development' : 'production',
  }
})
