def romanizer(numbers):
    roman_numbers = []   
    n = numbers[0]
    
    for i in range(1, n + 1):
        roman_n = ''
        num = numbers[i]
        
        if num < 4:
            roman_n = 'I' * num
        elif num == 4:
            roman_n = 'IV'
        elif num == 5:
            roman_n = 'V'
        elif num < 9:
            roman_n = 'V' + 'I' * (num - 5)
        elif num == 9:
            roman_n = 'IX'
            
        roman_numbers.append(roman_n)
    return roman_numbers

print(romanizer([5, 1, 2, 3, 4, 5]))