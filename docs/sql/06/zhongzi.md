---
title: 种子与增量
author: Lee
---

## 种子

起始的值，需要为整形

## 增量

每次增加的值

## 代码示例

种子100，增量1

```sql
create table Customer
(
    CustomerID int primary key identity(100,1),
    CustomerName nvarchar(20)
)
```
