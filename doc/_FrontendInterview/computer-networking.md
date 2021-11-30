# Computer NetWorking [https://www.nowcoder.com/discuss/807702?type=all&order=recall&pos=&page=1&ncTraceId=&channel=-1&source_id=search_all_nctrack&gio_id=16EF4836BF8A0F8925F3F9D91FA730E0-1638289718121]



### TODO:

​	https://baijiahao.baidu.com/s?id=1707212969156040996&wfr=spider&for=pc



##### 1. TCP报文格式及首部含义？

头部长度：通常为20字节，有选项时更长 

-  这里头部长度的1指代的是32位，即4个字节长度 
-  因此4位的首部长度能够表示60字节 

 报文序号 

-  标识报文中的第一个数据字节的序号 
-  到达2^32-1后，重新回到0开始计数 
-  初始连接请求报文中，SYN标志位也占1，因此第一字节序号为ISN+1 

 确认序号 

-  接收方期望接收的下一个数据字节的序号 
-  ACK为1时有效 

 校验和 

-  由首部和数据一起运算得到，用来校验报文数据是否丢失 

 紧急指针 

-  紧急数据字节号(urgSeq)=TCP报文序号(seq)+紧急指针(urgpoint)−1 
-  正偏移量 

 选项 

-  常见的是MSS(最大报文大小)，指明本端能够接收的最大长度的报文段 

 窗口大小 

-  16位的窗口大小最多能放65536字节 
-  如果想要使用更大的窗口，可以在选项中添加窗口的缩放比例因子来进行扩大，比例为0-14

