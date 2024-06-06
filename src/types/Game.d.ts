export interface Game {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  platform?: string;
  images?: Array<String> | boolean;
  buyerId?: number;
  available?: "true" | "false";
}
