/**
 * Creates a state machine from a definition object.
 *
 * @param {Object} definition The state machine definition.
 * @returns {Object} A state machine instance.
 */
export const createMachine = (definition) => {
  let currentState = definition.initial;

  const transition = (event) => {
    const currentStateDefinition = definition.states[currentState];
    const nextState = currentStateDefinition.on?.[event];

    if (nextState) {
      currentState = nextState;
    }

    return currentState;
  };

  const getState = () => currentState;

  return {
    transition,
    getState,
  };
};
