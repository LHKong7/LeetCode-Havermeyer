# Machanism: Limited Direct Execution

### Overview

In order to virtualize the CPU, the OS needs to share the physical CPU among many jobs running seemingly at the same time.

##### Problem Description: 

**Stragety**: run one process for a little while, then run another one.

By time sharing the CPU, virtualization is achieved

**Challenges**:

1. Performance: how can we implement virtualization without adding excessive overhead to the system
2. Control: how can we run processes efficiently while retaining control over the CPU => more important to OS,



### Technique:



##### Limited Direct Execution

The "direct execution" part of the idea is simple: *just run the program directly on the  CPU*. 


