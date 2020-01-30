import { APIGatewayProxyEvent } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent): Promise<any> {
  return {
    statusCode: 200,
    body: "Hello world"
  }
}
