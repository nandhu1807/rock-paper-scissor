import { randomChoice } from '../../client/utils/GameLogic';

describe('Game Logic Tests', () => {
  test('should return random choice as Rock', () => {
    jest.spyOn(Math, 'floor').mockReturnValue(0);
    expect(randomChoice()).toBe('Rock');
  });

  test('should return random choice as Paper', () => {
    jest.spyOn(Math, 'floor').mockReturnValue(1);
    expect(randomChoice()).toBe('Paper');
  });

  test('should return random choice as Scissors', () => {
    jest.spyOn(Math, 'floor').mockReturnValue(2);
    expect(randomChoice()).toBe('Scissors');
  });

  test('should return random choice as default Rock', () => {
    jest.spyOn(Math, 'floor').mockReturnValue(3);
    expect(randomChoice()).toBe('Rock');
  });
});
