import * as midi from './midi'
import make from './global'

export const play = (note) => midi.playNote(0, note, 50)
make(['ms20','play'], play)