import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  img: '',
  title: 'My Quest',
  desc: 'Something about my quest',
  steps: ['Create New Quest']
}
const emptyState = {
    img: '',
    title: '',
    desc: '',
    steps: []
  }
interface State {
  img: string
  title: string
  desc: string
  steps: Array<string>
}

interface Action {
  payload: {
    img?: string
    title?: string
    desc?: string
    newStep?: string
    popIndex?: number
   }
}

const QuestPanelSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    clearContents: (state: State) => {
        state = emptyState
        return state
    },
    initContents: (state: State) => {
      state = initialState
      return state
    },
    updateTitle: (state: State, action: Action) => {
        if(action.payload.title) {
            state.title = action.payload.title
        }
    },
    updateDescription: (state: State, action: Action) => {
        if(action.payload.desc) {
            state.desc = action.payload.desc
        }
    },
    updateImg: (state: State, action: Action) => {
        if(action.payload.img) {
            state.img = action.payload.img
        }
    },
    pushStep: (state: State, action: Action) => {
        if(action.payload.newStep) {
            state.steps.push(action.payload.newStep)
        }
    },
    popStep: (state: State, action: Action) => {
        if(action.payload.popIndex) {
            state.steps.splice(action.payload.popIndex)
        }
    },
  },
})

export const { clearContents,initContents, popStep, pushStep, updateDescription, updateImg, updateTitle } = QuestPanelSlice.actions

export default QuestPanelSlice.reducer
