---
sidebar_position: 3
---

# Working in studio repository

This document describes the process for running this application on your local computer.

## Getting started

This site is powered by Node.js! :sparkles: :turtle: :rocket: :sparkles:

It runs on macOS, Windows, and Linux environments.

You'll need Node.js to run the site. Check the version in `package.json`. To install Node.js, [download the "LTS" installer from nodejs.org](https://nodejs.org). If you're using [`nodenv`](https://github.com/nodenv/nodenv), read the [`nodenv` docs](https://github.com/nodenv/nodenv#readme) for instructions on switching Node.js versions.

Once you've installed Node.js (which includes the popular `npm` package manager), open Terminal and run the following:

```
sh
git clone https://github.com/open-threed/studio.git
cd studio
pnpm install
pnpm run dev
```

You should now have a running server! Visit [localhost:5173](http://localhost:5173) in your browser.

When you're ready to stop your local server, type <kbd>Ctrl</kbd>+<kbd>C</kbd> in your terminal window.

## Site structure

This site was originally a React web application. With the 3D render fully built with [three.js](https://threejs.org/) and [pmndrs](https://pmnd.rs/) technologies. The user interface is completly build with [shadcn/ui](https://ui.shadcn.com/), [radix-ui](https://www.radix-ui.com/) and [tailwindcss](https://tailwindcss.com/).

