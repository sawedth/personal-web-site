import { GET_SKILL } from "./actions";
import figma from "../assets/logos/figma.jpg"
import js from "../assets/logos/js.jpg"
import node from "../assets/logos/node.jpg"
import react from "../assets/logos/react.png"
import redux from "../assets/logos/redux.png"
import vs from "../assets/logos/vs.png"
import data from "../data.json"

const initialState = {...data,
    logos: [js, react, redux, node, vs, figma]
 }

export default function reducer(state = initialState, action) {
    switch (action.type){
        default:
            return state;
    }
}