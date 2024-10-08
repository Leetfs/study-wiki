---
title: 第五章 数据库的创建与管理
priority: 2
---

## 数据库常用对象

### 系统数据库
- master
- model
- msdb
- tempdb

## 文件和文件组

### 数据库包含的文件

- 主要的数据文件
- 日志文件

## 数据库的创建

### 使用 SSMS 创建

图形化操作，此处略

### 使用 `T-SQL` 语句创建数据库

#### 语法格式：

```sql
CREATE DATABASE 数据库名
[ ON [ PRIMARY ] 
( name = 逻辑文件名, 
  FILENAME = '操作系统文件名'
  SIZE = '大小'
  MAXSIZE = '最大大小'
  FILEGROWTH = '增长量'
) [, ...] 
] 
[ LOG ON 
( 名称 = 逻辑日志文件名, 
  FILENAME = '操作系统日志文件名' 
  [, SIZE = 大小 ] 
  [, MAXSIZE = 最大大小 ] 
  [, FILEGROWTH = 增长量 ] 
) [, ...] 
]
```

## 数据库代码样例

### 创建

```sql
CREATE DATABASE myDatabase
on primary
(
    name = 逻辑文件名, 
    FILENAME = '操作系统文件名'
    SIZE = '大小'
    MAXSIZE = '最大大小'
    FILEGROWTH = '增长量'  
)
log on
(

)
```

### 修改

```sql
ALTER DATABASE myDatabase
remove file
add file
```

### 删除

```sql
DROP DATABASE myDatabase;
```



### 向Student数据库中添加辅助文件extdata.ndf

```sql
ALTER DATABASE Student
ADD FILE 
(
    NAME = extdata,
    FILENAME = 'C:\123456\extdata.ndf',
    SIZE = 8MB,
    MAXSIZE = 50MB,
    FILEGROWTH = 8MB
);
```

### 分离数据库
```sql
exec sp_detach_db myDatabase
```

### 附加数据库

```sql
exec sp_attach_db myDatabase
```

### 给数据库添加快照

```sql
CREATE DATABASE myDatabase_Snapshot ON
(
    NAME = myDatabase_Data,
    FILENAME = 'C:\Path\To\Your\Directory\myDatabase_Snapshot.ss'
)
as snapshot of myDatabase;
```

### 删除数据库快照
```sql
DROP DATABASE myDatabase_Snapshot;
```

### 例：创建一个数据库StudentManagement

```sql
CREATE DATABASE StudentManagement
on primary
(
    name = StudentManagement, 
    FILENAME = 'C:\zedata'
    SIZE = '8mb'
    MAXSIZE = '20mb'
    FILEGROWTH = '10%'  
)
log on
(
  name = logname,
  filename = 'c://......',
  size = 2mb,
  maxsize = UNLIMITED,
  FILEGROWTH = 10%
)

```