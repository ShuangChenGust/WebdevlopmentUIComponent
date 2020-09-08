// 小易给你一个包含n个数字的数组。你可以对这个数组执行任意次以下交换操作：
// 对于数组中的两个下标i,j(1<=i,j<=n)，如果为奇数，就可以交换a_i和a_j。

// 现在允许你使用操作次数不限，小易希望你能求出在所有能通过若干次操作可以得到的数组中，字典序最小的一个是什么。

Py:

n = int(input())
data = [int(a) for a in input().split()]
for i in range(0,n):
    if data[i]%2 == 0:
        for j in range(i+1,n):
            if data[j]%2 != 0:
                data.sort()
    else:
        for j in range(i+1,n):
            if data[j]%2 == 0:
                data.sort()
    print(data[i],end=" ")

    // Definition and Usage
    // The sort() method sorts the list ascending by default.
    
    // You can also make a function to decide the sorting criteria(s).
    1、内置函数sort（）

    原型：sort（fun，key，reverse=False）
    
    参数fun是表明此sort函数是基于何种算法进行排序的，一般默认情况下python中用的是归并排序，并且一般情况下我们是不会重写此参数的，所以基本可以忽略；
    
    参数key用来指定一个函数，此函数在每次元素比较时被调用，此函数代表排序的规则，也就是你按照什么规则对你的序列进行排序；
    
    参数reverse是用来表明是否逆序，默认的False情况下是按照升序的规则进行排序的，当reverse=True时，便会按照降序进行排序。

全是奇数：返回原数组
全是偶数：返回原数组
否则：排序后输出
描述
sorted() 函数对所有可迭代的对象进行排序操作。

sort 与 sorted 区别：

sort 是应用在 list 上的方法，sorted 可以对所有可迭代的对象进行排序操作。

list 的 sort 方法返回的是对已经存在的列表进行操作，无返回值，而内建函数 sorted 方法返回的是一个新的 list，而不是在原来的基础上进行的操作。


def sort_f(alist):
    odd ,even = 0,0
    for i in alist:
        if i%2 == 0:
            odd+=1
        else:
            even+=1
        if odd != 0 and even != 0:# 有奇数有偶数，直接排序
            return sorted(alist)
    return alist
 
n = int(input())
b = list(map(int,input().split()))
for i in sort_f(b):
    print(i,end=' ')



///14
小易在维护数据的时候遇到一个需求，具体来说小易有一系列数据，这些数据了构成一个长度为n的数字序列，接下来小易会在这个序列上进行q次操作。
每次操作有一个查询的数字x，小易需要将序列数据中所有大于等于x的数字都减一，并输出在本次操作中有多少个数字被减一了。
小易犯了难，希望你能帮帮他。

# -*- coding:utf-8 -*-
class Solution:
    def IsPopOrder(self, pushV, popV):
    # write code here
        stack = []
        while popV:
            if pushV and popV[0] == pushV[0]:
                popV.pop(0)
                pushV.pop(0)
            elif stack and stack[-1] == popV[0]:
                stack.pop()
                popV.pop(0)
            elif pushV:
                stack.append(pushV.pop(0))   
            else :
                return False
        return True

//

小易学习了辗转相除法之后，就开始实践这个算法在求解最大公约数上。
牛牛给小易出了一道不同寻常的求解最大公约数: 求解a和b的最大公约数，但是a和b的范围特别大。
小易遇到了困难，向聪明的你寻求帮助，希望你能帮帮他。
def hcf(a, b):
    a, b = min(a, b), max(a, b)
    if b % a == 0:
        return a
    else:
        return hcf(a, b % a)
 
a = int(input())
b = int(input())
print(hcf(a, b))

Js:
//我看到没有人使用JS做，我来解决一下
let bfc = (a, b) => {
    if (b === 0) {
        return a
    } else {
        return bfc(b, parseInt(a % b))
    }
}
console.log(bfc(9, 6))

# 小易给定了一个长度为n的数字序列，对于每一个，小易希望能求解出所有长度为k的连续子序列的最大值中的最小值。
def mininmax(nums):
    dp=[]
    for i in range(len(nums)-1):
        dp.append(max(nums[i],nums[i+1]))
    return dp
n=int(input())
nums=list(map(int,input().split()))
res=[]
while nums:
    res.append(min(nums))
    nums=mininmax(nums)
print(" ".join(str(i) for i in res))



小易给定了一个长度为n的数字序列，对于每一个，小易希望能求解出所有长度为k的连续子序列的最大值中的最小值。
def mininmax(nums):
    dp=[]
    for i in range(len(nums)-1):
        dp.append(max(nums[i],nums[i+1]))
    return dp
n=int(input())
nums=list(map(int,input().split()))
res=[]
while nums:
    res.append(min(nums))
    nums=mininmax(nums)
print(" ".join(str(i) for i in res))