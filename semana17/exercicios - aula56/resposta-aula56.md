EXERCÍCIO 1
a. O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
Salt é uma string concatenada a senha de forma aleatória antes de efetuar uma operação de hash. Seu uso permite que toda vez que o hash for gerado seja diferente, mesmo que a seha seja a mesma.