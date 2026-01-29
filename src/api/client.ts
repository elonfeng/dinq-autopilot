export interface DinqAPIResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
}

export class DinqClient {
  constructor(
    private baseURL: string,
    private token: string
  ) {}

  private async request<T>(
    method: string,
    path: string,
    body?: any
  ): Promise<T> {
    const url = `${this.baseURL}${path}`;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
    };

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API request failed: ${response.status} ${error}`);
    }

    return response.json() as Promise<T>;
  }

  // Generate a card
  async generateCard(params: {
    type: string;
    datasource_id: string;
    url?: string;
    urls?: Record<string, string>;
    bio?: string;
  }) {
    return this.request("POST", "/api/v1/card/generate", params);
  }

  // Get card board
  async getCardBoard() {
    return this.request("GET", "/api/v1/card-board");
  }

  // Add a board
  async addBoard(params: {
    type: string;
    data: {
      title?: string;
      content?: string;
      type?: string;
      metadata?: Record<string, any>;
    };
  }) {
    return this.request("POST", "/api/v1/card-board/add", params);
  }

  // Delete a board
  async deleteBoard(id: string) {
    return this.request("DELETE", `/api/v1/card-board/delete/${id}`);
  }

  // Update card board
  async updateCardBoard(boards: any[]) {
    return this.request("POST", "/api/v1/card-board", { board: boards });
  }
}
