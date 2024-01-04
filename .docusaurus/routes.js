import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '7d2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '943'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', 'f7d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', 'a13'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', 'd38'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', 'fb1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', '388'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', 'eec'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '430'),
    exact: true
  },
  {
    path: '/blog/first-blog-post/',
    component: ComponentCreator('/blog/first-blog-post/', '1b4'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/', '78a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', '9a2'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'dca'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/', '551'),
    exact: true
  },
  {
    path: '/blog/tags/facebook/',
    component: ComponentCreator('/blog/tags/facebook/', '05e'),
    exact: true
  },
  {
    path: '/blog/tags/hello/',
    component: ComponentCreator('/blog/tags/hello/', 'ea8'),
    exact: true
  },
  {
    path: '/blog/tags/hola/',
    component: ComponentCreator('/blog/tags/hola/', '5f3'),
    exact: true
  },
  {
    path: '/blog/welcome/',
    component: ComponentCreator('/blog/welcome/', '52b'),
    exact: true
  },
  {
    path: '/search/',
    component: ComponentCreator('/search/', '97d'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '22e'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '58f'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '10f'),
            routes: [
              {
                path: '/docs/aplications/data-source/',
                component: ComponentCreator('/docs/aplications/data-source/', '37d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/aplications/',
                component: ComponentCreator('/docs/category/aplications/', '0db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/connections/',
                component: ComponentCreator('/docs/category/connections/', 'f72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/data-explorer/',
                component: ComponentCreator('/docs/category/data-explorer/', '242'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/maps/',
                component: ComponentCreator('/docs/category/maps/', 'f5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/overview/',
                component: ComponentCreator('/docs/category/overview/', '673'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/quickstart-guides/',
                component: ComponentCreator('/docs/category/quickstart-guides/', 'a74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/settings/',
                component: ComponentCreator('/docs/category/settings/', '732'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorials/',
                component: ComponentCreator('/docs/category/tutorials/', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/workflows/',
                component: ComponentCreator('/docs/category/workflows/', '2f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connections/data-source/',
                component: ComponentCreator('/docs/connections/data-source/', 'b82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-and-analysis/',
                component: ComponentCreator('/docs/data-and-analysis/', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/data-explorer/data-source/',
                component: ComponentCreator('/docs/data-explorer/data-source/', 'e0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/',
                component: ComponentCreator('/docs/getting-started/', 'b1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/map/data-source/',
                component: ComponentCreator('/docs/map/data-source/', '234'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/creating-account/',
                component: ComponentCreator('/docs/overview/creating-account/', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/workspace-overview/',
                component: ComponentCreator('/docs/overview/workspace-overview/', 'bf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart/connect/',
                component: ComponentCreator('/docs/Quickstart/connect/', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart/creating/',
                component: ComponentCreator('/docs/Quickstart/creating/', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Quickstart/workflow/',
                component: ComponentCreator('/docs/Quickstart/workflow/', '357'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/settings/data-source/',
                component: ComponentCreator('/docs/settings/data-source/', '6ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/data-source/',
                component: ComponentCreator('/docs/tutorials/data-source/', '858'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-manual/',
                component: ComponentCreator('/docs/user-manual/', '2e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/welcome/',
                component: ComponentCreator('/docs/welcome/', '318'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/what-is-GeoSIS/',
                component: ComponentCreator('/docs/what-is-GeoSIS/', 'a7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Workflows/data-source/',
                component: ComponentCreator('/docs/Workflows/data-source/', '97f'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
