## 线性结构及其算法

#### 静态数组

数组是线性数据结构，使用数组存储的数据会排成像一条线一样：

用**一组连续的内存空间**，来存储一组具有**相同类型**的数据

​	数组初始化 长度固定

栈内存（变量）和堆内存（数据）

```java
int data = new int[5]
```

data 变量名在栈内存（堆内存中的首地址）

数组在堆内存，开始的内存地址首地址

随机访问性能很好 [O(1)]：data[idx] 元素内存地址 = base_addr + index * data_type_size

随机修改内存元素的复杂度[O(1)]



随机新增元素：

	1. 申请新的内存空间 比原来大1
 	2. 拷贝原元数组的元素



时间复杂度： O（n）

空间复杂度： O（n）

随机删除元素：

1. 申请新的内存空间，比原来小1
2. 拷贝数据 （不包含之前的数据）



时间复杂度： O（n）

空间复杂度： O（n）



结论：

1. 数组的随机读写性能比较好
2. 数组的随机删除和新增性能不是很好



二次封装内置函数：

将常见操作封装到Class 里面（类）



Class ArrayList

data

size：记录数组中存在的数据

capacity

CRUD： Create Retrieve Update Delete



时间复杂度：

​	循环代码运行最大的次数 size==datalength && idx = 0

​	新增： O（n）

​	addFirst： O（n）

​	addLast：O（1）

​	读：

​	Get：O（1）

​	contains： O（n）

​	find：O（n）

​	remove：index =0 && size=datalength O（n）

​	remove last： size -1 O（1）





空间复杂度：O（1）

### 动态数组



扩容：

1， 创建一个新的容量为2倍临时数组

2 .  将原来的元素拷贝到新数组中

3. 将新数组覆盖老数组



缩容：

1， 创建一个新的容量为1/2倍临时数组

2 .  将原来的元素拷贝到新数组中

3. 将新数组覆盖老数组



删除时注意使用 = null GC回收



均摊时间复杂度：

​	addLast： 扩容机制 时间复杂度O（1）

​	removeLast ： O（1）

​	




























