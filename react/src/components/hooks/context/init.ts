export const defaultState = {
  val: 0
}

interface Itype {
  type: string,
  payload? : object
}
export function reducer(state: any, action: Itype) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        val: state.val+1
      };
    case 'CUT': 
      return {
        ...state,
        val: state.val-1
      };
    default: 
     throw new Error()
  }
}