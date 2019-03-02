import { Response } from './response';

describe('Response', () => {
  beforeEach(() => {
  });

  it('should throw error on bad input', () => {
    try {
      const r = new Response({
        participant: 5,
        block: 'fakeblock',
        action: 'fakeaction',
        response: 'clicked a thing'
      });
    } catch (e) {
      expect(e.message).toContain('invalid');
    }
  });

  it('should export as valid csv', () => {
    const r = new Response({
      id: Date.now(),
      datestamp: new Date().toISOString(),
      participant: 5,
      block: 'fakeblock',
      action: 'fakeaction',
      response: 'clicked a thing, here is a comma and \, with \n newline'
    });

    const header = r.getCSVHeader();
    expect(header).toBe('id,datestamp,participant,block,action,response,\n');
    console.log('CSV OUTPUT', r.toCSV());

    const s = new Response();
    const header2 = s.getCSVHeader();
    expect(header2).toBe('id,datestamp,participant,block,action,response,\n');
    console.log('CSV OUTPUT', s.toCSV());
  });
});
