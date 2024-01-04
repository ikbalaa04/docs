import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4d0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'bdf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e58'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ed2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c53'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd51'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b57'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4df'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'd79'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '8b4'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '95a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'b04'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '27d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'c58'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'f27'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '4d0'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '0d5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '703'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '09c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fff'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '82a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7ef'),
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
                path: '/docs/category/quickstart-guides',
                component: ComponentCreator('/docs/category/quickstart-guides', '810'),
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
                path: '/docs/Get started/Quickstart/connect',
                component: ComponentCreator('/docs/Get started/Quickstart/connect', '960'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Get started/whatisGeoSIS',
                component: ComponentCreator('/docs/Get started/whatisGeoSIS', '770'),
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
              },
              {
                path: '/docs/welcome',
                component: ComponentCreator('/docs/welcome', 'a64'),
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
    component: ComponentCreator('/', '1a4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
