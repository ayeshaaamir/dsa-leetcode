class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        power = 0
        previous = 0
        
        for i in range(len(num)-1, -1, -1):
            value = num[i] * 10**power
            previous += value
            power += 1
            
        sum = previous + k
        result = []
        while sum > 0:
            digit = sum % 10
            sum //= 10
            result.append(digit)
        
        output = []
        for i in range(len(result)-1, -1, -1):
                     output.append(result[i])
        return output
        