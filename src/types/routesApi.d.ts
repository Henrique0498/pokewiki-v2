export type FetchList = {
  count: number
  next: string
  previous: string
  results: ListItemData
}

export type ListItemData = ItemList[]

export type ItemList = {
  name: string
  url: string
}

export type RoutersPagePokeApiType = 'pokemon' | 'berry' | 'item' | 'move'

export type FetchPokemonType = {
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  held_items: [
    {
      item: {
        name: string
        url: string
      }
      version_details: {
        rarity: number
        version: {
          name: string
          url: string
        }
      }[]
    }
  ]
  id: number
  moves: {
    move: {
      name: string
      url: string
    }
    version_group_details: {
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      }
      version_group: {
        name: string
        url: string
      }
    }[]
  }[]
  name: string
  sprites: {
    back_default: string
    back_female?: string
    back_shiny: string
    back_shiny_female?: string
    front_default: string
    front_female?: string
    front_shiny: string
    front_shiny_female?: string
    other: {
      dream_world: {
        front_default: string
        front_female?: string
      }
      home: {
        front_default: string
        front_female?: string
        front_shiny: string
        front_shiny_female?: string
      }
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  weight: number
}
