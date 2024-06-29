# CLI MongoDB Seed Tool - Service Station Data

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Inquirer](https://img.shields.io/badge/Inquirer.js-000000?style=for-the-badge&logo=inquirer&logoColor=white)
![Commander.js](https://img.shields.io/badge/Commander.js-7B241C?style=for-the-badge&logo=javascript&logoColor=white)

## Description

This tool allows users to seed a local MongoDB database with New Zealand Z service station data through a command-line interface (CLI).

## Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Inquirer](https://img.shields.io/badge/Inquirer.js-000000?style=for-the-badge&logo=inquirer&logoColor=white)
- ![Commander.js](https://img.shields.io/badge/Commander.js-7B241C?style=for-the-badge&logo=javascript&logoColor=white)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nicolegunn/cli-mongodb-seed-service-stations.git
   cd CLI-service-stations
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:

   Create an .env file in the root directory and add your MongoDB URI:

   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/z_energy
   ```
4. Run the CLI tool:
   ```bash
   npm start
   ```

## Usage

### Seed the database:

```bash
z-cli seed
```
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.