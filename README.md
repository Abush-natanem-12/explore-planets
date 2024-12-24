# Habitable Planets Finder

This project filters habitable planets from a dataset of exoplanets based on certain criteria. The dataset is provided in a CSV file named `keeplers_data.csv`.

## Features

- Reads a CSV file containing planet data.
- Filters planets based on:
  - Confirmed status (`koi_disposition === "CONFIRMED"`).
  - Stellar flux (`koi_insol`) between 0.36 and 1.11.
  - Planetary radius (`koi_prad`) less than 1.6 Earth radii.
- Logs the total number of habitable planets and their names.

## Prerequisites

- [Node.js](https://nodejs.org/) installed.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
