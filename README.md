# Projet

That's a boardgame project.

# Stack Technique

- [NodeJS](https://nodejs.org/en/download) (v12 or above)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 or above)
- [Sqitch](https://sqitch.org/download) (v1 or above)

The above tools are necessary to make the API work. They are to be installed before launching the project.


# Installation

Clone the repository
```bash
git clone git@github.com:Dananando/boardgame-Dananando.git
```
Then install the npm dependancies

```sql
npm install
```

Create the .env and sqitch.conf files thanks to the .example files.
Then create a PSQL DataBase and deploy the sqitch project.

```bash
createdb boardgame
sqitch deploy db:pg:boardgame
```

Configure PSQL (or supply the relevant environment variables) so that the `createdb` and `sqitch` commands can be executed correctly.


# Test/demo data

In order to set up a few test datas, use the following command :
```bash
psql -d boardgame -f ./data/boardgameseed.sql
```

# Launch the project

```bash
npm start
```

