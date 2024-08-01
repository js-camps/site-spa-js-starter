import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// Log the matchers to debug
console.log('Matchers:', matchers);

// Ensure the matchers are correctly imported and used
if (Object.keys(matchers).length > 0) {
  expect.extend(matchers);
} else {
  console.error('Matchers object is undefined or null');
}
