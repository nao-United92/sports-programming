import { createMachine } from './state-machine-utils.js';

const machineDefinition = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      on: {
        SUCCESS: 'success',
        FAILURE: 'failure',
      },
    },
    success: {
      type: 'final',
    },
    failure: {
      on: {
        RETRY: 'loading',
      },
    },
  },
};

describe('createMachine', () => {
  test('should return an object with transition and getState methods', () => {
    const machine = createMachine(machineDefinition);
    expect(machine).toHaveProperty('transition');
    expect(machine).toHaveProperty('getState');
  });

  test('should start in the initial state', () => {
    const machine = createMachine(machineDefinition);
    expect(machine.getState()).toBe('idle');
  });

  test('should transition to the next state on a valid event', () => {
    const machine = createMachine(machineDefinition);
    machine.transition('FETCH');
    expect(machine.getState()).toBe('loading');
  });

  test('should not transition on an invalid event', () => {
    const machine = createMachine(machineDefinition);
    machine.transition('INVALID_EVENT');
    expect(machine.getState()).toBe('idle');
  });

  test('should handle multiple transitions', () => {
    const machine = createMachine(machineDefinition);
    machine.transition('FETCH');
    machine.transition('SUCCESS');
    expect(machine.getState()).toBe('success');
  });

  test('should not transition from a final state', () => {
    const machine = createMachine(machineDefinition);
    machine.transition('FETCH');
    machine.transition('SUCCESS');
    machine.transition('SOME_EVENT'); // Should not transition from 'success'
    expect(machine.getState()).toBe('success');
  });

  test('should allow transitioning back to a previous state', () => {
    const machine = createMachine(machineDefinition);
    machine.transition('FETCH');
    machine.transition('FAILURE');
    machine.transition('RETRY');
    expect(machine.getState()).toBe('loading');
  });
});
