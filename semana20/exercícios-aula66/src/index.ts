interface LambdaOutput {
    statusCode: number,
    body: string
}

exports.handler = async (event: LambdaOutput) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Olá mundo, sou uma mensagem da AWS'),
    };
    return response;
};