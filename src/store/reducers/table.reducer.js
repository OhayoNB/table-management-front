import { tableService } from '../../services/table.service'

const initialState = {
  tables: [],
  table: null,
}

export function tableReducer(state = initialState, action) {
  let tables
  switch (action.type) {
    case 'SET_TABLE':
      state = { ...state, table: action.table }
      break

    case 'SET_TABLES':
      state = { ...state, tables: action.tables }
      break

    case 'CLEAR_TABLE':
      state = { ...state, table: null }
      break

    case 'UPDATE_TABLES':
      tables = state.tables.map((table) =>
        table._id === action.table._id ? action.table : table
      )
      state = { ...state, tables }
      break

    case 'REMOVE_TABLE':
      tables = state.tables.filter((table) => {
        return table._id !== action.tableId
      })
      state = { ...state, tables }
      break

    default:
      return state
  }
  // For debug:
  window.state = state
  return state
}
