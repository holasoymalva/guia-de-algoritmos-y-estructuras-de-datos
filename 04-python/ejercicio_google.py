S = 'abppplee'
D = {"able", "ale", "apple", "bale", "kangaroo"}

def find_long_word(S,D):
	longest_word=''
	for word in D:
		if es_subsecuencia(word, S):
			if len(word) > len(longest_word):
				longest_word = word
	return longest_word

def es_subsecuencia(word, S):
	i = 0
	for letras in word:
		if i >= len(S):
			return False
		while letras != S[i]:
			i += 1
			if i >= len(S):
				return False
		i += 1
	return True

print( find_long_word(S,D) )
