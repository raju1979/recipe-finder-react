export const SET_RECIPES = 'SET_RECIPE';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export function setRecipes(items){
  return{
    type:SET_RECIPES,
    items
  }
}

export function favoriteRecipes(recipe){
  return{
    type:FAVORITE_RECIPE,
    recipe
  }
}
