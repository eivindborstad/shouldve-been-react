import React from 'react';
import { toggleSelectRow } from '../entry';

test('Tests ToggleSelectRow', () => {

    let currentlySelectedRows = ['1', '3'];
    let rightClickSelected = '2';
    toggleSelectRow('4', currentlySelectedRows, (value) => currentlySelectedRows = value, (value) => rightClickSelected = value)
    expect(currentlySelectedRows.length).toBe(3);
    expect(currentlySelectedRows[0]).toBe('1');
    expect(currentlySelectedRows[1]).toBe('3');
    expect(currentlySelectedRows[2]).toBe('4');
    expect(rightClickSelected).toBeNull();
    toggleSelectRow('1', currentlySelectedRows, (value) => currentlySelectedRows = value, (value) => rightClickSelected = value)
    expect(currentlySelectedRows.length).toBe(2);
    expect(currentlySelectedRows[0]).toBe('3');
    expect(currentlySelectedRows[1]).toBe('4');
});