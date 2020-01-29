const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Hand on redux",
      lessons: [
        { id: 1, title: "1st class" },
        { id: 2, title: "2nd class" }
      ]
    },
    {
      id: 2,
      title: "Hand on react",
      lessons: [
        { id: 3, title: "3th class" },
        { id: 4, title: "4th class" }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }

  return state;
}
