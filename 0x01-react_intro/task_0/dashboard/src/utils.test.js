import { describe, it } from 'mocha';
import assert from 'assert';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('Utils functionality', function () {
  describe('#getFullYear()', function () {
    it('should return the correct year', function () {
      assert.strictEqual(getFullYear(), 2023);
    });

    it('should return the correct data type', function () {
      assert.ok(typeof getFullYear() === 'number');
    });
  });

  describe('#getFooterCopy()', function () {
    it('should return the correct string if currently on dashboard', function () {
      assert.strictEqual(getFooterCopy(true), 'Holberton School');
    });

    it('should return the correct string if input is false', function () {
      assert.strictEqual(getFooterCopy(false), 'Holberton School main dashboard');
    });
  });

  describe('#getLatestNotification', function () {
    it('should return a well formated string', function () {
      const response = getLatestNotification();
      assert.strictEqual('<strong>Urgent requirement</strong> - complete by EOD',
      response);
    });
  });
});