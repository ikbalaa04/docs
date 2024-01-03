import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ff8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '601'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a8e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2a3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd9a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e13'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '68f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ff8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a27'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'c6e'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '971'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8ca'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c22'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '37c'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'fa5'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'd19'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '4cd'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '44a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'cf4'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2c3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '825'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5de'),
            routes: [
              {
                path: '/docs/category/get-started',
                component: ComponentCreator('/docs/category/get-started', '9e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/help',
                component: ComponentCreator('/docs/category/help', '998'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Get started/congratulations',
                component: ComponentCreator('/docs/Get started/congratulations', 'c57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Get started/create-a-blog-post',
                component: ComponentCreator('/docs/Get started/create-a-blog-post', 'b57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Get started/create-a-document',
                component: ComponentCreator('/docs/Get started/create-a-document', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Get started/create-a-page',
                component: ComponentCreator('/docs/Get started/create-a-page', '935'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Get started/deploy-your-site',
                component: ComponentCreator('/docs/Get started/deploy-your-site', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Get started/markdown-features',
                component: ComponentCreator('/docs/Get started/markdown-features', '5cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Help/creating-account',
                component: ComponentCreator('/docs/Help/creating-account', '4bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '61c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
