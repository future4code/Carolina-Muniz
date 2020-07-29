

test("testando saldo maior que valor do produto", () => {
	const user: User = {
		name: "Carol",
		balance: 500
	}

	const result = performPurchase(user, 100)
	
	expect(result).toEqual({
		...user,
		balance: 400
	})
})