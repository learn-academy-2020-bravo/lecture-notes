# Ruby Blocks
# A block is an anonymous function that gets passed to a method and returns a value.

## Times

# curly brace block
5.times {'hello'}

# do/end block
5.times do
  'hello'
end

# generate the numbers 1-10
# adds one to num everytime the block executes
num = 1
10.times do
  p num
  num +=1
end


## Each

nums = [2, 3, 4, 5, 6]
# prints 'yo' as many times as nums is long
nums.each do
  p 'yo'
end

# can take an argument in the block
nums.each do |val|
  p val * 3
end


# While

# a loop that defines the start, the ending condition and the iteration
num = 1
while num <=10
  p num
  num += 2
end

## Ranges

1...5 # 1, 2, 3, 4 (exclusive)
1..5 # 1, 2, 3, 4, 5 (inclusive)

# ranges don't print all the values on their own
(1..20).each do |value|
  p value
end

# ranges of letters
('a'..'z').each do |value|
  p value
end

# nesting an if/else/end inside a block
range = 1..10
range.each do |value|
  if value % 2 == 0
    p 'even'
  else
    p value
  end
end


## Map

# Map is like .each but better, map returns the values as an array

# nums = [2, 3, 4, 5, 6]

# wrapping the block in a custom method
def showing_odds array
  array.map do |value|
    if value % 2 == 0
      'even'
    else
      value
    end
  end
end

p showing_odds nums

# Ruby methods are generally accessors
# using the bang operator ! will make the method a mutator

# nums = [2, 3, 4, 5, 6]
p "og"
p nums
def showing_odds array
  array.map! do |value|
    value ** 2
  end
end

p showing_odds nums
p "changed"
p nums

# Using map on a hash
coworkers = { boss_lady: 'Chelsea', marketing: 'TJ', career: 'Bryan', operations: 'Hillary'}

# mapping a hash takes two arguments
def check_hash hash
  sentence = hash.map do |key, value|
    "The #{key} person is a #{value}."
  end
  sentence.join" "
end
p check_hash coworkers

# can be written like this too - join chained to the do/end
# def check_hash hash
#   hash.map do |key, value|
#     "The #{key} person is a #{value}"
#   end.join" "
# end
# p check_hash coworkers

# mapping a hash takes two arguments even if you only need one
# def check_hash hash
#   sentence = hash.map do |key, value|
      # "The #{key}."
      # --or--
      # "The #{value}."
#   end
#   sentence.join" "
# end
# p check_hash coworkers


## Select

# select acts like filter
# nums = [2, 3, 4, 5, 6, 7]

def is_even array
  array.select do |value|
    value.even?
  end
end
p is_even nums



words = ['hey', 'yo', 'sup', 'hello']
def has_e array
  array.select do |value|
    value.include?'e'
  end
end
p has_e words
