# Auction CLI Tool

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nicolegunn/seed.git
   cd auction-cli
2. Install dependencies:
    ```bash
    npm install
3. Set up environment variables:
    
    Create a .env file in the root directory and add your MongoDB URI:
    ```env
    MONGODB_URI=mongodb://127.0.0.1:27017/auction_items
4. Run the CLI tool:
    ```bash
    npm start
5. Install globally (optional)
    ```bash
    npm install -g .
## Usage

### Seed the database:
```bash
z-cli seed
```