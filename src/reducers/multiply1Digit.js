import multiply1DigitPuzzleGenerator, { checkPuzzle } from '../utils/multiply1DigitPuzzleGenerator'
import makePuzzleReducer from './makePuzzleReducer'


export default makePuzzleReducer(multiply1DigitPuzzleGenerator, checkPuzzle)
