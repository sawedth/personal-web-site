export const GET_SKILL = "GET_SKILL";

export const getSkill = (index) => {
    return { type: GET_SKILL, payload: index};
}