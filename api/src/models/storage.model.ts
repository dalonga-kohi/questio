import Quest from './quest.model'

export default interface Storage extends Quest {
  is_done?: boolean
  author_name?: string
  image_done?: string
}
