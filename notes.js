Bees to Flowers Join Table

Table 1
Bees
PK - bee_id
name: bob thee bee
role: drone, queen
type: african, bumble


Table 2
Flowers
PK - flower_id
name: delila
color: yellow, green
pollencount: 10 pollens, 1 pollens

Bees can go to many flowers

Every time a bee visits a flower
  record it


Join Table
Pollination - auto increent for uid
PK - someUID
beeUID
flowerUID

EXAMPLE TABLE
    beeUID    flowerUID
1     11          4
2      5          3
3


createTable(
  ID INTEGER AUTO INCREMENT PRIMARYKEY
  bee_id INTEGER,
  flower_id INTEGER,
  FOREIGN KEY(bee_id),
  REFERENCES Bees(bee_id)
  )


NOT NUll - means it is required



In order to drop tables and create fresh
tables you must delete everything first

'DELETE FROM order_line_items'
'DELETE FROM products'
