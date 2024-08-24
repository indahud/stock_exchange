# ENV
Add DATABASE_URL in `.env` file.

# Dependencies & DB

```Shell
  pnpm i
  pnpm prisma generate
  pnpm prisma db seed
  pnpm run start:dev

```


# Test Coverage

```Shell
  pnpm run test:cov 
```
# API Routes
Strcture
http://localhost:3000/TABLE_NAME/SECTION/:CATEGORY/:PAGE

#### NSE
##### Section: market-movers
http://localhost:3000/nse/market-movers/gainers/1
http://localhost:3000/nse/market-movers/losers/1

##### Section: volume-movers
http://localhost:3000/nse/market-movers/high/1
http://localhost:3000/nse/market-movers/low/1


#### BSE
##### Section: market-movers
http://localhost:3000/nse/market-movers/gainers/1
http://localhost:3000/nse/market-movers/losers/1

##### Section: volume-movers
http://localhost:3000/nse/market-movers/high/1
http://localhost:3000/nse/market-movers/low/1

# Code Quality report
eslint-report.xml