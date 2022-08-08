import React from 'react';
import { splitJyutping, Token } from './convert';



describe('splitJyutping', () => {

  test('case 0', () => {

    const input = 'seon3';

    const tokens = splitJyutping(input);

    expect(tokens).toEqual([
      Token.s,
      Token.eon,
      Token._3,
    ]);

  });

});
