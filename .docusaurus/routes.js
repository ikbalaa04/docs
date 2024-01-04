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
    component: ComponentCreator('/docs', '9d4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'bc0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '053'),
            routes: [
              {
                path: '/docs/aplications/data-source',
                component: ComponentCreator('/docs/aplications/data-source', '7d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/aplications',
                component: ComponentCreator('/docs/category/aplications', 'fcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/connections',
                component: ComponentCreator('/docs/category/connections', '2f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/data-explorer',
                component: ComponentCreator('/docs/category/data-explorer', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/maps',
                component: ComponentCreator('/docs/category/maps', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/overview',
                component: ComponentCreator('/docs/category/overview', 'a36'),
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
                path: '/docs/category/settings',
                component: ComponentCreator('/docs/category/settings', 'a03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorials',
                component: ComponentCreator('/docs/category/tutorials', 'f40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/workflows',
                component: ComponentCreator('/docs/category/workflows', '331'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connections/data-source',
                component: ComponentCreator('/docs/connections/data-source', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-and-analysis',
                component: ComponentCreator('/docs/data-and-analysis', '419'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-explorer/data-source',
                component: ComponentCreator('/docs/data-explorer/data-source', '3ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', 'a24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map/data-source',
                component: ComponentCreator('/docs/map/data-source', 'a19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/creating-account',
                component: ComponentCreator('/docs/overview/creating-account', '870'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/workspace-overview',
                component: ComponentCreator('/docs/overview/workspace-overview', '11e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart/connect',
                component: ComponentCreator('/docs/Quickstart/connect', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart/creating',
                component: ComponentCreator('/docs/Quickstart/creating', 'c71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart/workflow',
                component: ComponentCreator('/docs/Quickstart/workflow', 'ae3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/settings/data-source',
                component: ComponentCreator('/docs/settings/data-source', 'ddf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/data-source',
                component: ComponentCreator('/docs/tutorials/data-source', 'ca9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-manual',
                component: ComponentCreator('/docs/user-manual', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/welcome',
                component: ComponentCreator('/docs/welcome', 'a64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/what-is-GeoSIS',
                component: ComponentCreator('/docs/what-is-GeoSIS', 'b2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Workflows/data-source',
                component: ComponentCreator('/docs/Workflows/data-source', '14e'),
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
