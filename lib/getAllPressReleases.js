import glob from 'fast-glob';
import * as path from 'path'; // skipcq: JS-C1003

async function importArticle(articleFilename) {
  const { meta, default: component } = await import(
    `../pages/press/press-releases/${articleFilename}`
  );
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
}

export async function getAllPressReleases() {
  const articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'pages/press/press-releases'),
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}
