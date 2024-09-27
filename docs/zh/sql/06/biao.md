---
title: 第六章 表的创建与管理
priority: 2
---

# 表的创建与管理

表是数据库的对象，在诸多的对象中，最重要的就是表

## 表的基本概念

表是由数据按一定的顺序和格式构成的数据集合，是组成数据库的基本元素。

### 表结构
- 组成表的各列的名称及数据类型，统称为表结构

### 外键
- 不是当前表的主键
- 参照了其他表的主键列/与其他表的主键列相对应
- 他就是当前表的外键

### 建表

create table Department
(
    表名+类名+数据类型
)

```sql
create table Department
(
    DepartmentID char(4) primary key,
    DepartmentName char(4) foreign key references Title(TitleID)
)
```

- 主键：primary key
- 外键：foreign key
- 唯一键：unique
- 默认值：default

```sql
DepartmentName char(4) foreign key references Title(TitleID)
外键，参照了Title表的TitleID
简略写法：
DepartmentName char(4) foreign key(TitleID)
```

### 创建班级class表

```sql
create table class
(
    ClassID char(8) primary key,
    ClassDep char(4) foreign key,
    ClassTeacherID char(10) foreign key,
    ClassName nvarchar(20) ,
    Amount int
)
```

### 唯一键 样例
```sql
ClassName nvarchar(20) unique,
```

### 默认值 4
```sql
ClassName nvarchar(20) default '4',
```