---
icon: question
label: FAQ
---
![](/static/headers/header-15.png)

# Frequently Asked Questions

## Is Retype free to use?

Yes, Retype is free to use with both open-source and commercial projects.

With [Retype Pro](/pro.md), you get the following additional features:

1. Up to 1000 pages can be built
2. The [`Powered by Retype`](/GoL%20frontend/project.md#poweredbyretype) branding can be removed
3. Password protected `private` and `protected` pages

## Can I get a trial license key?

{{ include "snippets/faq-trial-key-request" }}

## How do I install Retype?

Installing Retype is super simple and takes only a few seconds. Please see our [Getting Started](/Node/getting-started.md) guide for detailed installation instructions.

If you ain't got no time for that, just run the following two commands on a folder that contains at least one `.md` file, depending on your preferred [package manager](/Node/getting-started.md#prerequisites).

+++ npm
```
npm install retypeapp --global
retype watch
```
+++ yarn
```
yarn global add retypeapp
retype watch
```
+++ dotnet
```
dotnet tool install retypeapp --global
retype watch
```
+++

## What is page metadata?

The page metadata is an optional block of [configuration](/GoL%20frontend/page.md) that can be placed at the top of any Markdown `.md` page. This block of configuration can also be referred to as the page [Front Matter](https://jekyllrb.com/docs/front-matter/).

The block of page metadata must be the first item at the top of the `.md` page and must be added between `---` lines above and below the configs.

```md sample.md
---
icon: rocket
---
# Your page title here
```

The page metadata is completely optional and typically only required when you want to override the Retype defaults.

You can also add page metadata into a separate `.yml` file, see [page config](/GoL%20frontend/page.md#separate-yml-file) options.
