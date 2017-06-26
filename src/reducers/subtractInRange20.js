import subtractInRange20PuzzleGenerator, { checkPuzzle } from '../utils/subtractInRange20PuzzleGenerator'
import makePuzzleReducer from './makePuzzleReducer'


export default makePuzzleReducer(subtractInRange20PuzzleGenerator, checkPuzzle)
