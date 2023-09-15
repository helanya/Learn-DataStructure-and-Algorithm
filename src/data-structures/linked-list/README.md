## 链表（Linked List）

通过指针把它的存储结点连接成一个链

存储结点由两部分组成

  - 数据域
  - 指针域（后继地址）

### 分类

- 单链表
- 双向链表
- 循环链表

### 单链表

- 简单的单链表
  
  - 整个单链表：head
  - 第一个结点：head
  - 空表判断：head == null
  - 当前结点a1：curr

- 带头结点的单链表

  - 整个单链表：head
  - 第一个结点：head->next,head != NULL
  - 空表判断：head->next == NULL
  - 当前结点a1：fence->next（curr隐含）

#### 单链表的运算

- 查找单链表中第i个结点
- 单链表插入

  - 创建新结点
  - 新结点指向右边结点
  - 左边结点指向新结点

- 单链表删除（删除结点x）

  - 用p指向元素x的结点的前驱结点
  - 删除元素x的结点
  - 释放x的空间

#### 单链表运算分析

- 对一个结点操作，必先找到它，用一个指针指向它
- 找单链表中任何一个结点，都必须从第一个结点开始
- 单链表运算的时间复杂度
  - 定位：O(n)
  - 插入：O(n)
  - 删除：O(n)

### 双向链表

为了弥补单链表的不足，产生了双链表，单链表的next仅指向后继结点，不能有效的找到前驱，增加了一个prev指向前驱的指针

#### 双向链表运算

- 插入结点(在p结点后插入元素)
  
  - 创建新结点q
  - q->next = p->next
  - q->prev = p
  - p->next = q
  - q->next->prev = q

- 删除结点（删除p结点）

  - 定位到p结点
  - p->prev->next = p->next
  - p->next->prev = p->prev
  - p->prev = NULL
  - p->next = NULL

### 循环链表

将单链表或者双链表的头尾链接起来，就是一个循环链表。不增加额外开销，给操作带来不少方便，从任意一结点出发能访问其它链表结点。

### 链表的边界条件

几个特殊的处理点：

  - 头指针处理
  - 非循环链表尾结点的指针域保持为NULL
  - 循环链表的尾指针回指头结点

链表处理

  - 空链表的特殊处理
  - 插入或删除结点时指针勾链的顺序
  - 指针移动的正确性