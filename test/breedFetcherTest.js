const { breedFetcher } = require('../breedFetcher');
const { assert } = require('chai');

describe('breedFetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    breedFetcher('Siberian', (error, description) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, description.trim());

      done();
    });
  });
  it(`returns an error if the breed that was called is invalid, via callback`, (done) => {
    breedFetcher('Parrot', (error, description) => {
      const expectedDesc = 'Please enter a valid breed';

      assert.equal(error, expectedDesc);

      assert.equal(description, null);

      done();
    });
  });
});