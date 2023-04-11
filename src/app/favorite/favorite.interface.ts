export type Root = FavoriteInterface[]

export interface FavoriteInterface {
  id: string,
  user_id: string,
  image_id: string,
  sub_id:string,
  image: image
}

export interface image{
  url: string
}
