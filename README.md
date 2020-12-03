<p align="center">
  <h3 align="center">Chuck Norris Facts</h3>
  <p align="center">
    A Next.js Web App to search for facts on the most badass man alive.
  </p>
  <p align="center">
    <a href="https://nextjs.org/">
      <img src="https://img.shields.io/badge/frontend-Next.js-%23000000?style=for-the-badge&logo=next.js" alt="Built with Next.js">
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/types-typescript-%23007ACC?style=for-the-badge&logo=typescript" alt="Built with Typescript">
    </a>
    <a href="https://chakra-ui.com/">
      <img src="https://img.shields.io/badge/styling-Chakra UI-%23319795?style=for-the-badge" alt="Built with Chakra UI">
    </a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Run App](#run-app)
  - [Preview](#preview)

<!-- ABOUT THE PROJECT -->

## About The Project

This repo was created with Next JS, using Typescript. I chose this framework for its excelent Typescript support, optimizations, static file serving and also for its starter template with Chakra UI and Typescript, which I used as a starting point. Chakra UI was my styling choice for its high customization potential, and the utility-based props approach which is inspired by TailwindCSS, making development faster. And lastly, I used easy-peasy for my state management, purely for storing the user's choice of having LTR or RTL text in local storage.

### Built With

-   Frontend
    -   [Next JS](#319795)
    -   [Typescript](https://www.typescriptlang.org/)
-   Tests
    -   [Cypress](https://www.cypress.io/)
-   Styling
    -   [Chakra UI](https://chakra-ui.com/)
-   Extra packages
    -   [Store: Easy Peasy](https://easy-peasy.now.sh/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

`yarn` installed on your local machine.

### Installation

1. Clone the repo

```sh
git clone https://github.com/TGlide/chuck-norris-facts-nextjs.git
cd chuck-norris-facts-nextjs
```

2. Install Yarn dependencies

```sh
yarn
```

## Usage

### Run App

```sh
yarn start
```

### Preview

You can check out a live preview at: https://chuck-norris-facts-nextjs.vercel.app/

### Run Tests

```sh
yarn run cypress open
```


