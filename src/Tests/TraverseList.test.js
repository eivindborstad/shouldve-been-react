import React from 'react';
import { handleTraverseList } from '../entry';

test('Tests TraverseList', () => {

    let value = '1';
    handleTraverseList(new KeyboardEvent('keypress', {key: 'ArrowDown'}), value, (newValue) => value = newValue, ['1', '2', '3']);
    expect(value).toBe('2');

    value = '3';
    handleTraverseList(new KeyboardEvent('keypress', {key: 'ArrowUp'}), value, (newValue) => value = newValue, ['1', '2', '3']);
    expect(value).toBe('2');

    value = '1';
    handleTraverseList(new KeyboardEvent('keypress', {key: 'ArrowUp'}), value, (newValue) => value = newValue, ['1', '2', '3']);
    expect(value).toBe('1');

    value = '3';
    handleTraverseList(new KeyboardEvent('keypress', {key: 'ArrowRight'}), value, (newValue) => value = newValue, ['1', '2', '3']);
    expect(value).toBe('3');

    value = '';
    handleTraverseList(new KeyboardEvent('keypress', {key: 'ArrowDown'}), value, (newValue) => value = newValue, ['1', '2', '3']);
    expect(value).toBe('');

    value = '1';
    handleTraverseList(new KeyboardEvent('keypress', {key: 'ArrowDown'}), value, (newValue) => value = newValue, ['2', '3']);
    expect(value).toBe('1');

    value = '1';
    handleTraverseList(new KeyboardEvent('keypress', {key: 'ArrowDown'}), value, (newValue) => value = newValue, []);
    expect(value).toBe('1');
});