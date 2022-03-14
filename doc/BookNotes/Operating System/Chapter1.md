

## Chapter 1: Process

The OS creates this illusion by virtualizing the CPU. By running one process, then stopping it and running another, and so forth, the OS can promote the illusion that many virtual CPUs exist when in fact there is only one physical CPU.

​	**Time Sharing** of the CPU: allows user to run as many concurrent processes as they would like; the potential cost is performance, as each will run more slowly if the CPU(S) must be shared.

​	**Space Sharing**: a resource is divided (in space) among those who wish to use it.

TO implment virtualization of the CPU, and to implement it well, the OS will need both some low-level machinery and some high-level intelligence.

​	mechanisms (low level machinery) : low-level methods or protocols that implement a needed piece of functionality.



**Context Switch**: gives the OS the ability to stop running one program and start running another on a given CPU



Policies: algorithms for making some kind of decision within the OS.

​	Scheduling policy (using historical information? workload knowledge? performance metrics?)

