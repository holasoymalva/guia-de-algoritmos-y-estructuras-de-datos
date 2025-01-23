class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def binary_search(left:int, right:int):
            if left > right:
                return -1
            mid = (left+right)//2
            if nums[mid] == target:
                return mid
            if target < nums[mid]:
                return binary_search(left, mid-1)
            else:
                return binary_search(mid+1, right)
        return binary_search(0, len(nums)-1)
