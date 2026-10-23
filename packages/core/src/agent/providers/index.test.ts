import { describe, expect, it } from 'vitest';
import { createProviders } from './index.ts';

const deckmaster = { id: 'deckmaster', name: 'Deckmaster', type: 'acp' as const, command: 'node' };

describe('createProviders', () => {
  it('offers the built-in providers next to configured ACP agents', () => {
    expect(Object.keys(createProviders([deckmaster]))).toEqual(['claude', 'codex', 'deckmaster']);
  });

  it('offers only configured ACP agents when built-ins are off', () => {
    expect(Object.keys(createProviders([deckmaster], '1.0.0', false))).toEqual(['deckmaster']);
  });
});
