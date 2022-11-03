import { reverseArray, withdraw, getAdults } from './script';

it('should get reversed string Array', () => {
    const result = reverseArray(['Roman', 'Anna', 'Ivan', 'Vika']);
    expect(result).toEqual(['Vika', 'Ivan', 'Anna', 'Roman']);
});

it('should get reversed number Array', () => {
    const result = reverseArray([1, 2, 3, 4, 5]);
    expect(result).toEqual([5, 4, 3, 2, 1]);
});

it('should return null', () => {
    const result = reverseArray(1, 2, 3);
    expect(result).toEqual(null);
});

it('should return balance of client', () => {
    const result = withdraw(
        ['Ann', 'John', 'User'],
        [1400, 87, -6],
        'John',
        50
    );
    expect(result).toEqual(37);
});

it('should return -1 if on balance is smaller amount', () => {
    const result = withdraw(
        ['Ann', 'John', 'User'],
        [1400, 87, -6],
        'User',
        10
    );
    expect(result).toEqual(-1);
});

it('should return null if not array', () => {
    const result = withdraw(
        ['Ann', 'John', 'User'],
        (1400, 87, -6),
        'User',
        10
    );
    expect(result).toEqual(null);
});

it('should return names who is adult', () => {
    const result = getAdults({
        Roman: 22,
        Anna: 16,
        Vika: 16,
        Olena: 54,
    });
    expect(result).toEqual({
        Roman: 22,
        Olena: 54,
    });
});

it('should return names who is adult', () => {
    const result = getAdults({
        Roman: 17,
        Anna: 16,
        Vika: 16,
        Olena: 5,
    });
    expect(result).toEqual({});
});

it('should return empty object', () => {
    const result = getAdults({});
    expect(result).toEqual({});
});
