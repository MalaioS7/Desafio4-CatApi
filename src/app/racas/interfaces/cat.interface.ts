export type Root = CatInterface[]

export interface CatInterface {
  name: string
  life_span: string
  temperament: string
  origin: string
  description: string
  country_code: string
  rare: number
  natural: number
  adaptability: number
  intelligence: number
  id: string
  image?: {url: string}
  wikipedia_url?: string
}

export interface Weight {
  imperial: string
  metric: string
}
