---
title: 修改表
---

## 定义

```sql
alter table 表名
```

## 改名

### 更改表名

```sql
exec sp_rename oldname,newname
```

### 更改列名

```sql
exec sp_rename 'BiaoMing.oldname',newname
```

## 添加/删除

### 向表内添加一列Cellphone

```sql
alter table Cuetomer
add Cellphone char(10)
```

### 删除Cuetomer表的Cellphone列

```sql
alter table Cuetomer
drop column Cellphone
```

## 修改列

### 修改列的数据类型

```sql
alter table 表名
alter column 表名 数据类型
```

### 修改某列是否允许为空

```sql
alter table Cuetomer
alter column Cellphone char(11) not null
```

### 向Cuetomer表的CuetomerName列添加一个名为c1的唯一键约束

```sql
alter table Cuetomer
add constraint c1 unique(CuetomerName)
```

## 约束

### 给表加一个唯一键约束

```sql
alter table Cuetomer
add unique(CuetomerName)
```

### 向Cuetomer表的sex列添加一个名为df_sex的约束，要求默认值为they

```sql
alter table Cuetomer
add constraint df_sex unique(sex) deflut 'they'
```

### 删除约束df_sex

```sql
alter table Cuetomer
drop constraint df_sex
```

也可以写为

```sql
alter table Cuetomer
drop df_sex
```
